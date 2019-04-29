

var urlsData = {
	"get": {
		"events": {
			"0": "/events"
		},
		"repos.events": {
			"2": "/repos/:owner/:repo/events"
		},
		"repos.issues.events": {
			"2": "/repos/:owner/:repo/issues/events",
			"3": "/repos/:owner/:repo/issues/events/:id"
		},
		"networks.events": {
			"2": "/networks/:owner/:repo/events"
		},
		"orgs.events": {
			"1": "/orgs/:org/events"
		},
		"users.received_events": {
			"1": "/users/:username/received_events"
		},
		"users.events": {
			"1": "/users/:username/events"
		},
		"users.events.public": {
			"1": "/users/:username/events/public"
		},
		"users.events.orgs": {
			"2": "/users/:username/events/orgs/:org"
		},
		"feeds": {
			"0": "/feeds"
		},
		"notifications": {
			"0": "/notifications"
		},
		"repos.notifications": {
			"2": "/repos/:owner/:repo/notifications"
		},
		"notifications.threads": {
			"1": "/notifications/threads/:id"
		},
		"notifications.threads.subscription": {
			"1": "/notifications/threads/:id/subscription"
		},
		"repos.stargazers": {
			"2": "/repos/:owner/:repo/stargazers"
		},
		"users.starred": {
			"1": "/users/:username/starred"
		},
		"user.starred": {
			"0": "/user/starred",
			"2": "/user/starred/:owner/:repo"
		},
		"repos.subscribers": {
			"2": "/repos/:owner/:repo/subscribers"
		},
		"users.subscriptions": {
			"1": "/users/:username/subscriptions"
		},
		"user.subscriptions": {
			"0": "/user/subscriptions"
		},
		"repos.subscription": {
			"2": "/repos/:owner/:repo/subscription"
		},
		"users.gists": {
			"1": "/users/:username/gists"
		},
		"gists": {
			"0": "/gists",
			"1": "/gists/:id",
			"2": "/gists/:id/:sha"
		},
		"gists.public": {
			"0": "/gists/public"
		},
		"gists.starred": {
			"0": "/gists/starred"
		},
		"gists.commits": {
			"1": "/gists/:id/commits"
		},
		"gists.star": {
			"1": "/gists/:id/star"
		},
		"gists.forks": {
			"1": "/gists/:id/forks"
		},
		"repos.git.blobs": {
			"3": "/repos/:owner/:repo/git/blobs/:sha"
		},
		"repos.git.commits": {
			"3": "/repos/:owner/:repo/git/commits/:sha"
		},
		"repos.git.refs": {
			"2": "/repos/:owner/:repo/git/refs",
			"3": "/repos/:owner/:repo/git/refs/:ref"
		},
		"repos.git.tags": {
			"3": "/repos/:owner/:repo/git/tags/:sha"
		},
		"repos.git.trees": {
			"3": "/repos/:owner/:repo/git/trees/:sha"
		},
		"apps": {
			"1": "/apps/:app_slug"
		},
		"app": {
			"0": "/app"
		},
		"app.installations": {
			"0": "/app/installations",
			"1": "/app/installations/:installation_id"
		},
		"user.installations": {
			"0": "/user/installations"
		},
		"installation.repositories": {
			"0": "/installation/repositories"
		},
		"user.installations.repositories": {
			"1": "/user/installations/:installation_id/repositories"
		},
		"marketplace_listing.plans": {
			"0": "/marketplace_listing/plans"
		},
		"marketplace_listing.plans.accounts": {
			"1": "/marketplace_listing/plans/:id/accounts"
		},
		"marketplace_listing.accounts": {
			"1": "/marketplace_listing/accounts/:id"
		},
		"user.marketplace_purchases": {
			"0": "/user/marketplace_purchases"
		},
		"issues": {
			"0": "/issues"
		},
		"user.issues": {
			"0": "/user/issues"
		},
		"orgs.issues": {
			"1": "/orgs/:org/issues"
		},
		"repos.issues": {
			"2": "/repos/:owner/:repo/issues",
			"3": "/repos/:owner/:repo/issues/:number"
		},
		"repos.assignees": {
			"2": "/repos/:owner/:repo/assignees",
			"3": "/repos/:owner/:repo/assignees/:assignee"
		},
		"repos.issues.comments": {
			"2": "/repos/:owner/:repo/issues/comments",
			"3": "/repos/:owner/:repo/issues/:number/comments"
		},
		"repos.labels": {
			"2": "/repos/:owner/:repo/labels",
			"3": "/repos/:owner/:repo/labels/:name"
		},
		"repos.issues.labels": {
			"3": "/repos/:owner/:repo/issues/:number/labels"
		},
		"repos.milestones.labels": {
			"3": "/repos/:owner/:repo/milestones/:number/labels"
		},
		"repos.milestones": {
			"2": "/repos/:owner/:repo/milestones",
			"3": "/repos/:owner/:repo/milestones/:number"
		},
		"repos.issues.timeline": {
			"3": "/repos/:owner/:repo/issues/:issue_number/timeline"
		},
		"codes_of_conduct": {
			"0": "/codes_of_conduct",
			"1": "/codes_of_conduct/:key"
		},
		"repos": {
			"2": "/repos/:owner/:repo",
			"4": "/repos/:owner/:repo/:archive_format/:ref"
		},
		"repos.community.code_of_conduct": {
			"2": "/repos/:owner/:repo/community/code_of_conduct"
		},
		"emojis": {
			"0": "/emojis"
		},
		"gitignore.templates": {
			"0": "/gitignore/templates",
			"1": "/gitignore/templates/:name"
		},
		"licenses": {
			"0": "/licenses",
			"1": "/licenses/:license"
		},
		"repos.license": {
			"2": "/repos/:owner/:repo/license"
		},
		"meta": {
			"0": "/meta"
		},
		"rate_limit": {
			"0": "/rate_limit"
		},
		"user.orgs": {
			"0": "/user/orgs"
		},
		"organizations": {
			"0": "/organizations"
		},
		"users.orgs": {
			"1": "/users/:username/orgs"
		},
		"orgs": {
			"1": "/orgs/:org"
		},
		"orgs.members": {
			"1": "/orgs/:org/members",
			"2": "/orgs/:org/members/:username"
		},
		"orgs.public_members": {
			"1": "/orgs/:org/public_members",
			"2": "/orgs/:org/public_members/:username"
		},
		"orgs.memberships": {
			"2": "/orgs/:org/memberships/:username"
		},
		"orgs.invitations": {
			"1": "/orgs/:org/invitations"
		},
		"user.memberships.orgs": {
			"0": "/user/memberships/orgs",
			"1": "/user/memberships/orgs/:org"
		},
		"orgs.outside_collaborators": {
			"1": "/orgs/:org/outside_collaborators"
		},
		"orgs.teams": {
			"1": "/orgs/:org/teams"
		},
		"teams": {
			"1": "/teams/:id"
		},
		"teams.teams": {
			"1": "/teams/:id/teams"
		},
		"teams.members": {
			"1": "/teams/:id/members",
			"2": "/teams/:id/members/:username"
		},
		"teams.memberships": {
			"2": "/teams/:id/memberships/:username"
		},
		"teams.invitations": {
			"1": "/teams/:id/invitations"
		},
		"teams.repos": {
			"1": "/teams/:id/repos",
			"3": "/teams/:id/repos/:owner/:repo"
		},
		"user.teams": {
			"0": "/user/teams"
		},
		"orgs.hooks": {
			"1": "/orgs/:org/hooks",
			"2": "/orgs/:org/hooks/:id"
		},
		"orgs.blocks": {
			"1": "/orgs/:org/blocks",
			"2": "/orgs/:org/blocks/:username"
		},
		"repos.projects": {
			"2": "/repos/:owner/:repo/projects"
		},
		"orgs.projects": {
			"1": "/orgs/:org/projects"
		},
		"projects": {
			"1": "/projects/:id"
		},
		"projects.columns.cards": {
			"1": "/projects/columns/cards/:id"
		},
		"projects.columns": {
			"1": "/projects/columns/:id"
		},
		"repos.pulls": {
			"2": "/repos/:owner/:repo/pulls",
			"3": "/repos/:owner/:repo/pulls/:number"
		},
		"repos.pulls.commits": {
			"3": "/repos/:owner/:repo/pulls/:number/commits"
		},
		"repos.pulls.files": {
			"3": "/repos/:owner/:repo/pulls/:number/files"
		},
		"repos.pulls.merge": {
			"3": "/repos/:owner/:repo/pulls/:number/merge"
		},
		"repos.pulls.reviews": {
			"3": "/repos/:owner/:repo/pulls/:number/reviews",
			"4": "/repos/:owner/:repo/pulls/:number/reviews/:id"
		},
		"repos.pulls.reviews.comments": {
			"4": "/repos/:owner/:repo/pulls/:number/reviews/:id/comments"
		},
		"repos.pulls.comments": {
			"2": "/repos/:owner/:repo/pulls/comments",
			"3": "/repos/:owner/:repo/pulls/comments/:id"
		},
		"repos.pulls.requested_reviewers": {
			"3": "/repos/:owner/:repo/pulls/:number/requested_reviewers"
		},
		"repos.comments.reactions": {
			"3": "/repos/:owner/:repo/comments/:id/reactions"
		},
		"repos.issues.reactions": {
			"3": "/repos/:owner/:repo/issues/:number/reactions"
		},
		"repos.issues.comments.reactions": {
			"3": "/repos/:owner/:repo/issues/comments/:id/reactions"
		},
		"repos.pulls.comments.reactions": {
			"3": "/repos/:owner/:repo/pulls/comments/:id/reactions"
		},
		"user.repos": {
			"0": "/user/repos"
		},
		"users.repos": {
			"1": "/users/:username/repos"
		},
		"orgs.repos": {
			"1": "/orgs/:org/repos"
		},
		"repositories": {
			"0": "/repositories"
		},
		"repos.topics": {
			"2": "/repos/:owner/:repo/topics"
		},
		"repos.contributors": {
			"2": "/repos/:owner/:repo/contributors"
		},
		"repos.languages": {
			"2": "/repos/:owner/:repo/languages"
		},
		"repos.teams": {
			"2": "/repos/:owner/:repo/teams"
		},
		"repos.tags": {
			"2": "/repos/:owner/:repo/tags"
		},
		"repos.branches": {
			"2": "/repos/:owner/:repo/branches",
			"3": "/repos/:owner/:repo/branches/:branch"
		},
		"repos.branches.protection": {
			"3": "/repos/:owner/:repo/branches/:branch/protection"
		},
		"repos.branches.protection.required_status_checks": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks"
		},
		"repos.branches.protection.required_status_checks.contexts": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
		},
		"repos.branches.protection.required_pull_request_reviews": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"
		},
		"repos.branches.protection.enforce_admins": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins"
		},
		"repos.branches.protection.restrictions": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/restrictions"
		},
		"repos.branches.protection.restrictions.teams": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
		},
		"repos.branches.protection.restrictions.users": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
		},
		"repos.collaborators": {
			"2": "/repos/:owner/:repo/collaborators",
			"3": "/repos/:owner/:repo/collaborators/:username"
		},
		"repos.collaborators.permission": {
			"3": "/repos/:owner/:repo/collaborators/:username/permission"
		},
		"repos.comments": {
			"2": "/repos/:owner/:repo/comments",
			"3": "/repos/:owner/:repo/comments/:id"
		},
		"repos.commits.comments": {
			"3": "/repos/:owner/:repo/commits/:ref/comments"
		},
		"repos.community.profile": {
			"2": "/repos/:owner/:name/community/profile"
		},
		"repos.commits": {
			"2": "/repos/:owner/:repo/commits",
			"3": "/repos/:owner/:repo/commits/:sha"
		},
		"repos.compare": {
			"3": "/repos/:owner/:repo/compare/:base:head"
		},
		"repos.readme": {
			"2": "/repos/:owner/:repo/readme"
		},
		"repos.contents": {
			"3": "/repos/:owner/:repo/contents/:path"
		},
		"repos.keys": {
			"2": "/repos/:owner/:repo/keys",
			"3": "/repos/:owner/:repo/keys/:id"
		},
		"repos.deployments": {
			"2": "/repos/:owner/:repo/deployments",
			"3": "/repos/:owner/:repo/deployments/:deployment_id"
		},
		"repos.deployments.statuses": {
			"3": "/repos/:owner/:repo/deployments/:id/statuses",
			"4": "/repos/:owner/:repo/deployments/:id/statuses/:status_id"
		},
		"repos.downloads": {
			"2": "/repos/:owner/:repo/downloads",
			"3": "/repos/:owner/:repo/downloads/:id"
		},
		"repos.forks": {
			"2": "/repos/:owner/:repo/forks"
		},
		"repos.invitations": {
			"2": "/repos/:owner/:repo/invitations"
		},
		"user.repository_invitations": {
			"0": "/user/repository_invitations"
		},
		"repos.pages": {
			"2": "/repos/:owner/:repo/pages"
		},
		"repos.pages.builds": {
			"2": "/repos/:owner/:repo/pages/builds",
			"3": "/repos/:owner/:repo/pages/builds/:id"
		},
		"repos.pages.builds.latest": {
			"2": "/repos/:owner/:repo/pages/builds/latest"
		},
		"repos.releases": {
			"2": "/repos/:owner/:repo/releases",
			"3": "/repos/:owner/:repo/releases/:id"
		},
		"repos.releases.latest": {
			"2": "/repos/:owner/:repo/releases/latest"
		},
		"repos.releases.tags": {
			"3": "/repos/:owner/:repo/releases/tags/:tag"
		},
		"repos.releases.assets": {
			"3": "/repos/:owner/:repo/releases/assets/:id"
		},
		"repos.stats.contributors": {
			"2": "/repos/:owner/:repo/stats/contributors"
		},
		"repos.stats.commit_activity": {
			"2": "/repos/:owner/:repo/stats/commit_activity"
		},
		"repos.stats.code_frequency": {
			"2": "/repos/:owner/:repo/stats/code_frequency"
		},
		"repos.stats.participation": {
			"2": "/repos/:owner/:repo/stats/participation"
		},
		"repos.stats.punch_card": {
			"2": "/repos/:owner/:repo/stats/punch_card"
		},
		"repos.commits.statuses": {
			"3": "/repos/:owner/:repo/commits/:ref/statuses"
		},
		"repos.commits.status": {
			"3": "/repos/:owner/:repo/commits/:ref/status"
		},
		"repos.traffic.popular.referrers": {
			"2": "/repos/:owner/:repo/traffic/popular/referrers"
		},
		"repos.traffic.popular.paths": {
			"2": "/repos/:owner/:repo/traffic/popular/paths"
		},
		"repos.traffic.views": {
			"2": "/repos/:owner/:repo/traffic/views"
		},
		"repos.traffic.clones": {
			"2": "/repos/:owner/:repo/traffic/clones"
		},
		"repos.hooks": {
			"2": "/repos/:owner/:repo/hooks",
			"3": "/repos/:owner/:repo/hooks/:id"
		},
		"search.repositories": {
			"0": "/search/repositories"
		},
		"search.commits": {
			"0": "/search/commits"
		},
		"search.code": {
			"0": "/search/code"
		},
		"search.issues": {
			"0": "/search/issues"
		},
		"search.users": {
			"0": "/search/users"
		}
	},
	"post": {},
	"put": {},
	"patch": {},
	"delete": {}
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

endpoint.user = endpoint.user || {};


endpoint.user.events = endpoint.user.events || {};
endpoint.user.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos = endpoint.user.repos || {};
endpoint.user.repos.events = endpoint.user.repos.events || {};
endpoint.user.repos.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.issues = endpoint.user.repos.issues || {};
endpoint.user.repos.issues.events = endpoint.user.repos.issues.events || {};
endpoint.user.repos.issues.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.networks = endpoint.user.networks || {};
endpoint.user.networks.events = endpoint.user.networks.events || {};
endpoint.user.networks.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['networks.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs = endpoint.user.orgs || {};
endpoint.user.orgs.events = endpoint.user.orgs.events || {};
endpoint.user.orgs.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users = endpoint.user.users || {};
endpoint.user.users.received_events = endpoint.user.users.received_events || {};
endpoint.user.users.received_events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.received_events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users.events = endpoint.user.users.events || {};
endpoint.user.users.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users.events.public = endpoint.user.users.events.public || {};
endpoint.user.users.events.public.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events.public'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users.events.orgs = endpoint.user.users.events.orgs || {};
endpoint.user.users.events.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.feeds = endpoint.user.feeds || {};
endpoint.user.feeds.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['feeds'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.notifications = endpoint.user.notifications || {};
endpoint.user.notifications.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.notifications = endpoint.user.repos.notifications || {};
endpoint.user.repos.notifications.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.notifications'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.notifications.threads = endpoint.user.notifications.threads || {};
endpoint.user.notifications.threads.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications.threads'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.notifications.threads.subscription = endpoint.user.notifications.threads.subscription || {};
endpoint.user.notifications.threads.subscription.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications.threads.subscription'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.stargazers = endpoint.user.repos.stargazers || {};
endpoint.user.repos.stargazers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stargazers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users.starred = endpoint.user.users.starred || {};
endpoint.user.users.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.starred'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user = endpoint.user.user || {};
endpoint.user.user.starred = endpoint.user.user.starred || {};
endpoint.user.user.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.starred'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.subscribers = endpoint.user.repos.subscribers || {};
endpoint.user.repos.subscribers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.subscribers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users.subscriptions = endpoint.user.users.subscriptions || {};
endpoint.user.users.subscriptions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.subscriptions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.subscriptions = endpoint.user.user.subscriptions || {};
endpoint.user.user.subscriptions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.subscriptions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.subscription = endpoint.user.repos.subscription || {};
endpoint.user.repos.subscription.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.subscription'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users.gists = endpoint.user.users.gists || {};
endpoint.user.users.gists.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.gists'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.gists = endpoint.user.gists || {};
endpoint.user.gists.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.gists.public = endpoint.user.gists.public || {};
endpoint.user.gists.public.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.public'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.gists.starred = endpoint.user.gists.starred || {};
endpoint.user.gists.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.starred'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.gists.commits = endpoint.user.gists.commits || {};
endpoint.user.gists.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.gists.star = endpoint.user.gists.star || {};
endpoint.user.gists.star.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.star'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.gists.forks = endpoint.user.gists.forks || {};
endpoint.user.gists.forks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.forks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.git = endpoint.user.repos.git || {};
endpoint.user.repos.git.blobs = endpoint.user.repos.git.blobs || {};
endpoint.user.repos.git.blobs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.blobs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.git.commits = endpoint.user.repos.git.commits || {};
endpoint.user.repos.git.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.git.refs = endpoint.user.repos.git.refs || {};
endpoint.user.repos.git.refs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.refs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.git.tags = endpoint.user.repos.git.tags || {};
endpoint.user.repos.git.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.tags'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.git.trees = endpoint.user.repos.git.trees || {};
endpoint.user.repos.git.trees.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.trees'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.apps = endpoint.user.apps || {};
endpoint.user.apps.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['apps'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.app = endpoint.user.app || {};
endpoint.user.app.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['app'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.app.installations = endpoint.user.app.installations || {};
endpoint.user.app.installations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['app.installations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.installations = endpoint.user.user.installations || {};
endpoint.user.user.installations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.installations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.installation = endpoint.user.installation || {};
endpoint.user.installation.repositories = endpoint.user.installation.repositories || {};
endpoint.user.installation.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['installation.repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.installations.repositories = endpoint.user.user.installations.repositories || {};
endpoint.user.user.installations.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.installations.repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.marketplace_listing = endpoint.user.marketplace_listing || {};
endpoint.user.marketplace_listing.plans = endpoint.user.marketplace_listing.plans || {};
endpoint.user.marketplace_listing.plans.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.plans'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.marketplace_listing.plans.accounts = endpoint.user.marketplace_listing.plans.accounts || {};
endpoint.user.marketplace_listing.plans.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.plans.accounts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.marketplace_listing.accounts = endpoint.user.marketplace_listing.accounts || {};
endpoint.user.marketplace_listing.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.accounts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.marketplace_purchases = endpoint.user.user.marketplace_purchases || {};
endpoint.user.user.marketplace_purchases.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.marketplace_purchases'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.issues = endpoint.user.issues || {};
endpoint.user.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.issues = endpoint.user.user.issues || {};
endpoint.user.user.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.issues = endpoint.user.orgs.issues || {};
endpoint.user.orgs.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.assignees = endpoint.user.repos.assignees || {};
endpoint.user.repos.assignees.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.assignees'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.issues.comments = endpoint.user.repos.issues.comments || {};
endpoint.user.repos.issues.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.labels = endpoint.user.repos.labels || {};
endpoint.user.repos.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.issues.labels = endpoint.user.repos.issues.labels || {};
endpoint.user.repos.issues.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.milestones = endpoint.user.repos.milestones || {};
endpoint.user.repos.milestones.labels = endpoint.user.repos.milestones.labels || {};
endpoint.user.repos.milestones.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.milestones.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.milestones.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.milestones'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.issues.timeline = endpoint.user.repos.issues.timeline || {};
endpoint.user.repos.issues.timeline.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.timeline'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.codes_of_conduct = endpoint.user.codes_of_conduct || {};
endpoint.user.codes_of_conduct.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['codes_of_conduct'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.community = endpoint.user.repos.community || {};
endpoint.user.repos.community.code_of_conduct = endpoint.user.repos.community.code_of_conduct || {};
endpoint.user.repos.community.code_of_conduct.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.community.code_of_conduct'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.emojis = endpoint.user.emojis || {};
endpoint.user.emojis.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['emojis'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.gitignore = endpoint.user.gitignore || {};
endpoint.user.gitignore.templates = endpoint.user.gitignore.templates || {};
endpoint.user.gitignore.templates.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gitignore.templates'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.licenses = endpoint.user.licenses || {};
endpoint.user.licenses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['licenses'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.license = endpoint.user.repos.license || {};
endpoint.user.repos.license.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.license'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.meta = endpoint.user.meta || {};
endpoint.user.meta.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['meta'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.rate_limit = endpoint.user.rate_limit || {};
endpoint.user.rate_limit.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['rate_limit'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.orgs = endpoint.user.user.orgs || {};
endpoint.user.user.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.organizations = endpoint.user.organizations || {};
endpoint.user.organizations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['organizations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users.orgs = endpoint.user.users.orgs || {};
endpoint.user.users.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.members = endpoint.user.orgs.members || {};
endpoint.user.orgs.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.public_members = endpoint.user.orgs.public_members || {};
endpoint.user.orgs.public_members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.public_members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.memberships = endpoint.user.orgs.memberships || {};
endpoint.user.orgs.memberships.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.memberships'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.invitations = endpoint.user.orgs.invitations || {};
endpoint.user.orgs.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.memberships = endpoint.user.user.memberships || {};
endpoint.user.user.memberships.orgs = endpoint.user.user.memberships.orgs || {};
endpoint.user.user.memberships.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.memberships.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.outside_collaborators = endpoint.user.orgs.outside_collaborators || {};
endpoint.user.orgs.outside_collaborators.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.outside_collaborators'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.teams = endpoint.user.orgs.teams || {};
endpoint.user.orgs.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.teams = endpoint.user.teams || {};
endpoint.user.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.teams.teams = endpoint.user.teams.teams || {};
endpoint.user.teams.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.teams.members = endpoint.user.teams.members || {};
endpoint.user.teams.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.teams.memberships = endpoint.user.teams.memberships || {};
endpoint.user.teams.memberships.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.memberships'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.teams.invitations = endpoint.user.teams.invitations || {};
endpoint.user.teams.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.teams.repos = endpoint.user.teams.repos || {};
endpoint.user.teams.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.teams = endpoint.user.user.teams || {};
endpoint.user.user.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.hooks = endpoint.user.orgs.hooks || {};
endpoint.user.orgs.hooks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.blocks = endpoint.user.orgs.blocks || {};
endpoint.user.orgs.blocks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.blocks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.projects = endpoint.user.repos.projects || {};
endpoint.user.repos.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.projects = endpoint.user.orgs.projects || {};
endpoint.user.orgs.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.projects = endpoint.user.projects || {};
endpoint.user.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.projects.columns = endpoint.user.projects.columns || {};
endpoint.user.projects.columns.cards = endpoint.user.projects.columns.cards || {};
endpoint.user.projects.columns.cards.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects.columns.cards'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.projects.columns.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects.columns'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls = endpoint.user.repos.pulls || {};
endpoint.user.repos.pulls.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls.commits = endpoint.user.repos.pulls.commits || {};
endpoint.user.repos.pulls.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls.files = endpoint.user.repos.pulls.files || {};
endpoint.user.repos.pulls.files.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.files'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls.merge = endpoint.user.repos.pulls.merge || {};
endpoint.user.repos.pulls.merge.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.merge'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls.reviews = endpoint.user.repos.pulls.reviews || {};
endpoint.user.repos.pulls.reviews.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.reviews'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls.reviews.comments = endpoint.user.repos.pulls.reviews.comments || {};
endpoint.user.repos.pulls.reviews.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.reviews.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls.comments = endpoint.user.repos.pulls.comments || {};
endpoint.user.repos.pulls.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls.requested_reviewers = endpoint.user.repos.pulls.requested_reviewers || {};
endpoint.user.repos.pulls.requested_reviewers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.requested_reviewers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.comments = endpoint.user.repos.comments || {};
endpoint.user.repos.comments.reactions = endpoint.user.repos.comments.reactions || {};
endpoint.user.repos.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.issues.reactions = endpoint.user.repos.issues.reactions || {};
endpoint.user.repos.issues.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.issues.comments.reactions = endpoint.user.repos.issues.comments.reactions || {};
endpoint.user.repos.issues.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pulls.comments.reactions = endpoint.user.repos.pulls.comments.reactions || {};
endpoint.user.repos.pulls.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.repos = endpoint.user.user.repos || {};
endpoint.user.user.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.users.repos = endpoint.user.users.repos || {};
endpoint.user.users.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.orgs.repos = endpoint.user.orgs.repos || {};
endpoint.user.orgs.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repositories = endpoint.user.repositories || {};
endpoint.user.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.topics = endpoint.user.repos.topics || {};
endpoint.user.repos.topics.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.topics'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.contributors = endpoint.user.repos.contributors || {};
endpoint.user.repos.contributors.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.contributors'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.languages = endpoint.user.repos.languages || {};
endpoint.user.repos.languages.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.languages'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.teams = endpoint.user.repos.teams || {};
endpoint.user.repos.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.tags = endpoint.user.repos.tags || {};
endpoint.user.repos.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.tags'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches = endpoint.user.repos.branches || {};
endpoint.user.repos.branches.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches.protection = endpoint.user.repos.branches.protection || {};
endpoint.user.repos.branches.protection.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches.protection.required_status_checks = endpoint.user.repos.branches.protection.required_status_checks || {};
endpoint.user.repos.branches.protection.required_status_checks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_status_checks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches.protection.required_status_checks.contexts = endpoint.user.repos.branches.protection.required_status_checks.contexts || {};
endpoint.user.repos.branches.protection.required_status_checks.contexts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_status_checks.contexts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches.protection.required_pull_request_reviews = endpoint.user.repos.branches.protection.required_pull_request_reviews || {};
endpoint.user.repos.branches.protection.required_pull_request_reviews.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_pull_request_reviews'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches.protection.enforce_admins = endpoint.user.repos.branches.protection.enforce_admins || {};
endpoint.user.repos.branches.protection.enforce_admins.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.enforce_admins'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches.protection.restrictions = endpoint.user.repos.branches.protection.restrictions || {};
endpoint.user.repos.branches.protection.restrictions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches.protection.restrictions.teams = endpoint.user.repos.branches.protection.restrictions.teams || {};
endpoint.user.repos.branches.protection.restrictions.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.branches.protection.restrictions.users = endpoint.user.repos.branches.protection.restrictions.users || {};
endpoint.user.repos.branches.protection.restrictions.users.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions.users'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.collaborators = endpoint.user.repos.collaborators || {};
endpoint.user.repos.collaborators.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.collaborators'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.collaborators.permission = endpoint.user.repos.collaborators.permission || {};
endpoint.user.repos.collaborators.permission.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.collaborators.permission'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.commits = endpoint.user.repos.commits || {};
endpoint.user.repos.commits.comments = endpoint.user.repos.commits.comments || {};
endpoint.user.repos.commits.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.community.profile = endpoint.user.repos.community.profile || {};
endpoint.user.repos.community.profile.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.community.profile'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.compare = endpoint.user.repos.compare || {};
endpoint.user.repos.compare.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.compare'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.readme = endpoint.user.repos.readme || {};
endpoint.user.repos.readme.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.readme'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.contents = endpoint.user.repos.contents || {};
endpoint.user.repos.contents.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.contents'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.keys = endpoint.user.repos.keys || {};
endpoint.user.repos.keys.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.keys'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.deployments = endpoint.user.repos.deployments || {};
endpoint.user.repos.deployments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.deployments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.deployments.statuses = endpoint.user.repos.deployments.statuses || {};
endpoint.user.repos.deployments.statuses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.deployments.statuses'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.downloads = endpoint.user.repos.downloads || {};
endpoint.user.repos.downloads.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.downloads'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.forks = endpoint.user.repos.forks || {};
endpoint.user.repos.forks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.forks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.invitations = endpoint.user.repos.invitations || {};
endpoint.user.repos.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.user.repository_invitations = endpoint.user.user.repository_invitations || {};
endpoint.user.user.repository_invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.repository_invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pages = endpoint.user.repos.pages || {};
endpoint.user.repos.pages.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pages.builds = endpoint.user.repos.pages.builds || {};
endpoint.user.repos.pages.builds.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages.builds'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.pages.builds.latest = endpoint.user.repos.pages.builds.latest || {};
endpoint.user.repos.pages.builds.latest.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages.builds.latest'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.releases = endpoint.user.repos.releases || {};
endpoint.user.repos.releases.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.releases.latest = endpoint.user.repos.releases.latest || {};
endpoint.user.repos.releases.latest.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.latest'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.releases.tags = endpoint.user.repos.releases.tags || {};
endpoint.user.repos.releases.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.tags'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.releases.assets = endpoint.user.repos.releases.assets || {};
endpoint.user.repos.releases.assets.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.assets'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.stats = endpoint.user.repos.stats || {};
endpoint.user.repos.stats.contributors = endpoint.user.repos.stats.contributors || {};
endpoint.user.repos.stats.contributors.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.contributors'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.stats.commit_activity = endpoint.user.repos.stats.commit_activity || {};
endpoint.user.repos.stats.commit_activity.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.commit_activity'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.stats.code_frequency = endpoint.user.repos.stats.code_frequency || {};
endpoint.user.repos.stats.code_frequency.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.code_frequency'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.stats.participation = endpoint.user.repos.stats.participation || {};
endpoint.user.repos.stats.participation.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.participation'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.stats.punch_card = endpoint.user.repos.stats.punch_card || {};
endpoint.user.repos.stats.punch_card.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.punch_card'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.commits.statuses = endpoint.user.repos.commits.statuses || {};
endpoint.user.repos.commits.statuses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.statuses'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.commits.status = endpoint.user.repos.commits.status || {};
endpoint.user.repos.commits.status.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.status'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.traffic = endpoint.user.repos.traffic || {};
endpoint.user.repos.traffic.popular = endpoint.user.repos.traffic.popular || {};
endpoint.user.repos.traffic.popular.referrers = endpoint.user.repos.traffic.popular.referrers || {};
endpoint.user.repos.traffic.popular.referrers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.popular.referrers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.traffic.popular.paths = endpoint.user.repos.traffic.popular.paths || {};
endpoint.user.repos.traffic.popular.paths.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.popular.paths'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.traffic.views = endpoint.user.repos.traffic.views || {};
endpoint.user.repos.traffic.views.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.views'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.traffic.clones = endpoint.user.repos.traffic.clones || {};
endpoint.user.repos.traffic.clones.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.clones'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.repos.hooks = endpoint.user.repos.hooks || {};
endpoint.user.repos.hooks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.search = endpoint.user.search || {};
endpoint.user.search.repositories = endpoint.user.search.repositories || {};
endpoint.user.search.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.search.commits = endpoint.user.search.commits || {};
endpoint.user.search.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.search.code = endpoint.user.search.code || {};
endpoint.user.search.code.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.code'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.search.issues = endpoint.user.search.issues || {};
endpoint.user.search.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

endpoint.user.search.users = endpoint.user.search.users || {};
endpoint.user.search.users.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.users'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.get({path: url, params: arguments[size]});
	else return endpoint.user.get(url);
};

