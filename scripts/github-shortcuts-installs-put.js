

var urlsData = {
	"get": {},
	"post": {},
	"put": {
		"notifications": {
			"0": "/notifications"
		},
		"repos.notifications": {
			"2": "/repos/:owner/:repo/notifications"
		},
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
		"user.installations.repositories": {
			"2": "/user/installations/:installation_id/repositories/:repository_id"
		},
		"repos.issues.lock": {
			"3": "/repos/:owner/:repo/issues/:number/lock"
		},
		"repos.issues.labels": {
			"3": "/repos/:owner/:repo/issues/:number/labels"
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
		"teams.members": {
			"2": "/teams/:id/members/:username"
		},
		"teams.memberships": {
			"2": "/teams/:id/memberships/:username"
		},
		"teams.repos": {
			"3": "/teams/:id/repos/:org/:repo"
		},
		"orgs.blocks": {
			"2": "/orgs/:org/blocks/:username"
		},
		"repos.pulls.merge": {
			"3": "/repos/:owner/:repo/pulls/:number/merge"
		},
		"repos.pulls.reviews.dismissals": {
			"4": "/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals"
		},
		"repos.topics": {
			"2": "/repos/:owner/:repo/topics"
		},
		"repos.branches.protection": {
			"3": "/repos/:owner/:repo/branches/:branch/protection"
		},
		"repos.branches.protection.required_status_checks.contexts": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
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
		"repos.contents": {
			"3": "/repos/:owner/:repo/contents/:path"
		}
	},
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


endpoint.install.notifications = endpoint.install.notifications || {};
endpoint.install.notifications.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['notifications'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos = endpoint.install.repos || {};
endpoint.install.repos.notifications = endpoint.install.repos.notifications || {};
endpoint.install.repos.notifications.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.notifications'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.notifications.threads = endpoint.install.notifications.threads || {};
endpoint.install.notifications.threads.subscription = endpoint.install.notifications.threads.subscription || {};
endpoint.install.notifications.threads.subscription.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['notifications.threads.subscription'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.user = endpoint.install.user || {};
endpoint.install.user.starred = endpoint.install.user.starred || {};
endpoint.install.user.starred.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['user.starred'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.subscription = endpoint.install.repos.subscription || {};
endpoint.install.repos.subscription.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.subscription'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.gists = endpoint.install.gists || {};
endpoint.install.gists.star = endpoint.install.gists.star || {};
endpoint.install.gists.star.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['gists.star'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.user.installations = endpoint.install.user.installations || {};
endpoint.install.user.installations.repositories = endpoint.install.user.installations.repositories || {};
endpoint.install.user.installations.repositories.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['user.installations.repositories'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.issues = endpoint.install.repos.issues || {};
endpoint.install.repos.issues.lock = endpoint.install.repos.issues.lock || {};
endpoint.install.repos.issues.lock.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.issues.lock'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.issues.labels = endpoint.install.repos.issues.labels || {};
endpoint.install.repos.issues.labels.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.issues.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.orgs = endpoint.install.orgs || {};
endpoint.install.orgs.public_members = endpoint.install.orgs.public_members || {};
endpoint.install.orgs.public_members.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['orgs.public_members'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.orgs.memberships = endpoint.install.orgs.memberships || {};
endpoint.install.orgs.memberships.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['orgs.memberships'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.orgs.outside_collaborators = endpoint.install.orgs.outside_collaborators || {};
endpoint.install.orgs.outside_collaborators.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['orgs.outside_collaborators'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.teams = endpoint.install.teams || {};
endpoint.install.teams.members = endpoint.install.teams.members || {};
endpoint.install.teams.members.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['teams.members'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.teams.memberships = endpoint.install.teams.memberships || {};
endpoint.install.teams.memberships.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['teams.memberships'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.teams.repos = endpoint.install.teams.repos || {};
endpoint.install.teams.repos.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['teams.repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.orgs.blocks = endpoint.install.orgs.blocks || {};
endpoint.install.orgs.blocks.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['orgs.blocks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.pulls = endpoint.install.repos.pulls || {};
endpoint.install.repos.pulls.merge = endpoint.install.repos.pulls.merge || {};
endpoint.install.repos.pulls.merge.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.pulls.merge'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.reviews = endpoint.install.repos.pulls.reviews || {};
endpoint.install.repos.pulls.reviews.dismissals = endpoint.install.repos.pulls.reviews.dismissals || {};
endpoint.install.repos.pulls.reviews.dismissals.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.pulls.reviews.dismissals'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.topics = endpoint.install.repos.topics || {};
endpoint.install.repos.topics.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.topics'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.branches = endpoint.install.repos.branches || {};
endpoint.install.repos.branches.protection = endpoint.install.repos.branches.protection || {};
endpoint.install.repos.branches.protection.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.branches.protection'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.required_status_checks = endpoint.install.repos.branches.protection.required_status_checks || {};
endpoint.install.repos.branches.protection.required_status_checks.contexts = endpoint.install.repos.branches.protection.required_status_checks.contexts || {};
endpoint.install.repos.branches.protection.required_status_checks.contexts.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.branches.protection.required_status_checks.contexts'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions = endpoint.install.repos.branches.protection.restrictions || {};
endpoint.install.repos.branches.protection.restrictions.teams = endpoint.install.repos.branches.protection.restrictions.teams || {};
endpoint.install.repos.branches.protection.restrictions.teams.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.branches.protection.restrictions.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions.users = endpoint.install.repos.branches.protection.restrictions.users || {};
endpoint.install.repos.branches.protection.restrictions.users.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.branches.protection.restrictions.users'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.collaborators = endpoint.install.repos.collaborators || {};
endpoint.install.repos.collaborators.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.collaborators'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

endpoint.install.repos.contents = endpoint.install.repos.contents || {};
endpoint.install.repos.contents.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.contents'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.put({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.put({account: arguments[0], path: url});
};

