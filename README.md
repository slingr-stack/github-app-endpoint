---
title: GitHub App endpoint
keywords: 
last_updated: September 12, 2017
tags: []
summary: "Detailed description of the API of the GitHub App endpoint."
---

## Overview

The GitHub App endpoints allows to easily create apps for GitHub. It provides the following features:

- Management of installations
- OAuth for users
- Shortcuts to access the REST API
- Support for webhooks

In order to take advantage of this endpoint we strongly recommend to understand how GitHub Apps work and
what you can do with the REST API:

- [GitHub Apps](https://developer.github.com/apps/)
- [GitHub REST API](https://developer.github.com/v3/)

## Configuration

In order to configure the endpoint you will need to create a GitHub App. This can be done in your personal
account or under an organization. Here you can find detailed information on how to do it:

[Registering GitHub Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/)

Once you have created your app you will be able to configure the endpoint.

### App ID

This is the ID of your app.

### Private key

The private key can be generated in the details of your GitHub app. When you copy it you can put it
in one line and use `\n` to indicate new lines.

### Webhooks secret

This is the secret for webhooks configured in your app. It is needed to validate the authenticity of
webhooks.

### Webhooks URL

This is the URL you need to set in your GitHub app so webhooks are sent there.

### Client ID

This is the client ID for OAuth, which is needed in order to perform operations on behalf of a user. 

### Client secret

This is the client secret for OAuth, which is needed in order to perform operations on behalf of a user.

### OAuth callback

This is the OAuth callback you need to configure in your GitHub app.

## Quick start

Once you endpoint is configured, you can read an issue like this:

```js
var issue = app.endpoints.githubApp.app.repos.issues.get('account', 'repo-owner', 'repo-name', 123);
```

And can post a comment to the issue with this code:

```js
var newComment = app.endpoint.repos.issues.comments.post('account', 'repo-owner', 'repo-name', 123, {body: 'test comment'});
```

## Javascript API

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the [GitHub REST API](https://developer.github.com/v3/) 
like this:

```js
var issue = app.endpoints.githubApp.app.get('/repos/ownerName/repoName/issues/123');
var newComment = app.endpoints.githubApp.app.post('/repos/ownerName/repoName/issues/123/comments', {body: 'test comment'});
```

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts

The Javascript API provides shortcuts to make it easier to call the [REST API](https://developer.github.com/v3/).
For example, instead of calling manually the method `GET /repos/:owner/:repo/issues/123`, you can use the following
shortcut:

```js
var issue = app.endpoints.githubApp.app.repos.issues.get('account', 'owner', 'repo', 123);
```

The following rules are used to determine the shortcut signature:

- **App, install and user namespaces**: all methods can be called as the app, one specific installation or as a specific user 
  (see [App, install and user shortcuts](#apps-install-and-user-shortcuts)) so you always need to add the namespace `app`,
  `install` or `user` before each shortcut.
- **Install shortcuts have the account as first parameter**: when you use the `install` namespace, the first parameter is always
  the name of the account that has to be used to make the request to the API. This is needed because the endpoint can
  handle many installations so you need to indicate which installation should be used to perform the request. For example
  the shortcut to post a comment as an app looks like `app.endpoints.githubApp.install.repo.issues.comments(account, owner, repo, issueNumber, commentObject)`
  while when doing it as a user, the shortcut doesn't have the `account` parameter: `app.endpoints.githubApp.user.repo.issues.comments(owner, repo, issueNumber, commentObject)`.
  This is because the endpoint knows which credentials to use based on the current user set in the execution context.
- **Path sections get converted to namespaces**: for example if the method is GET `~/repos/:owner/:repo/issues` 
  it is converted to `app.endpoints.install.repo.issues.get(account, owner, repo)`. 
- **HTTP method is appended at the end of the method**: for example if the method is `GET`, you will see a method with 
  the suffix `.get(...)`. For example `GET ~/repos/:owner/:repo` will become `app.endpoints.githubApp.install.repo.get(owner, repo)`. 
  This is the mapping of names:
  - `GET`: `get`
  - `POST`: `create`
  - `PUT`: `update`
  - `PATCH`: `update`
  - `DELETE`: `delete`
- **Path variables become method parameters**: if the method has variables in the path, they will become parameters for 
  the method. For example `GET ~/repos/:owner/:repo` will become `app.endpoints.githubApp.install.repos.get(account, owner, repo)`.
- **Additional parameters or body are sent in the last param as JSON**: if the method accepts more parameters or it 
  allows to send a body, that will be sent in the last parameter. For example the method `POST ~/repos/:owner/:repo/issues` 
  supports many query parameters, so it will become `app.endpoints.githubApp.install.repos.issues.post(account, owner, repo, {...})`.
  
For `GET` methods it is possible to iterate. If you pass some additional parameters you will be able to easily
iterate results:

```js
app.endpoints.githubApp.install.orgs.issues.get(accout, owner, {
    per_page: 30,
    max_results: 500,
    callback: function(issue) {
        // do something with issue
    }
})
```

In this case the callback function will receive items one by one, until there are no more results or the
max number of results has been reached (`max_results` is optional).

### Apps, install and user shortcuts 

There are three big groups of shortcuts:

- For app requests
- For installation requests
- For user requests

In the first case the app token is used and all operations will be done in behalf of the app. These
shortcuts will be under the `app` namespace. For example:

```js
var res = app.endpoints.githubApp.app.app.installations.get();
```

These requests are not specific to any installation, but to the app itself. So if you need to fetch all installations
or find information of your app in the marketplace, you need to use this namesapce.

The second group are requests associated to an installation, for example:

```js
var res = app.endpoints.githubApp.install.repos.get('account', 'owner', 'repo');
```

In this case the request will be done using credentials for that specific installation and you will have access
to all the things the user granted while installing the app.

Keep in mind that for installation request you should always include the account name as the first parameter. It is very
likely that the account name is the same as the owner, but you still need to send both as it could be different.

Finally you can use the user token. In this case the user should have authorize the endpoint first and request will be 
made on user's behalf. For example if a comment is posted, the user will be the author of the comment. These shortcuts 
are under the `user` namespace, for example:

```js
var res = app.endpoints.githubApp.user.repos.issues.comments.post('owner', 'repo', 123, {body: 'test comment'});
```

Keep in mind that only a few operations are allowed for users:

[User-to-server requests](https://developer.github.com/apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps/#user-to-server-requests)

If you try to make calls to other URL you will get an error.

### Utils

There are some utilities to help you work with data coming from GitHub.

#### Date time parser and formatter

```js
var date = app.endpoints.githubApp.utils.parseTimestamp(str);
var str = app.endpoints.githubApp.utils.formatTimestamp(date);
```

GitHub has timestamps with a format like this: `2013-02-12T13:22:01Z`. This two methods allow to convert
it to a `Date` object and the other way around.

## Events

### Webhook

This event is triggered every time a webhook is triggered on any of the organizations and repositories your app is 
installed.

In the listener handling webhook events, you will be able to see the body of the event in `event.data`:

```js
var body = event.data;
sys.logs.info('Event: '+JSON.stringify(body));
```

The format is as specified in [Event types & payloads](https://developer.github.com/v3/activity/events/types/).

The only difference is that we add a field called `event_name` which is what GitHub sends in the header
`X-GitHub-Event`. This way you can easily know the event type:

```js
var body = event.data;
sys.logs.info('Event name: '+body.event_name);
```

{% include links.html %}


## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

