

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

endpoint.app = endpoint.app || {};


endpoint.app.events = endpoint.app.events || {};
endpoint.app.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos = endpoint.app.repos || {};
endpoint.app.repos.events = endpoint.app.repos.events || {};
endpoint.app.repos.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.issues = endpoint.app.repos.issues || {};
endpoint.app.repos.issues.events = endpoint.app.repos.issues.events || {};
endpoint.app.repos.issues.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.networks = endpoint.app.networks || {};
endpoint.app.networks.events = endpoint.app.networks.events || {};
endpoint.app.networks.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['networks.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs = endpoint.app.orgs || {};
endpoint.app.orgs.events = endpoint.app.orgs.events || {};
endpoint.app.orgs.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users = endpoint.app.users || {};
endpoint.app.users.received_events = endpoint.app.users.received_events || {};
endpoint.app.users.received_events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.received_events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users.events = endpoint.app.users.events || {};
endpoint.app.users.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users.events.public = endpoint.app.users.events.public || {};
endpoint.app.users.events.public.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events.public'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users.events.orgs = endpoint.app.users.events.orgs || {};
endpoint.app.users.events.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.feeds = endpoint.app.feeds || {};
endpoint.app.feeds.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['feeds'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.notifications = endpoint.app.notifications || {};
endpoint.app.notifications.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.notifications = endpoint.app.repos.notifications || {};
endpoint.app.repos.notifications.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.notifications'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.notifications.threads = endpoint.app.notifications.threads || {};
endpoint.app.notifications.threads.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications.threads'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.notifications.threads.subscription = endpoint.app.notifications.threads.subscription || {};
endpoint.app.notifications.threads.subscription.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications.threads.subscription'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.stargazers = endpoint.app.repos.stargazers || {};
endpoint.app.repos.stargazers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stargazers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users.starred = endpoint.app.users.starred || {};
endpoint.app.users.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.starred'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user = endpoint.app.user || {};
endpoint.app.user.starred = endpoint.app.user.starred || {};
endpoint.app.user.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.starred'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.subscribers = endpoint.app.repos.subscribers || {};
endpoint.app.repos.subscribers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.subscribers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users.subscriptions = endpoint.app.users.subscriptions || {};
endpoint.app.users.subscriptions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.subscriptions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.subscriptions = endpoint.app.user.subscriptions || {};
endpoint.app.user.subscriptions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.subscriptions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.subscription = endpoint.app.repos.subscription || {};
endpoint.app.repos.subscription.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.subscription'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users.gists = endpoint.app.users.gists || {};
endpoint.app.users.gists.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.gists'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.gists = endpoint.app.gists || {};
endpoint.app.gists.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.gists.public = endpoint.app.gists.public || {};
endpoint.app.gists.public.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.public'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.gists.starred = endpoint.app.gists.starred || {};
endpoint.app.gists.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.starred'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.gists.commits = endpoint.app.gists.commits || {};
endpoint.app.gists.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.gists.star = endpoint.app.gists.star || {};
endpoint.app.gists.star.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.star'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.gists.forks = endpoint.app.gists.forks || {};
endpoint.app.gists.forks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.forks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.git = endpoint.app.repos.git || {};
endpoint.app.repos.git.blobs = endpoint.app.repos.git.blobs || {};
endpoint.app.repos.git.blobs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.blobs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.git.commits = endpoint.app.repos.git.commits || {};
endpoint.app.repos.git.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.git.refs = endpoint.app.repos.git.refs || {};
endpoint.app.repos.git.refs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.refs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.git.tags = endpoint.app.repos.git.tags || {};
endpoint.app.repos.git.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.tags'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.git.trees = endpoint.app.repos.git.trees || {};
endpoint.app.repos.git.trees.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.trees'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.apps = endpoint.app.apps || {};
endpoint.app.apps.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['apps'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.app = endpoint.app.app || {};
endpoint.app.app.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['app'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.app.installations = endpoint.app.app.installations || {};
endpoint.app.app.installations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['app.installations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.installations = endpoint.app.user.installations || {};
endpoint.app.user.installations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.installations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.installation = endpoint.app.installation || {};
endpoint.app.installation.repositories = endpoint.app.installation.repositories || {};
endpoint.app.installation.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['installation.repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.installations.repositories = endpoint.app.user.installations.repositories || {};
endpoint.app.user.installations.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.installations.repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.marketplace_listing = endpoint.app.marketplace_listing || {};
endpoint.app.marketplace_listing.plans = endpoint.app.marketplace_listing.plans || {};
endpoint.app.marketplace_listing.plans.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.plans'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.marketplace_listing.plans.accounts = endpoint.app.marketplace_listing.plans.accounts || {};
endpoint.app.marketplace_listing.plans.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.plans.accounts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.marketplace_listing.accounts = endpoint.app.marketplace_listing.accounts || {};
endpoint.app.marketplace_listing.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.accounts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.marketplace_purchases = endpoint.app.user.marketplace_purchases || {};
endpoint.app.user.marketplace_purchases.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.marketplace_purchases'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.issues = endpoint.app.issues || {};
endpoint.app.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.issues = endpoint.app.user.issues || {};
endpoint.app.user.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.issues = endpoint.app.orgs.issues || {};
endpoint.app.orgs.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.assignees = endpoint.app.repos.assignees || {};
endpoint.app.repos.assignees.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.assignees'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.issues.comments = endpoint.app.repos.issues.comments || {};
endpoint.app.repos.issues.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.labels = endpoint.app.repos.labels || {};
endpoint.app.repos.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.issues.labels = endpoint.app.repos.issues.labels || {};
endpoint.app.repos.issues.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.milestones = endpoint.app.repos.milestones || {};
endpoint.app.repos.milestones.labels = endpoint.app.repos.milestones.labels || {};
endpoint.app.repos.milestones.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.milestones.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.milestones.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.milestones'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.issues.timeline = endpoint.app.repos.issues.timeline || {};
endpoint.app.repos.issues.timeline.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.timeline'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.codes_of_conduct = endpoint.app.codes_of_conduct || {};
endpoint.app.codes_of_conduct.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['codes_of_conduct'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.community = endpoint.app.repos.community || {};
endpoint.app.repos.community.code_of_conduct = endpoint.app.repos.community.code_of_conduct || {};
endpoint.app.repos.community.code_of_conduct.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.community.code_of_conduct'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.emojis = endpoint.app.emojis || {};
endpoint.app.emojis.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['emojis'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.gitignore = endpoint.app.gitignore || {};
endpoint.app.gitignore.templates = endpoint.app.gitignore.templates || {};
endpoint.app.gitignore.templates.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gitignore.templates'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.licenses = endpoint.app.licenses || {};
endpoint.app.licenses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['licenses'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.license = endpoint.app.repos.license || {};
endpoint.app.repos.license.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.license'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.meta = endpoint.app.meta || {};
endpoint.app.meta.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['meta'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.rate_limit = endpoint.app.rate_limit || {};
endpoint.app.rate_limit.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['rate_limit'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.orgs = endpoint.app.user.orgs || {};
endpoint.app.user.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.organizations = endpoint.app.organizations || {};
endpoint.app.organizations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['organizations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users.orgs = endpoint.app.users.orgs || {};
endpoint.app.users.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.members = endpoint.app.orgs.members || {};
endpoint.app.orgs.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.public_members = endpoint.app.orgs.public_members || {};
endpoint.app.orgs.public_members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.public_members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.memberships = endpoint.app.orgs.memberships || {};
endpoint.app.orgs.memberships.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.memberships'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.invitations = endpoint.app.orgs.invitations || {};
endpoint.app.orgs.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.memberships = endpoint.app.user.memberships || {};
endpoint.app.user.memberships.orgs = endpoint.app.user.memberships.orgs || {};
endpoint.app.user.memberships.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.memberships.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.outside_collaborators = endpoint.app.orgs.outside_collaborators || {};
endpoint.app.orgs.outside_collaborators.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.outside_collaborators'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.teams = endpoint.app.orgs.teams || {};
endpoint.app.orgs.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.teams = endpoint.app.teams || {};
endpoint.app.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.teams.teams = endpoint.app.teams.teams || {};
endpoint.app.teams.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.teams.members = endpoint.app.teams.members || {};
endpoint.app.teams.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.teams.memberships = endpoint.app.teams.memberships || {};
endpoint.app.teams.memberships.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.memberships'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.teams.invitations = endpoint.app.teams.invitations || {};
endpoint.app.teams.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.teams.repos = endpoint.app.teams.repos || {};
endpoint.app.teams.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.teams = endpoint.app.user.teams || {};
endpoint.app.user.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.hooks = endpoint.app.orgs.hooks || {};
endpoint.app.orgs.hooks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.blocks = endpoint.app.orgs.blocks || {};
endpoint.app.orgs.blocks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.blocks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.projects = endpoint.app.repos.projects || {};
endpoint.app.repos.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.projects = endpoint.app.orgs.projects || {};
endpoint.app.orgs.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.projects = endpoint.app.projects || {};
endpoint.app.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.projects.columns = endpoint.app.projects.columns || {};
endpoint.app.projects.columns.cards = endpoint.app.projects.columns.cards || {};
endpoint.app.projects.columns.cards.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects.columns.cards'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.projects.columns.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects.columns'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls = endpoint.app.repos.pulls || {};
endpoint.app.repos.pulls.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls.commits = endpoint.app.repos.pulls.commits || {};
endpoint.app.repos.pulls.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls.files = endpoint.app.repos.pulls.files || {};
endpoint.app.repos.pulls.files.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.files'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls.merge = endpoint.app.repos.pulls.merge || {};
endpoint.app.repos.pulls.merge.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.merge'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls.reviews = endpoint.app.repos.pulls.reviews || {};
endpoint.app.repos.pulls.reviews.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.reviews'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls.reviews.comments = endpoint.app.repos.pulls.reviews.comments || {};
endpoint.app.repos.pulls.reviews.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.reviews.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls.comments = endpoint.app.repos.pulls.comments || {};
endpoint.app.repos.pulls.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls.requested_reviewers = endpoint.app.repos.pulls.requested_reviewers || {};
endpoint.app.repos.pulls.requested_reviewers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.requested_reviewers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.comments = endpoint.app.repos.comments || {};
endpoint.app.repos.comments.reactions = endpoint.app.repos.comments.reactions || {};
endpoint.app.repos.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.issues.reactions = endpoint.app.repos.issues.reactions || {};
endpoint.app.repos.issues.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.issues.comments.reactions = endpoint.app.repos.issues.comments.reactions || {};
endpoint.app.repos.issues.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pulls.comments.reactions = endpoint.app.repos.pulls.comments.reactions || {};
endpoint.app.repos.pulls.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.repos = endpoint.app.user.repos || {};
endpoint.app.user.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.users.repos = endpoint.app.users.repos || {};
endpoint.app.users.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.orgs.repos = endpoint.app.orgs.repos || {};
endpoint.app.orgs.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repositories = endpoint.app.repositories || {};
endpoint.app.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.topics = endpoint.app.repos.topics || {};
endpoint.app.repos.topics.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.topics'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.contributors = endpoint.app.repos.contributors || {};
endpoint.app.repos.contributors.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.contributors'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.languages = endpoint.app.repos.languages || {};
endpoint.app.repos.languages.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.languages'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.teams = endpoint.app.repos.teams || {};
endpoint.app.repos.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.tags = endpoint.app.repos.tags || {};
endpoint.app.repos.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.tags'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches = endpoint.app.repos.branches || {};
endpoint.app.repos.branches.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches.protection = endpoint.app.repos.branches.protection || {};
endpoint.app.repos.branches.protection.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches.protection.required_status_checks = endpoint.app.repos.branches.protection.required_status_checks || {};
endpoint.app.repos.branches.protection.required_status_checks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_status_checks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches.protection.required_status_checks.contexts = endpoint.app.repos.branches.protection.required_status_checks.contexts || {};
endpoint.app.repos.branches.protection.required_status_checks.contexts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_status_checks.contexts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches.protection.required_pull_request_reviews = endpoint.app.repos.branches.protection.required_pull_request_reviews || {};
endpoint.app.repos.branches.protection.required_pull_request_reviews.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_pull_request_reviews'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches.protection.enforce_admins = endpoint.app.repos.branches.protection.enforce_admins || {};
endpoint.app.repos.branches.protection.enforce_admins.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.enforce_admins'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches.protection.restrictions = endpoint.app.repos.branches.protection.restrictions || {};
endpoint.app.repos.branches.protection.restrictions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches.protection.restrictions.teams = endpoint.app.repos.branches.protection.restrictions.teams || {};
endpoint.app.repos.branches.protection.restrictions.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.branches.protection.restrictions.users = endpoint.app.repos.branches.protection.restrictions.users || {};
endpoint.app.repos.branches.protection.restrictions.users.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions.users'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.collaborators = endpoint.app.repos.collaborators || {};
endpoint.app.repos.collaborators.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.collaborators'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.collaborators.permission = endpoint.app.repos.collaborators.permission || {};
endpoint.app.repos.collaborators.permission.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.collaborators.permission'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.commits = endpoint.app.repos.commits || {};
endpoint.app.repos.commits.comments = endpoint.app.repos.commits.comments || {};
endpoint.app.repos.commits.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.community.profile = endpoint.app.repos.community.profile || {};
endpoint.app.repos.community.profile.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.community.profile'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.compare = endpoint.app.repos.compare || {};
endpoint.app.repos.compare.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.compare'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.readme = endpoint.app.repos.readme || {};
endpoint.app.repos.readme.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.readme'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.contents = endpoint.app.repos.contents || {};
endpoint.app.repos.contents.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.contents'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.keys = endpoint.app.repos.keys || {};
endpoint.app.repos.keys.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.keys'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.deployments = endpoint.app.repos.deployments || {};
endpoint.app.repos.deployments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.deployments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.deployments.statuses = endpoint.app.repos.deployments.statuses || {};
endpoint.app.repos.deployments.statuses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.deployments.statuses'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.downloads = endpoint.app.repos.downloads || {};
endpoint.app.repos.downloads.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.downloads'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.forks = endpoint.app.repos.forks || {};
endpoint.app.repos.forks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.forks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.invitations = endpoint.app.repos.invitations || {};
endpoint.app.repos.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.user.repository_invitations = endpoint.app.user.repository_invitations || {};
endpoint.app.user.repository_invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.repository_invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pages = endpoint.app.repos.pages || {};
endpoint.app.repos.pages.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pages.builds = endpoint.app.repos.pages.builds || {};
endpoint.app.repos.pages.builds.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages.builds'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.pages.builds.latest = endpoint.app.repos.pages.builds.latest || {};
endpoint.app.repos.pages.builds.latest.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages.builds.latest'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.releases = endpoint.app.repos.releases || {};
endpoint.app.repos.releases.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.releases.latest = endpoint.app.repos.releases.latest || {};
endpoint.app.repos.releases.latest.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.latest'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.releases.tags = endpoint.app.repos.releases.tags || {};
endpoint.app.repos.releases.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.tags'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.releases.assets = endpoint.app.repos.releases.assets || {};
endpoint.app.repos.releases.assets.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.assets'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.stats = endpoint.app.repos.stats || {};
endpoint.app.repos.stats.contributors = endpoint.app.repos.stats.contributors || {};
endpoint.app.repos.stats.contributors.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.contributors'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.stats.commit_activity = endpoint.app.repos.stats.commit_activity || {};
endpoint.app.repos.stats.commit_activity.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.commit_activity'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.stats.code_frequency = endpoint.app.repos.stats.code_frequency || {};
endpoint.app.repos.stats.code_frequency.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.code_frequency'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.stats.participation = endpoint.app.repos.stats.participation || {};
endpoint.app.repos.stats.participation.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.participation'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.stats.punch_card = endpoint.app.repos.stats.punch_card || {};
endpoint.app.repos.stats.punch_card.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.punch_card'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.commits.statuses = endpoint.app.repos.commits.statuses || {};
endpoint.app.repos.commits.statuses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.statuses'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.commits.status = endpoint.app.repos.commits.status || {};
endpoint.app.repos.commits.status.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.status'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.traffic = endpoint.app.repos.traffic || {};
endpoint.app.repos.traffic.popular = endpoint.app.repos.traffic.popular || {};
endpoint.app.repos.traffic.popular.referrers = endpoint.app.repos.traffic.popular.referrers || {};
endpoint.app.repos.traffic.popular.referrers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.popular.referrers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.traffic.popular.paths = endpoint.app.repos.traffic.popular.paths || {};
endpoint.app.repos.traffic.popular.paths.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.popular.paths'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.traffic.views = endpoint.app.repos.traffic.views || {};
endpoint.app.repos.traffic.views.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.views'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.traffic.clones = endpoint.app.repos.traffic.clones || {};
endpoint.app.repos.traffic.clones.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.clones'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.repos.hooks = endpoint.app.repos.hooks || {};
endpoint.app.repos.hooks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.search = endpoint.app.search || {};
endpoint.app.search.repositories = endpoint.app.search.repositories || {};
endpoint.app.search.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.search.commits = endpoint.app.search.commits || {};
endpoint.app.search.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.search.code = endpoint.app.search.code || {};
endpoint.app.search.code.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.code'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.search.issues = endpoint.app.search.issues || {};
endpoint.app.search.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

endpoint.app.search.users = endpoint.app.search.users || {};
endpoint.app.search.users.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.users'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.get({path: url, params: arguments[size]});
	else return endpoint.app.get(url);
};

