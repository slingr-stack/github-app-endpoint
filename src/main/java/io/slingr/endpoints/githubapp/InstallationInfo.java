package io.slingr.endpoints.githubapp;

import io.slingr.endpoints.utils.Json;

public class InstallationInfo {
    private String id;
    private String installationId;
    private String account;
    private String repositories;
    private Token token;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getInstallationId() {
        return installationId;
    }

    public void setInstallationId(String installationId) {
        this.installationId = installationId;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getRepositories() {
        return repositories;
    }

    public void setRepositories(String repositories) {
        this.repositories = repositories;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

    public Json toJson() {
        Json json = Json.map()
                .set("_id", id)
                .set("installationId", installationId)
                .set("account", account)
                .set("repositories", repositories);
        if (token != null) {
            json.set("token", token.toJson());
        }
        return json;
    }

    public void fromJson(Json json) {
        id = json.string("_id");
        installationId = json.string("installationId");
        account = json.string("account");
        repositories = json.string("repositories");
        if (json.contains("token")) {
            token = new Token(json.json("token"));
        }
    }
}
