package io.slingr.endpoints.githubapp;

import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.utils.tests.EndpointTests;
import io.slingr.endpoints.ws.exchange.FunctionRequest;

import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

import static org.junit.Assert.*;

@Ignore("For dev purposes")
public class GithubAppEndpointTest {

    private static EndpointTests test;
    private static GithubAppEndpoint endpoint;

    @BeforeClass
    public static void init() throws Exception {
        test = EndpointTests.start(new io.slingr.endpoints.githubapp.Runner(), "test.properties");
        endpoint = (GithubAppEndpoint) test.getEndpoint();
        test.clearDataStores();

        // we need to sync installations first to be able to create access tokens
        endpoint.syncInstallations(new FunctionRequest(null));
    }

    @Test
    public void testGetIssue() {
        Json request = Json.map().set("params", Json.map()
                .set("account", "slingr-stack")
                .set("path", "/repos/slingr-stack/pepito-test/issues/1228"));
        Json res = endpoint.get(new FunctionRequest(request));
        assertNotNull(res);
        assertEquals("test issue 5", res.string("title"));
        request = Json.map().set("params", Json.map()
                .set("account", "slingr-stack")
                .set("path", "/repos/slingr-stack/pepito-test/issues/1232"));
        res = endpoint.get(new FunctionRequest(request));
        assertNotNull(res);
        assertEquals("test issue 11", res.string("title"));
    }
}
