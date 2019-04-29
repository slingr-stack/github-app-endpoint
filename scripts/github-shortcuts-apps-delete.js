

var urlsData = {
	"get": {},
	"post": {},
	"put": {},
	"patch": {},
	"delete": {
		"notifications.threads.subscription": {
			"1": "/notifications/threads/:id/subscription"
		},
		"user.starred": {
			"2": "/user/starred/:owner/:repo"
		},
		"repos.subscription": {
			"2": "/repos/:owner/:repo/subscription"
		},
		"gists.star": {
			"1": "/gists/:id/star"
		},
		"gists": {
			"1": "/gists/:id"
		},
		"repos.git.refs": {
			"3": "/repos/:owner/:repo/git/refs/:ref"
		},
		"user.installations.repositories": {
			"2": "/user/installations/:installation_id/repositories/:repository_id"
		},
		"repos.issues.lock": {
			"3": "/repos/:owner/:repo/issues/:number/lock"
		},
		"repos.issues.assignees": {
			"3": "/repos/:owner/:repo/issues/:number/assignees"
		},
		"repos.issues.comments": {
			"3": "/repos/:owner/:repo/issues/comments/:id"
		},
		"repos.labels": {
			"3": "/repos/:owner/:repo/labels/:name"
		},
		"repos.issues.labels": {
			"3": "/repos/:owner/:repo/issues/:number/labels",
			"4": "/repos/:owner/:repo/issues/:number/labels/:name"
		},
		"repos.milestones": {
			"3": "/repos/:owner/:repo/milestones/:number"
		},
		"orgs.members": {
			"2": "/orgs/:org/members/:username"
		},
		"orgs.public_members": {
			"2": "/orgs/:org/public_members/:username"
		},
		"orgs.memberships": {
			"2": "/orgs/:org/memberships/:username"
		},
		"orgs.outside_collaborators": {
			"2": "/orgs/:org/outside_collaborators/:username"
		},
		"teams": {
			"1": "/teams/:id"
		},
		"teams.memberships": {
			"2": "/teams/:id/memberships/:username"
		},
		"teams.repos": {
			"3": "/teams/:id/repos/:owner/:repo"
		},
		"orgs.hooks": {
			"2": "/orgs/:org/hooks/:id"
		},
		"orgs.blocks": {
			"2": "/orgs/:org/blocks/:username"
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
		"repos.pulls.reviews": {
			"4": "/repos/:owner/:repo/pulls/:number/reviews/:id"
		},
		"repos.pulls.comments": {
			"3": "/repos/:owner/:repo/pulls/comments/:id"
		},
		"repos.pulls.requested_reviewers": {
			"3": "/repos/:owner/:repo/pulls/:number/requested_reviewers"
		},
		"reactions": {
			"1": "/reactions/:id"
		},
		"repos": {
			"2": "/repos/:owner/:repo"
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
			"3": "/repos/:owner/:repo/collaborators/:username"
		},
		"repos.comments": {
			"3": "/repos/:owner/:repo/comments/:id"
		},
		"repos.contents": {
			"3": "/repos/:owner/:repo/contents/:path"
		},
		"repos.keys": {
			"3": "/repos/:owner/:repo/keys/:id"
		},
		"repos.deployments": {
			"2": "/repos/:owner/:repo/deployments"
		},
		"repos.deployments.statuses": {
			"3": "/repos/:owner/:repo/deployments/:id/statuses"
		},
		"repos.downloads": {
			"3": "/repos/:owner/:repo/downloads/:id"
		},
		"repos.forks": {
			"2": "/repos/:owner/:repo/forks"
		},
		"repos.invitations": {
			"3": "/repos/:owner/:repo/invitations/:invitation_id"
		},
		"user.repository_invitations": {
			"1": "/user/repository_invitations/:invitation_id"
		},
		"repos.releases": {
			"3": "/repos/:owner/:repo/releases/:id"
		},
		"repos.releases.assets": {
			"3": "/repos/:owner/:repo/releases/assets/:id"
		},
		"repos.hooks": {
			"3": "/repos/:owner/:repo/hooks/:id"
		}
	}
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

endpoint.app.notifications = endpoint.app.notifications || {};
endpoint.app.notifications.threads = endpoint.app.notifications.threads || {};
endpoint.app.notifications.threads.subscription = endpoint.app.notifications.threads.subscription || {};
endpoint.app.notifications.threads.subscription.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['notifications.threads.subscription'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.user = endpoint.app.user || {};
endpoint.app.user.starred = endpoint.app.user.starred || {};
endpoint.app.user.starred.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['user.starred'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos = endpoint.app.repos || {};
endpoint.app.repos.subscription = endpoint.app.repos.subscription || {};
endpoint.app.repos.subscription.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.subscription'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.gists = endpoint.app.gists || {};
endpoint.app.gists.star = endpoint.app.gists.star || {};
endpoint.app.gists.star.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['gists.star'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.gists.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['gists'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.git = endpoint.app.repos.git || {};
endpoint.app.repos.git.refs = endpoint.app.repos.git.refs || {};
endpoint.app.repos.git.refs.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.git.refs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.user.installations = endpoint.app.user.installations || {};
endpoint.app.user.installations.repositories = endpoint.app.user.installations.repositories || {};
endpoint.app.user.installations.repositories.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['user.installations.repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.issues = endpoint.app.repos.issues || {};
endpoint.app.repos.issues.lock = endpoint.app.repos.issues.lock || {};
endpoint.app.repos.issues.lock.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.issues.lock'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.issues.assignees = endpoint.app.repos.issues.assignees || {};
endpoint.app.repos.issues.assignees.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.issues.assignees'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.issues.comments = endpoint.app.repos.issues.comments || {};
endpoint.app.repos.issues.comments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.issues.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.labels = endpoint.app.repos.labels || {};
endpoint.app.repos.labels.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.issues.labels = endpoint.app.repos.issues.labels || {};
endpoint.app.repos.issues.labels.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.issues.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.milestones = endpoint.app.repos.milestones || {};
endpoint.app.repos.milestones.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.milestones'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.orgs = endpoint.app.orgs || {};
endpoint.app.orgs.members = endpoint.app.orgs.members || {};
endpoint.app.orgs.members.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.orgs.public_members = endpoint.app.orgs.public_members || {};
endpoint.app.orgs.public_members.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.public_members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.orgs.memberships = endpoint.app.orgs.memberships || {};
endpoint.app.orgs.memberships.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.memberships'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.orgs.outside_collaborators = endpoint.app.orgs.outside_collaborators || {};
endpoint.app.orgs.outside_collaborators.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.outside_collaborators'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.teams = endpoint.app.teams || {};
endpoint.app.teams.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.teams.memberships = endpoint.app.teams.memberships || {};
endpoint.app.teams.memberships.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['teams.memberships'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.teams.repos = endpoint.app.teams.repos || {};
endpoint.app.teams.repos.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['teams.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.orgs.hooks = endpoint.app.orgs.hooks || {};
endpoint.app.orgs.hooks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.orgs.blocks = endpoint.app.orgs.blocks || {};
endpoint.app.orgs.blocks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.blocks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.projects = endpoint.app.projects || {};
endpoint.app.projects.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.projects.columns = endpoint.app.projects.columns || {};
endpoint.app.projects.columns.cards = endpoint.app.projects.columns.cards || {};
endpoint.app.projects.columns.cards.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['projects.columns.cards'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.projects.columns.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['projects.columns'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.pulls = endpoint.app.repos.pulls || {};
endpoint.app.repos.pulls.reviews = endpoint.app.repos.pulls.reviews || {};
endpoint.app.repos.pulls.reviews.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.pulls.reviews'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.pulls.comments = endpoint.app.repos.pulls.comments || {};
endpoint.app.repos.pulls.comments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.pulls.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.pulls.requested_reviewers = endpoint.app.repos.pulls.requested_reviewers || {};
endpoint.app.repos.pulls.requested_reviewers.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.pulls.requested_reviewers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.reactions = endpoint.app.reactions || {};
endpoint.app.reactions.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.branches = endpoint.app.repos.branches || {};
endpoint.app.repos.branches.protection = endpoint.app.repos.branches.protection || {};
endpoint.app.repos.branches.protection.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.branches.protection.required_status_checks = endpoint.app.repos.branches.protection.required_status_checks || {};
endpoint.app.repos.branches.protection.required_status_checks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.required_status_checks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.branches.protection.required_status_checks.contexts = endpoint.app.repos.branches.protection.required_status_checks.contexts || {};
endpoint.app.repos.branches.protection.required_status_checks.contexts.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.required_status_checks.contexts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.branches.protection.required_pull_request_reviews = endpoint.app.repos.branches.protection.required_pull_request_reviews || {};
endpoint.app.repos.branches.protection.required_pull_request_reviews.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.required_pull_request_reviews'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.branches.protection.enforce_admins = endpoint.app.repos.branches.protection.enforce_admins || {};
endpoint.app.repos.branches.protection.enforce_admins.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.enforce_admins'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.branches.protection.restrictions = endpoint.app.repos.branches.protection.restrictions || {};
endpoint.app.repos.branches.protection.restrictions.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.restrictions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.branches.protection.restrictions.teams = endpoint.app.repos.branches.protection.restrictions.teams || {};
endpoint.app.repos.branches.protection.restrictions.teams.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.restrictions.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.branches.protection.restrictions.users = endpoint.app.repos.branches.protection.restrictions.users || {};
endpoint.app.repos.branches.protection.restrictions.users.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.restrictions.users'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.collaborators = endpoint.app.repos.collaborators || {};
endpoint.app.repos.collaborators.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.collaborators'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.comments = endpoint.app.repos.comments || {};
endpoint.app.repos.comments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.contents = endpoint.app.repos.contents || {};
endpoint.app.repos.contents.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.contents'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.keys = endpoint.app.repos.keys || {};
endpoint.app.repos.keys.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.keys'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.deployments = endpoint.app.repos.deployments || {};
endpoint.app.repos.deployments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.deployments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.deployments.statuses = endpoint.app.repos.deployments.statuses || {};
endpoint.app.repos.deployments.statuses.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.deployments.statuses'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.downloads = endpoint.app.repos.downloads || {};
endpoint.app.repos.downloads.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.downloads'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.forks = endpoint.app.repos.forks || {};
endpoint.app.repos.forks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.forks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.invitations = endpoint.app.repos.invitations || {};
endpoint.app.repos.invitations.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.user.repository_invitations = endpoint.app.user.repository_invitations || {};
endpoint.app.user.repository_invitations.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['user.repository_invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.releases = endpoint.app.repos.releases || {};
endpoint.app.repos.releases.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.releases'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.releases.assets = endpoint.app.repos.releases.assets || {};
endpoint.app.repos.releases.assets.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.releases.assets'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

endpoint.app.repos.hooks = endpoint.app.repos.hooks || {};
endpoint.app.repos.hooks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.delete({path: url, params: arguments[size]});
	else return endpoint.app.delete(url);
};

