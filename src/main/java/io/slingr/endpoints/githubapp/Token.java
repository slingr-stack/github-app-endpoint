package io.slingr.endpoints.githubapp;

import io.slingr.endpoints.utils.Json;

import java.util.Date;

public class Token {
    private String token;
    private Date expiration;

    public Token(String token, Date expiration) {
        this.token = token;
        this.expiration = expiration;
    }

    public Token(Json json) {
        fromJson(json);
    }

    public String getToken() {
        return token;
    }

    public Date getExpiration() {
        return expiration;
    }

    public Json toJson() {
        return Json.map()
                .set("token", token)
                .set("expiration", expiration);
    }

    public void fromJson(Json json) {
        token = json.string("token");
        if (json.object("expiration") instanceof Date) {
            expiration = json.date("expiration");
        } else {
            expiration = new Date(json.longInteger("expiration"));
        }
    }
}
