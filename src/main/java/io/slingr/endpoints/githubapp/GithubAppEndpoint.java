package io.slingr.endpoints.githubapp;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import io.slingr.endpoints.HttpPerUserEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.exceptions.ErrorCode;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.exchange.ReservedName;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.apache.commons.lang.StringUtils;
import org.apache.http.entity.ContentType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.security.interfaces.RSAPrivateKey;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * <p>Github app endpoint
 *
 * <p>Created by dgaviola on 08/30/17.
 */
@SlingrEndpoint(name = "github-app")
public class GithubAppEndpoint extends HttpPerUserEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(GithubAppEndpoint.class);

    private static final String API_URL = "https://api.github.com";

    @ApplicationLogger
    protected AppLogs appLogger;

    @EndpointProperty
    private String appId;

    @EndpointProperty
    private String privateKey;

    @EndpointProperty
    private String webhookSecret;

    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String clientSecret;

    @EndpointProperty
    private String scopes;

    private Token jsonWebToken = null;

    @EndpointDataStore
    protected DataStore installations;

    public GithubAppEndpoint() {
    }

    // this constructor is for testing
    public GithubAppEndpoint(String appId, String privateKey, String webhookSecret) {
        this.appId = appId;
        this.privateKey = privateKey;
        this.webhookSecret = webhookSecret;
    }

    @Override
    public String getApiUri() {
        return API_URL;
    }

    public void setInstallations(DataStore installations) {
        this.installations = installations;
    }

    @Override
    public void endpointStarted() {
        if (privateKey != null) {
            // if the user puts the private key with \n we need to convert it accordingly
            privateKey = privateKey.replaceAll("\\\\n", "\n");
        }
        httpService().setAllowExternalUrl(true);
    }

    // Authentication process

    @EndpointWebService(path = "authCallback")
    public WebServiceResponse authCallback() {
        return new WebServiceResponse("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n" +
                "<html>\n" +
                "<head>\n" +
                "<title>Slack authentication</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "</body>\n" +
                "</html>", ContentType.TEXT_HTML.toString());
    }

    @EndpointFunction(name = ReservedName.CONNECT_USER)
    public Json connectUser(FunctionRequest request) {
        final String userId = request.getUserId();
        if(StringUtils.isNotBlank(userId)) {
            // checks if the user includes a non-empty 'code' on the request
            final Json jsonBody = request.getJsonParams();
            if (jsonBody != null && StringUtils.isNotBlank(jsonBody.string("code"))) {
                String code = jsonBody.string("code");
                Json accessTokenRequest = Json.map()
                        .set("path", "https://github.com/login/oauth/access_token")
                        .set("headers", Json.map().set("Accept", "application/json"))
                        .set("body", Json.map()
                                .set("client_id", clientId)
                                .set("client_secret", clientSecret)
                                .set("code", code)
                                .set("redirect_uri", jsonBody.string("redirectUri"))
                                .set("state", properties().getApplicationName())
                        );
                Json res = httpService().defaultPostRequest(accessTokenRequest);
                if (res.contains("access_token")) {
                    // saves the information on the users data store
                    Json conf = users().save(userId, res);
                    logger.info(String.format("User connected [%s] [%s]", userId, conf.toString()));

                    // sends connected user event
                    users().sendUserConnectedEvent(request.getFunctionId(), userId, conf);

                    return conf;
                } else {
                    logger.warn(String.format("Problems trying to connect user [%s] to Slack: %s", userId, res.toString()));
                    appLogger.warn(String.format("Problems trying to connect user [%s] to Slack: %s", userId, res.string("error")));
                }
            } else {
                logger.info(String.format("Empty 'code' when try to connect user [%s] [%s]", userId, request.toString()));
            }
        }
        defaultMethodDisconnectUsers(request);
        return Json.map();
    }

    private synchronized String getJsonWebToken() {
        if (jsonWebToken == null || jsonWebToken.getExpiration().before(new Date())) {
            RSAPrivateKey rsaPrivateKey = null;
            try {
                rsaPrivateKey = (RSAPrivateKey) new PrivateKeyReader(privateKey).getPrivateKey();
            } catch (IOException | GeneralSecurityException e) {
                logger.error("Error reading private key", e);
                throw EndpointException.permanent(ErrorCode.ARGUMENT, "Error reading private key. Please verify it is correct.");
            }
            Algorithm algorithm = Algorithm.RSA256(null, rsaPrivateKey);
            String token = JWT.create()
                    .withIssuer(appId)
                    .withIssuedAt(new Date())
                    .withExpiresAt(new Date(new Date().getTime() + 10 * 60 * 1000))
                    .sign(algorithm);
            // we set expiration to 9 minutes so we don't get too close to the limit
            jsonWebToken = new Token(token, new Date(new Date().getTime() + 9 * 60 * 1000));
        }
        return jsonWebToken.getToken();
    }

    private String getAccessTokenForAccount(String account) {
        Json installationJson = installations.findOne(Json.map().set("account", account));
        if (installationJson == null) {
            throw EndpointException.permanent(ErrorCode.ARGUMENT, String.format("Installation for account [%s] was not found", account));
        }
        InstallationInfo installationInfo = new InstallationInfo();
        installationInfo.fromJson(installationJson);
        Token token = installationInfo.getToken();
        if (token == null || token.getExpiration() == null || token.getExpiration().before(new Date())) {
            // we need to generate a token
            Json request = Json.map()
                    .set("path", "/installations/" + installationInfo.getInstallationId() + "/access_tokens")
                    .set("headers", Json.map()
                            .set("Authorization", "Bearer " + getJsonWebToken())
                            .set("Accept", "application/vnd.github.machine-man-preview+json")
                    );
            Json res = httpService().defaultPostRequest(request);
            Date expiration = DateHelper.convertToDate(res.string("expires_at"));
            // reduce expiration by 1 minute to void race conditions
            expiration = new Date(expiration.getTime() - 1 * 60 * 1000);
            token = new Token(res.string("token"), expiration);
            installationInfo.setToken(token);
            installations.save(installationInfo.toJson());
        }
        return token.getToken();
    }

    // Internal methods

    @EndpointFunction(name = "_appGet")
    public Json appGet(FunctionRequest request) {
        setAppRequestHeaders(request);
        Json res = defaultGetRequest(request);
        return res;
    }

    @EndpointFunction(name = "_appPost")
    public Json appPost(FunctionRequest request) {
        setAppRequestHeaders(request);
        Json res = defaultPostRequest(request);
        return res;
    }

    @EndpointFunction(name = "_appPut")
    public Json appPut(FunctionRequest request) {
        setAppRequestHeaders(request);
        Json res = defaultPutRequest(request);
        return res;
    }

    @EndpointFunction(name = "_appPatch")
    public Json appPatch(FunctionRequest request) {
        setAppRequestHeaders(request);
        Json res = defaultPatchRequest(request);
        return res;
    }

    @EndpointFunction(name = "_appDelete")
    public Json appDelete(FunctionRequest request) {
        setAppRequestHeaders(request);
        Json res = defaultDeleteRequest(request);
        return res;
    }


    @EndpointFunction(name = "_userGet")
    public Json userGet(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultGetRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_userPost")
    public Json userPost(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultPostRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_userPut")
    public Json userPut(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultPutRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_userPatch")
    public Json userPatch(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultPatchRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_userDelete")
    public Json userDelete(FunctionRequest request) {
        try {
            setUserRequestHeaders(request);
            Json res = defaultDeleteRequest(request);
            return res;
        } catch (EndpointException restException) {
            if (restException.getCode() == ErrorCode.CLIENT) {
                users().sendUserDisconnectedEvent(request.getUserId());
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_installGet")
    public Json installGet(FunctionRequest request) {
        setInstallRequestHeaders(request);
        Json res = defaultGetRequest(request);
        return res;
    }

    @EndpointFunction(name = "_installPost")
    public Json installPost(FunctionRequest request) {
        setInstallRequestHeaders(request);
        Json res = defaultPostRequest(request);
        return res;
    }

    @EndpointFunction(name = "_installPut")
    public Json installPut(FunctionRequest request) {
        setInstallRequestHeaders(request);
        Json res = defaultPutRequest(request);
        return res;
    }

    @EndpointFunction(name = "_installPatch")
    public Json installPatch(FunctionRequest request) {
        setInstallRequestHeaders(request);
        Json res = defaultPatchRequest(request);
        return res;
    }

    @EndpointFunction(name = "_installDelete")
    public Json installDelete(FunctionRequest request) {
        setInstallRequestHeaders(request);
        Json res = defaultDeleteRequest(request);
        return res;
    }

    private void setAppRequestHeaders(FunctionRequest request) {
        Json body = request.getJsonParams();
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Authorization", "Bearer " + getJsonWebToken());
        headers.set("Content-Type", "application/json");
        if (headers.isEmpty("Accept")) {
            headers.set("Accept", "application/vnd.github.machine-man-preview+json");
        }
        body.set("headers", headers);
        request.getRequest().set("params", body);
    }

    private void setInstallRequestHeaders(FunctionRequest request) {
        Json body = request.getJsonParams();
        String account = body.string("account");
        if (StringUtils.isBlank(account)) {
            throw EndpointException.permanent(ErrorCode.ARGUMENT, "Account cannot be empty");
        }
        String token = getAccessTokenForAccount(account);
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Authorization", "token " + token);
        headers.set("Content-Type", "application/json");
        if (headers.isEmpty("Accept")) {
            headers.set("Accept", "application/vnd.github.machine-man-preview+json");
        }
        body.set("headers", headers);
        request.getRequest().set("params", body);
    }

    private void setUserRequestHeaders(FunctionRequest request) {
        Json userConfig = users().findById(request.getUserId());
        if (userConfig == null || userConfig.isEmpty("access_token")) {
            throw EndpointException.permanent(ErrorCode.CLIENT, String.format("User [%s] is not connected", request.getUserEmail()));
        }
        Json body = request.getJsonParams();
        String token = userConfig.string("access_token");
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Authorization", "token " + token);
        headers.set("Content-Type", "application/json");
        if (headers.isEmpty("Accept")) {
            headers.set("Accept", "application/vnd.github.machine-man-preview+json");
        }
        body.set("headers", headers);
        request.getRequest().set("params", body);
    }

    @EndpointFunction(name = "_syncInstallations")
    public Json syncInstallations(FunctionRequest request) {
        appLogger.info("Syncing installations");
        // TODO we need to implement pagination here
        Json params = Json.map()
                .set("path", "/app/installations")
                .set("headers", Json.map()
                        .set("Authorization", "Bearer " + getJsonWebToken())
                        .set("Accept", "application/vnd.github.machine-man-preview+json")
                );
        Json res = httpService().defaultGetRequest(params);
        int updatedInstallations = 0;
        int createdInstallations = 0;
        appLogger.info(String.format("[%s] installations were found", res.size()));
        for (Json installation : res.jsons()) {
            boolean updated = saveInstallationInfo(installation);
            if (updated) {
                updatedInstallations++;
            } else {
                createdInstallations++;
            }
        }
        appLogger.info("Done syncing installations");
        return Json.map()
                .set("updatedInstallations", updatedInstallations)
                .set("createdInstallations", createdInstallations);
    }

    // Events

    @EndpointWebService
    public Json events(WebServiceRequest request) {
        String signature = request.getHeader("x-hub-signature");
        if (!WebhooksUtils.verifySignature(request.getJsonBody(), signature, webhookSecret)) {
            throw EndpointException.permanent(ErrorCode.ARGUMENT, "Invalid signature");
        }
        Json body = request.getJsonBody();
        String eventName = request.getHeader("x-github-event");
        // detect installations
        if (eventName.equals("installation")) {
            String action = body.string("action");
            Json installation = body.json("installation");
            if ("deleted".equals(action)) {
                // the app was uninstalled from an account, so we need to remove the installation info
                appLogger.info(String.format("Removing installation for account [%s]", installation.json("account").string("login")));
                installations.remove(Json.map().set("installationId", installation.longInteger("id")));
            } else {
                // in any other case we just update the installation info
                saveInstallationInfo(installation);
            }
        } else if (eventName.equals("installation_repositories")) {
            // update repositories
            Json installation = body.json("installation");
            updateInstallationRepos(installation.json("account").string("login"));
        }
        // we add the event name in the body to make it easier for developers to handle the event
        body.set("event_name", eventName);
        events().send("webhook", body, null);
        return Json.map().set("status", "ok");
    }


    private boolean saveInstallationInfo(Json installation) {
        String account = installation.json("account").string("login");
        boolean updated = false;
        appLogger.info(String.format("Syncing installation for account [%s]", account));
        // first let's try to find an existing record for this installation
        Json installationJson = installations.findOne(Json.map().set("account", account));
        InstallationInfo installationInfo = new InstallationInfo();
        if (installationJson != null) {
            installationInfo.fromJson(installationJson);
            updated = true;
        }
        installationInfo.setAccount(account);
        installationInfo.setInstallationId(""+installation.longInteger("id"));
        installations.save(installationInfo.toJson());
        // update repositories associated to an installation
        updateInstallationRepos(account);
        appLogger.info(String.format("Installation for account [%s] was %s", account, updated ? "updated" : "created"));
        return updated;
    }

    private void updateInstallationRepos(String account) {
        Json installationJson = installations.findOne(Json.map().set("account", account));
        if (installationJson == null) {
            throw EndpointException.permanent(ErrorCode.ARGUMENT, String.format("Installation for account [%s] not found", account));
        }
        InstallationInfo installationInfo = new InstallationInfo();
        installationInfo.fromJson(installationJson);
        // TODO: we need to implement pagination here
        Json requestParams = Json.map()
                .set("account", account)
                .set("path", "/installation/repositories")
                .set("headers", Json.map()
                        .set("Accept", "application/vnd.github.machine-man-preview+json")
                );
        Json requestBody = Json.map().set("params", requestParams);
        FunctionRequest request = new FunctionRequest(requestBody);
        Json res = installGet(request);
        List<String> reposNames = new ArrayList<>();
        for (Json repo : res.jsons("repositories")) {
            reposNames.add(repo.string("name"));
        }
        // read again the installation info in case it was updated
        installationJson = installations.findOne(Json.map().set("account", account));
        if (installationJson == null) {
            throw EndpointException.permanent(ErrorCode.ARGUMENT, String.format("Installation for account [%s] not found", account));
        }
        installationInfo.fromJson(installationJson);
        installationInfo.setRepositories(StringUtils.join(reposNames, ","));
        installations.save(installationInfo.toJson());
    }
}