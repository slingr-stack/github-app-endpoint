var fs = require('fs');

var cache = {};

var apiURLs = {
    'get': [
        '/events',
        '/repos/:owner/:repo/events',
        '/repos/:owner/:repo/issues/events',
        '/networks/:owner/:repo/events',
        '/orgs/:org/events',
        '/users/:username/received_events',
        '/users/:username/received_events',
        '/users/:username/events',
        '/users/:username/events/public',
        '/users/:username/events/orgs/:org',
        '/feeds',
        '/notifications',
        '/repos/:owner/:repo/notifications',
        '/notifications/threads/:id',
        '/notifications/threads/:id/subscription',
        '/repos/:owner/:repo/stargazers',
        '/users/:username/starred',
        '/user/starred',
        '/user/starred/:owner/:repo',
        '/repos/:owner/:repo/subscribers',
        '/users/:username/subscriptions',
        '/user/subscriptions',
        '/repos/:owner/:repo/subscription',
        '/users/:username/gists',
        '/gists',
        '/gists/public',
        '/gists/starred',
        '/gists/:id',
        '/gists/:id/:sha',
        '/gists/:id/commits',
        '/gists/:id/star',
        '/gists/:id/forks',
        '/repos/:owner/:repo/git/blobs/:sha',
        '/repos/:owner/:repo/git/commits/:sha',
        '/repos/:owner/:repo/git/refs/:ref',
        '/repos/:owner/:repo/git/refs',
        '/repos/:owner/:repo/git/tags/:sha',
        '/repos/:owner/:repo/git/trees/:sha',
        '/apps/:app_slug',
        '/app',
        '/app/installations',
        '/app/installations/:installation_id',
        '/user/installations',
        '/installation/repositories',
        '/user/installations/:installation_id/repositories',
        '/marketplace_listing/plans',
        '/marketplace_listing/plans/:id/accounts',
        '/marketplace_listing/accounts/:id',
        '/user/marketplace_purchases',
        '/issues',
        '/user/issues',
        '/orgs/:org/issues',
        '/repos/:owner/:repo/issues',
        '/repos/:owner/:repo/issues/:number',
        '/repos/:owner/:repo/assignees',
        '/repos/:owner/:repo/assignees/:assignee',
        '/repos/:owner/:repo/issues/:number/comments',
        '/repos/:owner/:repo/issues/comments',
        // TODO the following URL has been disabled to avoid conflicts with /repos/:owner/:repo/issues/:number/comments
        // '/repos/:owner/:repo/issues/comments/:id',
        '/repos/:owner/:repo/issues/:issue_number/events',
        '/repos/:owner/:repo/issues/events',
        '/repos/:owner/:repo/issues/events/:id',
        '/repos/:owner/:repo/labels',
        '/repos/:owner/:repo/labels/:name',
        '/repos/:owner/:repo/issues/:number/labels',
        '/repos/:owner/:repo/milestones/:number/labels',
        '/repos/:owner/:repo/milestones',
        '/repos/:owner/:repo/milestones/:number',
        '/repos/:owner/:repo/issues/:issue_number/timeline',
        '/codes_of_conduct',
        '/codes_of_conduct/:key',
        '/repos/:owner/:repo',
        '/repos/:owner/:repo/community/code_of_conduct',
        '/emojis',
        '/gitignore/templates',
        '/gitignore/templates/:name',
        '/licenses',
        '/licenses/:license',
        '/repos/:owner/:repo',
        '/repos/:owner/:repo/license',
        '/meta',
        '/rate_limit',
        '/user/orgs',
        '/organizations',
        '/users/:username/orgs',
        '/orgs/:org',
        '/orgs/:org/members',
        '/orgs/:org/members/:username',
        '/orgs/:org/public_members',
        '/orgs/:org/public_members/:username',
        '/orgs/:org/memberships/:username',
        '/orgs/:org/invitations',
        '/orgs/:org/members',
        '/orgs/:org/members/:username',
        '/orgs/:org/public_members',
        '/orgs/:org/public_members/:username',
        '/orgs/:org/memberships/:username',
        '/orgs/:org/invitations',
        '/user/memberships/orgs',
        '/user/memberships/orgs/:org',
        '/orgs/:org/outside_collaborators',
        '/orgs/:org/teams',
        '/teams/:id',
        '/teams/:id/teams',
        '/teams/:id/members',
        '/teams/:id/members/:username',
        '/teams/:id/memberships/:username',
        '/teams/:id/invitations',
        '/teams/:id/repos',
        '/teams/:id/repos/:owner/:repo',
        '/user/teams',
        '/orgs/:org/hooks',
        '/orgs/:org/hooks/:id',
        '/orgs/:org/blocks',
        '/orgs/:org/blocks/:username',
        '/repos/:owner/:repo/projects',
        '/orgs/:org/projects',
        '/projects/:id',
        '/projects/columns/:column_id/cards',
        '/projects/columns/cards/:id',
        '/projects/:project_id/columns',
        '/projects/columns/:id',
        '/repos/:owner/:repo/pulls',
        '/repos/:owner/:repo/pulls/:number',
        '/repos/:owner/:repo/pulls/:number/commits',
        '/repos/:owner/:repo/pulls/:number/files',
        '/repos/:owner/:repo/pulls/:number/merge',
        '/repos/:owner/:repo/pulls/:number/reviews',
        '/repos/:owner/:repo/pulls/:number/reviews/:id',
        '/repos/:owner/:repo/pulls/:number/reviews/:id/comments',
        '/repos/:owner/:repo/pulls/:number/comments',
        '/repos/:owner/:repo/pulls/comments',
        '/repos/:owner/:repo/pulls/comments/:id',
        '/repos/:owner/:repo/pulls/:number/requested_reviewers',
        '/repos/:owner/:repo/comments/:id/reactions',
        '/repos/:owner/:repo/issues/:number/reactions',
        '/repos/:owner/:repo/issues/comments/:id/reactions',
        '/repos/:owner/:repo/pulls/comments/:id/reactions',
        '/user/repos',
        '/users/:username/repos',
        '/orgs/:org/repos',
        '/repositories',
        '/repos/:owner/:repo',
        '/repos/:owner/:repo/topics',
        '/repos/:owner/:repo/contributors',
        '/repos/:owner/:repo/languages',
        '/repos/:owner/:repo/teams',
        '/repos/:owner/:repo/tags',
        '/repos/:owner/:repo/branches',
        '/repos/:owner/:repo/branches/:branch',
        '/repos/:owner/:repo/branches/:branch/protection',
        '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
        '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
        '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
        '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
        '/repos/:owner/:repo/collaborators',
        '/repos/:owner/:repo/collaborators/:username',
        '/repos/:owner/:repo/collaborators/:username/permission',
        '/repos/:owner/:repo/comments',
        '/repos/:owner/:repo/commits/:ref/comments',
        '/repos/:owner/:repo/comments/:id',
        '/repos/:owner/:name/community/profile',
        '/repos/:owner/:repo/commits',
        '/repos/:owner/:repo/commits/:sha',
        '/repos/:owner/:repo/commits/:ref',
        '/repos/:owner/:repo/compare/:base:head',
        '/repos/:owner/:repo/commits/:sha',
        '/repos/:owner/:repo/readme',
        '/repos/:owner/:repo/contents/:path',
        '/repos/:owner/:repo/:archive_format/:ref',
        '/repos/:owner/:repo/keys',
        '/repos/:owner/:repo/keys/:id',
        '/repos/:owner/:repo/deployments',
        '/repos/:owner/:repo/deployments/:deployment_id',
        '/repos/:owner/:repo/deployments/:id/statuses',
        '/repos/:owner/:repo/deployments/:id/statuses/:status_id',
        '/repos/:owner/:repo/downloads',
        '/repos/:owner/:repo/downloads/:id',
        '/repos/:owner/:repo/forks',
        '/repos/:owner/:repo/invitations',
        '/user/repository_invitations',
        '/repos/:owner/:repo/pages',
        '/repos/:owner/:repo/pages/builds',
        '/repos/:owner/:repo/pages/builds/latest',
        '/repos/:owner/:repo/pages/builds/:id',
        '/repos/:owner/:repo/releases',
        '/repos/:owner/:repo/releases/:id',
        '/repos/:owner/:repo/releases/latest',
        '/repos/:owner/:repo/releases/tags/:tag',
        '/repos/:owner/:repo/releases/:id/assets',
        '/repos/:owner/:repo/releases/assets/:id',
        '/repos/:owner/:repo/stats/contributors',
        '/repos/:owner/:repo/stats/commit_activity',
        '/repos/:owner/:repo/stats/code_frequency',
        '/repos/:owner/:repo/stats/participation',
        '/repos/:owner/:repo/stats/punch_card',
        '/repos/:owner/:repo/commits/:ref/statuses',
        '/repos/:owner/:repo/commits/:ref/status',
        '/repos/:owner/:repo/traffic/popular/referrers',
        '/repos/:owner/:repo/traffic/popular/paths',
        '/repos/:owner/:repo/traffic/views',
        '/repos/:owner/:repo/traffic/clones',
        '/repos/:owner/:repo/hooks',
        '/repos/:owner/:repo/hooks/:id',
        '/search/repositories',
        '/search/commits',
        '/search/code',
        '/search/issues',
        '/search/users'
    ],
    'post': [
        '/gists',
        '/gists/:id/forks',
        '/repos/:owner/:repo/git/blobs',
        '/repos/:owner/:repo/git/commits',
        '/repos/:owner/:repo/git/refs',
        '/repos/:owner/:repo/git/tags',
        '/repos/:owner/:repo/git/trees',
        '/installations/:installation_id/access_tokens',
        '/repos/:owner/:repo/issues',
        '/repos/:owner/:repo/issues/:number/assignees',
        '/repos/:owner/:repo/issues/:number/comments',
        '/repos/:owner/:repo/labels',
        '/repos/:owner/:repo/issues/:number/labels',
        '/repos/:owner/:repo/milestones',
        '/markdown',
        '/markdown/raw',
        '/orgs/:org/teams',
        '/orgs/:org/hooks',
        '/orgs/:org/hooks/:id/pings',
        '/repos/:owner/:repo/projects',
        '/orgs/:org/projects',
        '/projects/columns/:column_id/cards',
        '/projects/columns/cards/:id/moves',
        '/projects/:project_id/columns',
        '/projects/columns/:id/moves',
        '/repos/:owner/:repo/pulls',
        '/repos/:owner/:repo/pulls/:number/reviews',
        '/repos/:owner/:repo/pulls/:number/reviews/:id/events',
        '/repos/:owner/:repo/pulls/:number/comments',
        '/repos/:owner/:repo/pulls/:number/requested_reviewers',
        '/repos/:owner/:repo/comments/:id/reactions',
        '/repos/:owner/:repo/issues/:number/reactions',
        '/repos/:owner/:repo/issues/comments/:id/reactions',
        '/repos/:owner/:repo/pulls/comments/:id/reactions',
        '/user/repos',
        '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
        '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
        '/repos/:owner/:repo/commits/:sha/comments',
        '/repos/:owner/:repo/keys',
        '/repos/:owner/:repo/merges',
        '/repos/:owner/:repo/pages/builds',
        '/repos/:owner/:repo/releases',
        '/repos/:owner/:repo/statuses/:sha',
        '/repos/:owner/:repo/hooks',
        '/repos/:owner/:repo/hooks/:id/tests',
        '/repos/:owner/:repo/hooks/:id/pings'
    ],
    'delete': [
        '/notifications/threads/:id/subscription',
        '/user/starred/:owner/:repo',
        '/repos/:owner/:repo/subscription',
        '/gists/:id/star',
        '/gists/:id',
        '/repos/:owner/:repo/git/refs/:ref',
        '/user/installations/:installation_id/repositories/:repository_id',
        '/repos/:owner/:repo/issues/:number/lock',
        '/repos/:owner/:repo/issues/:number/assignees',
        '/repos/:owner/:repo/issues/comments/:id',
        '/repos/:owner/:repo/labels/:name',
        '/repos/:owner/:repo/issues/:number/labels/:name',
        '/repos/:owner/:repo/issues/:number/labels',
        '/repos/:owner/:repo/milestones/:number',
        '/orgs/:org/members/:username',
        '/orgs/:org/public_members/:username',
        '/orgs/:org/memberships/:username',
        '/orgs/:org/outside_collaborators/:username',
        '/teams/:id',
        '/teams/:id/memberships/:username',
        '/teams/:id/repos/:owner/:repo',
        '/orgs/:org/hooks/:id',
        '/orgs/:org/blocks/:username',
        '/projects/:id',
        '/projects/columns/cards/:id',
        '/projects/columns/:id',
        '/repos/:owner/:repo/pulls/:number/reviews/:id',
        '/repos/:owner/:repo/pulls/comments/:id',
        '/repos/:owner/:repo/pulls/:number/requested_reviewers',
        '/reactions/:id',
        '/repos/:owner/:repo',
        '/repos/:owner/:repo/branches/:branch/protection',
        '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
        '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
        '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
        '/repos/:owner/:repo/branches/:branch/protection/enforce_admins',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
        '/repos/:owner/:repo/collaborators/:username',
        '/repos/:owner/:repo/comments/:id',
        '/repos/:owner/:repo/contents/:path',
        '/repos/:owner/:repo/keys/:id',
        '/repos/:owner/:repo/deployments',
        '/repos/:owner/:repo/deployments/:id/statuses',
        '/repos/:owner/:repo/downloads/:id',
        '/repos/:owner/:repo/forks',
        '/repos/:owner/:repo/invitations/:invitation_id',
        '/user/repository_invitations/:invitation_id',
        '/repos/:owner/:repo/releases/:id',
        '/repos/:owner/:repo/releases/assets/:id',
        '/repos/:owner/:repo/hooks/:id'
    ],
    'patch': [
        '/notifications/threads/:id',
        '/gists/:id',
        '/repos/:owner/:repo/git/refs/:ref',
        '/repos/:owner/:repo/issues/:number',
        '/repos/:owner/:repo/issues/comments/:id',
        '/repos/:owner/:repo/labels/:name',
        '/repos/:owner/:repo/milestones/:number',
        '/orgs/:org',
        '/user/memberships/orgs/:org',
        '/teams/:id',
        '/orgs/:org/hooks/:id',
        '/projects/:id',
        '/projects/columns/cards/:id',
        '/projects/columns/:id',
        '/repos/:owner/:repo/pulls/:number',
        '/repos/:owner/:repo/pulls/comments/:id',
        '/repos/:owner/:repo',
        '/repos/:owner/:repo/branches/:branch/protection/required_status_checks',
        '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews',
        '/repos/:owner/:repo/comments/:id',
        '/repos/:owner/:repo/invitations/:invitation_id',
        '/user/repository_invitations/:invitation_id',
        '/repos/:owner/:repo/releases/:id',
        '/repos/:owner/:repo/releases/assets/:id',
        '/repos/:owner/:repo/hooks/:id'
    ],
    'put': [
        '/notifications',
        '/repos/:owner/:repo/notifications',
        '/notifications/threads/:id/subscription',
        '/user/starred/:owner/:repo',
        '/repos/:owner/:repo/subscription',
        '/gists/:id/star',
        '/user/installations/:installation_id/repositories/:repository_id',
        '/repos/:owner/:repo/issues/:number/lock',
        '/repos/:owner/:repo/issues/:number/labels',
        '/orgs/:org/public_members/:username',
        '/orgs/:org/memberships/:username',
        '/orgs/:org/outside_collaborators/:username',
        '/teams/:id/members/:username',
        '/teams/:id/memberships/:username',
        '/teams/:id/repos/:org/:repo',
        '/orgs/:org/blocks/:username',
        '/repos/:owner/:repo/pulls/:number/merge',
        '/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals',
        '/repos/:owner/:repo/topics',
        '/repos/:owner/:repo/branches/:branch/protection',
        '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams',
        '/repos/:owner/:repo/branches/:branch/protection/restrictions/users',
        '/repos/:owner/:repo/collaborators/:username',
        '/repos/:owner/:repo/contents/:path'
    ]
};

var convertUrls = function (url) {
    // we don't need any conversion in this case
    return url;
};

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1],
                i = 0;

            return str.replace(/:(\w+)/g, function () {
                return args[i++];
            });

        } else {
            if (str) {
                return str;
            }
            throw 'Function is not valid';
        }
    } catch (err) {
        throw 'Function is not valid for given arguments.';
    }
};

var camelCase = function (input) {
    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
};

var setInitializers = function (namespace, fnName) {

    var tmpCode = '',
        namesArr = fnName.split('.'),
        path = '';

    for (var i in namesArr) {

        if (i == 0) {
            path = namesArr[0];
        } else {
            path += '.' + namesArr[i];
        }

        if (!cache[path]) {
            tmpCode += namespace+path + ' = '+namespace+path+' || {};\n';
            cache[path] = path;
        }
    }

    return tmpCode;
};


var endpoint = {};

var makeEndpointsHelpers = function (namespace, filterMethod) {
    var urlsData = {get: {}, post: {}, put: {}, patch: {}, delete: {}};
    cache = {};

    for (var method in apiURLs) {
        if (filterMethod && filterMethod != method) {
            continue;
        }
        if (Array.isArray(apiURLs[method])) {

            var urlsArr = apiURLs[method];

            for (var n in urlsArr) {

                var numVars = 0;
                var fnNames = [];
                var newPath = '';

                var url = convertUrls(urlsArr[n]);

                var urlParts = url.split('/');
                for (var p in urlParts) {
                    if (urlParts[p] != "") {
                        if (urlParts[p].substr(0, 1) == ':') {
                            numVars++;
                            newPath += '/%s'
                        } else {
                            fnNames.push(urlParts[p]);
                            newPath += '/' + urlParts[p];
                        }
                    }
                }

                var functionName = camelCase(fnNames.join('.'));
                if (!urlsData[method][functionName]) {
                    urlsData[method][functionName] = {};
                }

                urlsData[method][functionName][numVars] = url;

            }
        }

    }

    var code = '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t")
        + ';\n\nvar parse = ' + parse.toString()
        + ';\n\n'
        + namespace.substr(0, namespace.length-1)+' = '+namespace.substr(0, namespace.length-1)+' || {};\n'
        + '\n\n';

    for (var method in urlsData) {
        for (var fn in urlsData[method]) {
            code += setInitializers(namespace, fn);
            var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;'
            var hasParams = 'var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;';
            var parseStr, callWithParams, callWithoutParams;
            if (namespace == 'endpoint.install.') { // for the `install` namespace we need to send the account, which is the first parameter
                if (method == 'get' || method == 'delete') {
                    callWithParams = namespace + method + '({account: arguments[0], path: url, params: arguments[size]})';
                } else {
                    callWithParams = namespace + method + '({account: arguments[0], path: url, body: arguments[size]})';
                }
                callWithoutParams = namespace + method + '({account: arguments[0], path: url})';
                parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size-1], Array.prototype.slice.call(arguments, 1, size));';
            } else {
                if (method == 'get' || method == 'delete') {
                    callWithParams = namespace + method + '({path: url, params: arguments[size]})';
                } else {
                    callWithParams = namespace + method + '({path: url, body: arguments[size]})';
                }
                callWithoutParams = namespace + method + '(url)';
                parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size], Array.prototype.slice.call(arguments, 0, size));';
            }
            code += namespace + fn + '.' + method + ' = function() {\n\t' + sizeStr + '\n\t' + hasParams
                + '\n\tvar url = ' + parseStr
                + '\n\tif (hasParams) return ' + callWithParams + ';'
                + '\n\telse return ' + callWithoutParams + ';\n};\n\n';
        }
    }

    return code;
};

var codeUsersGet = makeEndpointsHelpers('endpoint.user.', 'get');
var codeUsersPost = makeEndpointsHelpers('endpoint.user.', 'post');
var codeUsersPut = makeEndpointsHelpers('endpoint.user.', 'put');
var codeUsersPatch = makeEndpointsHelpers('endpoint.user.', 'patch');
var codeUsersDelete = makeEndpointsHelpers('endpoint.user.', 'delete');
var codeAppsGet = makeEndpointsHelpers('endpoint.app.', 'get');
var codeAppsPost = makeEndpointsHelpers('endpoint.app.', 'post');
var codeAppsPut = makeEndpointsHelpers('endpoint.app.', 'put');
var codeAppsPatch = makeEndpointsHelpers('endpoint.app.', 'patch');
var codeAppsDelete = makeEndpointsHelpers('endpoint.app.', 'delete');
var codeInstallsGet = makeEndpointsHelpers('endpoint.install.', 'get');
var codeInstallsPost = makeEndpointsHelpers('endpoint.install.', 'post');
var codeInstallsPut = makeEndpointsHelpers('endpoint.install.', 'put');
var codeInstallsPatch = makeEndpointsHelpers('endpoint.install.', 'patch');
var codeInstallsDelete = makeEndpointsHelpers('endpoint.install.', 'delete');

fs.writeFile("../scripts/github-shortcuts-users-get.js", codeUsersGet, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-users-post.js", codeUsersPost, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-users-put.js", codeUsersPut, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-users-patch.js", codeUsersPatch, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-users-delete.js", codeUsersDelete, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});


fs.writeFile("../scripts/github-shortcuts-apps-get.js", codeAppsGet, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-apps-post.js", codeAppsPost, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-apps-put.js", codeAppsPut, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-apps-patch.js", codeAppsPatch, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-apps-delete.js", codeAppsDelete, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});


fs.writeFile("../scripts/github-shortcuts-installs-get.js", codeInstallsGet, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-installs-post.js", codeInstallsPost, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-installs-put.js", codeInstallsPut, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-installs-patch.js", codeInstallsPatch, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});
fs.writeFile("../scripts/github-shortcuts-installs-delete.js", codeInstallsDelete, function (err) {
    if (err) return console.error(err);
    console.info('Generator has run successfully!');
});