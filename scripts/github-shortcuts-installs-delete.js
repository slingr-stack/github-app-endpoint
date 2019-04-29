

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

endpoint.install = endpoint.install || {};


endpoint.install.notifications = endpoint.install.notifications || {};
endpoint.install.notifications.threads = endpoint.install.notifications.threads || {};
endpoint.install.notifications.threads.subscription = endpoint.install.notifications.threads.subscription || {};
endpoint.install.notifications.threads.subscription.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['notifications.threads.subscription'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.user = endpoint.install.user || {};
endpoint.install.user.starred = endpoint.install.user.starred || {};
endpoint.install.user.starred.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['user.starred'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos = endpoint.install.repos || {};
endpoint.install.repos.subscription = endpoint.install.repos.subscription || {};
endpoint.install.repos.subscription.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.subscription'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.gists = endpoint.install.gists || {};
endpoint.install.gists.star = endpoint.install.gists.star || {};
endpoint.install.gists.star.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['gists.star'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.gists.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['gists'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.git = endpoint.install.repos.git || {};
endpoint.install.repos.git.refs = endpoint.install.repos.git.refs || {};
endpoint.install.repos.git.refs.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.git.refs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.user.installations = endpoint.install.user.installations || {};
endpoint.install.user.installations.repositories = endpoint.install.user.installations.repositories || {};
endpoint.install.user.installations.repositories.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['user.installations.repositories'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.issues = endpoint.install.repos.issues || {};
endpoint.install.repos.issues.lock = endpoint.install.repos.issues.lock || {};
endpoint.install.repos.issues.lock.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.issues.lock'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.issues.assignees = endpoint.install.repos.issues.assignees || {};
endpoint.install.repos.issues.assignees.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.issues.assignees'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.issues.comments = endpoint.install.repos.issues.comments || {};
endpoint.install.repos.issues.comments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.issues.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.labels = endpoint.install.repos.labels || {};
endpoint.install.repos.labels.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.issues.labels = endpoint.install.repos.issues.labels || {};
endpoint.install.repos.issues.labels.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.issues.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.milestones = endpoint.install.repos.milestones || {};
endpoint.install.repos.milestones.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.milestones'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.orgs = endpoint.install.orgs || {};
endpoint.install.orgs.members = endpoint.install.orgs.members || {};
endpoint.install.orgs.members.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.members'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.orgs.public_members = endpoint.install.orgs.public_members || {};
endpoint.install.orgs.public_members.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.public_members'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.orgs.memberships = endpoint.install.orgs.memberships || {};
endpoint.install.orgs.memberships.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.memberships'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.orgs.outside_collaborators = endpoint.install.orgs.outside_collaborators || {};
endpoint.install.orgs.outside_collaborators.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.outside_collaborators'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.teams = endpoint.install.teams || {};
endpoint.install.teams.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.teams.memberships = endpoint.install.teams.memberships || {};
endpoint.install.teams.memberships.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['teams.memberships'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.teams.repos = endpoint.install.teams.repos || {};
endpoint.install.teams.repos.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['teams.repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.orgs.hooks = endpoint.install.orgs.hooks || {};
endpoint.install.orgs.hooks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.hooks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.orgs.blocks = endpoint.install.orgs.blocks || {};
endpoint.install.orgs.blocks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['orgs.blocks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.projects = endpoint.install.projects || {};
endpoint.install.projects.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['projects'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.projects.columns = endpoint.install.projects.columns || {};
endpoint.install.projects.columns.cards = endpoint.install.projects.columns.cards || {};
endpoint.install.projects.columns.cards.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['projects.columns.cards'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.projects.columns.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['projects.columns'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.pulls = endpoint.install.repos.pulls || {};
endpoint.install.repos.pulls.reviews = endpoint.install.repos.pulls.reviews || {};
endpoint.install.repos.pulls.reviews.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.pulls.reviews'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.comments = endpoint.install.repos.pulls.comments || {};
endpoint.install.repos.pulls.comments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.pulls.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.requested_reviewers = endpoint.install.repos.pulls.requested_reviewers || {};
endpoint.install.repos.pulls.requested_reviewers.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.pulls.requested_reviewers'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.reactions = endpoint.install.reactions || {};
endpoint.install.reactions.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.branches = endpoint.install.repos.branches || {};
endpoint.install.repos.branches.protection = endpoint.install.repos.branches.protection || {};
endpoint.install.repos.branches.protection.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.required_status_checks = endpoint.install.repos.branches.protection.required_status_checks || {};
endpoint.install.repos.branches.protection.required_status_checks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.required_status_checks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.required_status_checks.contexts = endpoint.install.repos.branches.protection.required_status_checks.contexts || {};
endpoint.install.repos.branches.protection.required_status_checks.contexts.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.required_status_checks.contexts'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.required_pull_request_reviews = endpoint.install.repos.branches.protection.required_pull_request_reviews || {};
endpoint.install.repos.branches.protection.required_pull_request_reviews.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.required_pull_request_reviews'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.enforce_admins = endpoint.install.repos.branches.protection.enforce_admins || {};
endpoint.install.repos.branches.protection.enforce_admins.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.enforce_admins'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions = endpoint.install.repos.branches.protection.restrictions || {};
endpoint.install.repos.branches.protection.restrictions.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.restrictions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions.teams = endpoint.install.repos.branches.protection.restrictions.teams || {};
endpoint.install.repos.branches.protection.restrictions.teams.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.restrictions.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions.users = endpoint.install.repos.branches.protection.restrictions.users || {};
endpoint.install.repos.branches.protection.restrictions.users.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.branches.protection.restrictions.users'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.collaborators = endpoint.install.repos.collaborators || {};
endpoint.install.repos.collaborators.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.collaborators'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.comments = endpoint.install.repos.comments || {};
endpoint.install.repos.comments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.contents = endpoint.install.repos.contents || {};
endpoint.install.repos.contents.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.contents'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.keys = endpoint.install.repos.keys || {};
endpoint.install.repos.keys.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.keys'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.deployments = endpoint.install.repos.deployments || {};
endpoint.install.repos.deployments.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.deployments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.deployments.statuses = endpoint.install.repos.deployments.statuses || {};
endpoint.install.repos.deployments.statuses.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.deployments.statuses'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.downloads = endpoint.install.repos.downloads || {};
endpoint.install.repos.downloads.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.downloads'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.forks = endpoint.install.repos.forks || {};
endpoint.install.repos.forks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.forks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.invitations = endpoint.install.repos.invitations || {};
endpoint.install.repos.invitations.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.invitations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.user.repository_invitations = endpoint.install.user.repository_invitations || {};
endpoint.install.user.repository_invitations.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['user.repository_invitations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.releases = endpoint.install.repos.releases || {};
endpoint.install.repos.releases.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.releases'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.releases.assets = endpoint.install.repos.releases.assets || {};
endpoint.install.repos.releases.assets.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.releases.assets'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

endpoint.install.repos.hooks = endpoint.install.repos.hooks || {};
endpoint.install.repos.hooks.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['delete']['repos.hooks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.delete({account: arguments[0], path: url, params: arguments[size]});
	else return endpoint.install.delete({account: arguments[0], path: url});
};

