

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

endpoint.install = endpoint.install || {};


endpoint.install.events = endpoint.install.events || {};
endpoint.install.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['events'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos = endpoint.install.repos || {};
endpoint.install.repos.events = endpoint.install.repos.events || {};
endpoint.install.repos.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.events'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.issues = endpoint.install.repos.issues || {};
endpoint.install.repos.issues.events = endpoint.install.repos.issues.events || {};
endpoint.install.repos.issues.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.events'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.networks = endpoint.install.networks || {};
endpoint.install.networks.events = endpoint.install.networks.events || {};
endpoint.install.networks.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['networks.events'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs = endpoint.install.orgs || {};
endpoint.install.orgs.events = endpoint.install.orgs.events || {};
endpoint.install.orgs.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.events'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users = endpoint.install.users || {};
endpoint.install.users.received_events = endpoint.install.users.received_events || {};
endpoint.install.users.received_events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.received_events'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users.events = endpoint.install.users.events || {};
endpoint.install.users.events.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users.events.public = endpoint.install.users.events.public || {};
endpoint.install.users.events.public.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events.public'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users.events.orgs = endpoint.install.users.events.orgs || {};
endpoint.install.users.events.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.events.orgs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.feeds = endpoint.install.feeds || {};
endpoint.install.feeds.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['feeds'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.notifications = endpoint.install.notifications || {};
endpoint.install.notifications.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.notifications = endpoint.install.repos.notifications || {};
endpoint.install.repos.notifications.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.notifications'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.notifications.threads = endpoint.install.notifications.threads || {};
endpoint.install.notifications.threads.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications.threads'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.notifications.threads.subscription = endpoint.install.notifications.threads.subscription || {};
endpoint.install.notifications.threads.subscription.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['notifications.threads.subscription'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.stargazers = endpoint.install.repos.stargazers || {};
endpoint.install.repos.stargazers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stargazers'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users.starred = endpoint.install.users.starred || {};
endpoint.install.users.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.starred'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user = endpoint.install.user || {};
endpoint.install.user.starred = endpoint.install.user.starred || {};
endpoint.install.user.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.starred'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.subscribers = endpoint.install.repos.subscribers || {};
endpoint.install.repos.subscribers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.subscribers'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users.subscriptions = endpoint.install.users.subscriptions || {};
endpoint.install.users.subscriptions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.subscriptions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.subscriptions = endpoint.install.user.subscriptions || {};
endpoint.install.user.subscriptions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.subscriptions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.subscription = endpoint.install.repos.subscription || {};
endpoint.install.repos.subscription.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.subscription'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users.gists = endpoint.install.users.gists || {};
endpoint.install.users.gists.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.gists'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.gists = endpoint.install.gists || {};
endpoint.install.gists.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.gists.public = endpoint.install.gists.public || {};
endpoint.install.gists.public.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.public'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.gists.starred = endpoint.install.gists.starred || {};
endpoint.install.gists.starred.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.starred'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.gists.commits = endpoint.install.gists.commits || {};
endpoint.install.gists.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.commits'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.gists.star = endpoint.install.gists.star || {};
endpoint.install.gists.star.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.star'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.gists.forks = endpoint.install.gists.forks || {};
endpoint.install.gists.forks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gists.forks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.git = endpoint.install.repos.git || {};
endpoint.install.repos.git.blobs = endpoint.install.repos.git.blobs || {};
endpoint.install.repos.git.blobs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.blobs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.git.commits = endpoint.install.repos.git.commits || {};
endpoint.install.repos.git.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.commits'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.git.refs = endpoint.install.repos.git.refs || {};
endpoint.install.repos.git.refs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.refs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.git.tags = endpoint.install.repos.git.tags || {};
endpoint.install.repos.git.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.tags'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.git.trees = endpoint.install.repos.git.trees || {};
endpoint.install.repos.git.trees.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.git.trees'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.apps = endpoint.install.apps || {};
endpoint.install.apps.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['apps'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.app = endpoint.install.app || {};
endpoint.install.app.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['app'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.app.installations = endpoint.install.app.installations || {};
endpoint.install.app.installations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['app.installations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.installations = endpoint.install.user.installations || {};
endpoint.install.user.installations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.installations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.installation = endpoint.install.installation || {};
endpoint.install.installation.repositories = endpoint.install.installation.repositories || {};
endpoint.install.installation.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['installation.repositories'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.installations.repositories = endpoint.install.user.installations.repositories || {};
endpoint.install.user.installations.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.installations.repositories'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.marketplace_listing = endpoint.install.marketplace_listing || {};
endpoint.install.marketplace_listing.plans = endpoint.install.marketplace_listing.plans || {};
endpoint.install.marketplace_listing.plans.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.plans'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.marketplace_listing.plans.accounts = endpoint.install.marketplace_listing.plans.accounts || {};
endpoint.install.marketplace_listing.plans.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.plans.accounts'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.marketplace_listing.accounts = endpoint.install.marketplace_listing.accounts || {};
endpoint.install.marketplace_listing.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['marketplace_listing.accounts'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.marketplace_purchases = endpoint.install.user.marketplace_purchases || {};
endpoint.install.user.marketplace_purchases.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.marketplace_purchases'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.issues = endpoint.install.issues || {};
endpoint.install.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['issues'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.issues = endpoint.install.user.issues || {};
endpoint.install.user.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.issues'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.issues = endpoint.install.orgs.issues || {};
endpoint.install.orgs.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.issues'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.assignees = endpoint.install.repos.assignees || {};
endpoint.install.repos.assignees.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.assignees'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.issues.comments = endpoint.install.repos.issues.comments || {};
endpoint.install.repos.issues.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.labels = endpoint.install.repos.labels || {};
endpoint.install.repos.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.issues.labels = endpoint.install.repos.issues.labels || {};
endpoint.install.repos.issues.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.milestones = endpoint.install.repos.milestones || {};
endpoint.install.repos.milestones.labels = endpoint.install.repos.milestones.labels || {};
endpoint.install.repos.milestones.labels.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.milestones.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.milestones.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.milestones'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.issues.timeline = endpoint.install.repos.issues.timeline || {};
endpoint.install.repos.issues.timeline.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.timeline'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.codes_of_conduct = endpoint.install.codes_of_conduct || {};
endpoint.install.codes_of_conduct.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['codes_of_conduct'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.community = endpoint.install.repos.community || {};
endpoint.install.repos.community.code_of_conduct = endpoint.install.repos.community.code_of_conduct || {};
endpoint.install.repos.community.code_of_conduct.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.community.code_of_conduct'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.emojis = endpoint.install.emojis || {};
endpoint.install.emojis.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['emojis'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.gitignore = endpoint.install.gitignore || {};
endpoint.install.gitignore.templates = endpoint.install.gitignore.templates || {};
endpoint.install.gitignore.templates.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['gitignore.templates'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.licenses = endpoint.install.licenses || {};
endpoint.install.licenses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['licenses'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.license = endpoint.install.repos.license || {};
endpoint.install.repos.license.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.license'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.meta = endpoint.install.meta || {};
endpoint.install.meta.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['meta'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.rate_limit = endpoint.install.rate_limit || {};
endpoint.install.rate_limit.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['rate_limit'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.orgs = endpoint.install.user.orgs || {};
endpoint.install.user.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.orgs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.organizations = endpoint.install.organizations || {};
endpoint.install.organizations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['organizations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users.orgs = endpoint.install.users.orgs || {};
endpoint.install.users.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.orgs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.members = endpoint.install.orgs.members || {};
endpoint.install.orgs.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.members'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.public_members = endpoint.install.orgs.public_members || {};
endpoint.install.orgs.public_members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.public_members'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.memberships = endpoint.install.orgs.memberships || {};
endpoint.install.orgs.memberships.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.memberships'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.invitations = endpoint.install.orgs.invitations || {};
endpoint.install.orgs.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.invitations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.memberships = endpoint.install.user.memberships || {};
endpoint.install.user.memberships.orgs = endpoint.install.user.memberships.orgs || {};
endpoint.install.user.memberships.orgs.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.memberships.orgs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.outside_collaborators = endpoint.install.orgs.outside_collaborators || {};
endpoint.install.orgs.outside_collaborators.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.outside_collaborators'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.teams = endpoint.install.orgs.teams || {};
endpoint.install.orgs.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.teams = endpoint.install.teams || {};
endpoint.install.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.teams.teams = endpoint.install.teams.teams || {};
endpoint.install.teams.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.teams.members = endpoint.install.teams.members || {};
endpoint.install.teams.members.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.members'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.teams.memberships = endpoint.install.teams.memberships || {};
endpoint.install.teams.memberships.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.memberships'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.teams.invitations = endpoint.install.teams.invitations || {};
endpoint.install.teams.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.invitations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.teams.repos = endpoint.install.teams.repos || {};
endpoint.install.teams.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['teams.repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.teams = endpoint.install.user.teams || {};
endpoint.install.user.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.hooks = endpoint.install.orgs.hooks || {};
endpoint.install.orgs.hooks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.hooks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.blocks = endpoint.install.orgs.blocks || {};
endpoint.install.orgs.blocks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.blocks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.projects = endpoint.install.repos.projects || {};
endpoint.install.repos.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.projects'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.projects = endpoint.install.orgs.projects || {};
endpoint.install.orgs.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.projects'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.projects = endpoint.install.projects || {};
endpoint.install.projects.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.projects.columns = endpoint.install.projects.columns || {};
endpoint.install.projects.columns.cards = endpoint.install.projects.columns.cards || {};
endpoint.install.projects.columns.cards.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects.columns.cards'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.projects.columns.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['projects.columns'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls = endpoint.install.repos.pulls || {};
endpoint.install.repos.pulls.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.commits = endpoint.install.repos.pulls.commits || {};
endpoint.install.repos.pulls.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.commits'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.files = endpoint.install.repos.pulls.files || {};
endpoint.install.repos.pulls.files.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.files'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.merge = endpoint.install.repos.pulls.merge || {};
endpoint.install.repos.pulls.merge.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.merge'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.reviews = endpoint.install.repos.pulls.reviews || {};
endpoint.install.repos.pulls.reviews.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.reviews'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.reviews.comments = endpoint.install.repos.pulls.reviews.comments || {};
endpoint.install.repos.pulls.reviews.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.reviews.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.comments = endpoint.install.repos.pulls.comments || {};
endpoint.install.repos.pulls.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.requested_reviewers = endpoint.install.repos.pulls.requested_reviewers || {};
endpoint.install.repos.pulls.requested_reviewers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.requested_reviewers'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.comments = endpoint.install.repos.comments || {};
endpoint.install.repos.comments.reactions = endpoint.install.repos.comments.reactions || {};
endpoint.install.repos.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.comments.reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.issues.reactions = endpoint.install.repos.issues.reactions || {};
endpoint.install.repos.issues.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.issues.comments.reactions = endpoint.install.repos.issues.comments.reactions || {};
endpoint.install.repos.issues.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.issues.comments.reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.comments.reactions = endpoint.install.repos.pulls.comments.reactions || {};
endpoint.install.repos.pulls.comments.reactions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pulls.comments.reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.repos = endpoint.install.user.repos || {};
endpoint.install.user.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.users.repos = endpoint.install.users.repos || {};
endpoint.install.users.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['users.repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.orgs.repos = endpoint.install.orgs.repos || {};
endpoint.install.orgs.repos.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['orgs.repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repositories = endpoint.install.repositories || {};
endpoint.install.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repositories'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.topics = endpoint.install.repos.topics || {};
endpoint.install.repos.topics.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.topics'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.contributors = endpoint.install.repos.contributors || {};
endpoint.install.repos.contributors.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.contributors'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.languages = endpoint.install.repos.languages || {};
endpoint.install.repos.languages.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.languages'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.teams = endpoint.install.repos.teams || {};
endpoint.install.repos.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.tags = endpoint.install.repos.tags || {};
endpoint.install.repos.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.tags'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches = endpoint.install.repos.branches || {};
endpoint.install.repos.branches.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection = endpoint.install.repos.branches.protection || {};
endpoint.install.repos.branches.protection.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.required_status_checks = endpoint.install.repos.branches.protection.required_status_checks || {};
endpoint.install.repos.branches.protection.required_status_checks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_status_checks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.required_status_checks.contexts = endpoint.install.repos.branches.protection.required_status_checks.contexts || {};
endpoint.install.repos.branches.protection.required_status_checks.contexts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_status_checks.contexts'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.required_pull_request_reviews = endpoint.install.repos.branches.protection.required_pull_request_reviews || {};
endpoint.install.repos.branches.protection.required_pull_request_reviews.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.required_pull_request_reviews'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.enforce_admins = endpoint.install.repos.branches.protection.enforce_admins || {};
endpoint.install.repos.branches.protection.enforce_admins.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.enforce_admins'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions = endpoint.install.repos.branches.protection.restrictions || {};
endpoint.install.repos.branches.protection.restrictions.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions.teams = endpoint.install.repos.branches.protection.restrictions.teams || {};
endpoint.install.repos.branches.protection.restrictions.teams.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions.users = endpoint.install.repos.branches.protection.restrictions.users || {};
endpoint.install.repos.branches.protection.restrictions.users.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.branches.protection.restrictions.users'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.collaborators = endpoint.install.repos.collaborators || {};
endpoint.install.repos.collaborators.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.collaborators'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.collaborators.permission = endpoint.install.repos.collaborators.permission || {};
endpoint.install.repos.collaborators.permission.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.collaborators.permission'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.commits = endpoint.install.repos.commits || {};
endpoint.install.repos.commits.comments = endpoint.install.repos.commits.comments || {};
endpoint.install.repos.commits.comments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.community.profile = endpoint.install.repos.community.profile || {};
endpoint.install.repos.community.profile.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.community.profile'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.compare = endpoint.install.repos.compare || {};
endpoint.install.repos.compare.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.compare'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.readme = endpoint.install.repos.readme || {};
endpoint.install.repos.readme.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.readme'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.contents = endpoint.install.repos.contents || {};
endpoint.install.repos.contents.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.contents'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.keys = endpoint.install.repos.keys || {};
endpoint.install.repos.keys.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.keys'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.deployments = endpoint.install.repos.deployments || {};
endpoint.install.repos.deployments.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.deployments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.deployments.statuses = endpoint.install.repos.deployments.statuses || {};
endpoint.install.repos.deployments.statuses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.deployments.statuses'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.downloads = endpoint.install.repos.downloads || {};
endpoint.install.repos.downloads.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.downloads'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.forks = endpoint.install.repos.forks || {};
endpoint.install.repos.forks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.forks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.invitations = endpoint.install.repos.invitations || {};
endpoint.install.repos.invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.invitations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.user.repository_invitations = endpoint.install.user.repository_invitations || {};
endpoint.install.user.repository_invitations.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['user.repository_invitations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pages = endpoint.install.repos.pages || {};
endpoint.install.repos.pages.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pages.builds = endpoint.install.repos.pages.builds || {};
endpoint.install.repos.pages.builds.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages.builds'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.pages.builds.latest = endpoint.install.repos.pages.builds.latest || {};
endpoint.install.repos.pages.builds.latest.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.pages.builds.latest'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.releases = endpoint.install.repos.releases || {};
endpoint.install.repos.releases.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.releases.latest = endpoint.install.repos.releases.latest || {};
endpoint.install.repos.releases.latest.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.latest'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.releases.tags = endpoint.install.repos.releases.tags || {};
endpoint.install.repos.releases.tags.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.tags'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.releases.assets = endpoint.install.repos.releases.assets || {};
endpoint.install.repos.releases.assets.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.releases.assets'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.stats = endpoint.install.repos.stats || {};
endpoint.install.repos.stats.contributors = endpoint.install.repos.stats.contributors || {};
endpoint.install.repos.stats.contributors.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.contributors'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.stats.commit_activity = endpoint.install.repos.stats.commit_activity || {};
endpoint.install.repos.stats.commit_activity.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.commit_activity'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.stats.code_frequency = endpoint.install.repos.stats.code_frequency || {};
endpoint.install.repos.stats.code_frequency.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.code_frequency'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.stats.participation = endpoint.install.repos.stats.participation || {};
endpoint.install.repos.stats.participation.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.participation'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.stats.punch_card = endpoint.install.repos.stats.punch_card || {};
endpoint.install.repos.stats.punch_card.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.stats.punch_card'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.commits.statuses = endpoint.install.repos.commits.statuses || {};
endpoint.install.repos.commits.statuses.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.statuses'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.commits.status = endpoint.install.repos.commits.status || {};
endpoint.install.repos.commits.status.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.commits.status'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.traffic = endpoint.install.repos.traffic || {};
endpoint.install.repos.traffic.popular = endpoint.install.repos.traffic.popular || {};
endpoint.install.repos.traffic.popular.referrers = endpoint.install.repos.traffic.popular.referrers || {};
endpoint.install.repos.traffic.popular.referrers.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.popular.referrers'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.traffic.popular.paths = endpoint.install.repos.traffic.popular.paths || {};
endpoint.install.repos.traffic.popular.paths.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.popular.paths'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.traffic.views = endpoint.install.repos.traffic.views || {};
endpoint.install.repos.traffic.views.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.views'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.traffic.clones = endpoint.install.repos.traffic.clones || {};
endpoint.install.repos.traffic.clones.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.traffic.clones'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.repos.hooks = endpoint.install.repos.hooks || {};
endpoint.install.repos.hooks.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['repos.hooks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.search = endpoint.install.search || {};
endpoint.install.search.repositories = endpoint.install.search.repositories || {};
endpoint.install.search.repositories.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.repositories'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.search.commits = endpoint.install.search.commits || {};
endpoint.install.search.commits.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.commits'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.search.code = endpoint.install.search.code || {};
endpoint.install.search.code.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.code'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.search.issues = endpoint.install.search.issues || {};
endpoint.install.search.issues.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.issues'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

endpoint.install.search.users = endpoint.install.search.users || {};
endpoint.install.search.users.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['get']['search.users'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.get({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.get({account: arguments[0], path: url});
};

