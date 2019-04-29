

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

endpoint.app = endpoint.app || {};


endpoint.app.notifications = endpoint.app.notifications || {};
endpoint.app.notifications.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['notifications'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos = endpoint.app.repos || {};
endpoint.app.repos.notifications = endpoint.app.repos.notifications || {};
endpoint.app.repos.notifications.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.notifications'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.notifications.threads = endpoint.app.notifications.threads || {};
endpoint.app.notifications.threads.subscription = endpoint.app.notifications.threads.subscription || {};
endpoint.app.notifications.threads.subscription.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['notifications.threads.subscription'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.user = endpoint.app.user || {};
endpoint.app.user.starred = endpoint.app.user.starred || {};
endpoint.app.user.starred.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['user.starred'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.subscription = endpoint.app.repos.subscription || {};
endpoint.app.repos.subscription.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.subscription'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.gists = endpoint.app.gists || {};
endpoint.app.gists.star = endpoint.app.gists.star || {};
endpoint.app.gists.star.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['gists.star'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.user.installations = endpoint.app.user.installations || {};
endpoint.app.user.installations.repositories = endpoint.app.user.installations.repositories || {};
endpoint.app.user.installations.repositories.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['user.installations.repositories'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.issues = endpoint.app.repos.issues || {};
endpoint.app.repos.issues.lock = endpoint.app.repos.issues.lock || {};
endpoint.app.repos.issues.lock.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.issues.lock'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.issues.labels = endpoint.app.repos.issues.labels || {};
endpoint.app.repos.issues.labels.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.issues.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.orgs = endpoint.app.orgs || {};
endpoint.app.orgs.public_members = endpoint.app.orgs.public_members || {};
endpoint.app.orgs.public_members.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['orgs.public_members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.orgs.memberships = endpoint.app.orgs.memberships || {};
endpoint.app.orgs.memberships.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['orgs.memberships'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.orgs.outside_collaborators = endpoint.app.orgs.outside_collaborators || {};
endpoint.app.orgs.outside_collaborators.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['orgs.outside_collaborators'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.teams = endpoint.app.teams || {};
endpoint.app.teams.members = endpoint.app.teams.members || {};
endpoint.app.teams.members.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['teams.members'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.teams.memberships = endpoint.app.teams.memberships || {};
endpoint.app.teams.memberships.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['teams.memberships'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.teams.repos = endpoint.app.teams.repos || {};
endpoint.app.teams.repos.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['teams.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.orgs.blocks = endpoint.app.orgs.blocks || {};
endpoint.app.orgs.blocks.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['orgs.blocks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.pulls = endpoint.app.repos.pulls || {};
endpoint.app.repos.pulls.merge = endpoint.app.repos.pulls.merge || {};
endpoint.app.repos.pulls.merge.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.pulls.merge'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.pulls.reviews = endpoint.app.repos.pulls.reviews || {};
endpoint.app.repos.pulls.reviews.dismissals = endpoint.app.repos.pulls.reviews.dismissals || {};
endpoint.app.repos.pulls.reviews.dismissals.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.pulls.reviews.dismissals'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.topics = endpoint.app.repos.topics || {};
endpoint.app.repos.topics.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.topics'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.branches = endpoint.app.repos.branches || {};
endpoint.app.repos.branches.protection = endpoint.app.repos.branches.protection || {};
endpoint.app.repos.branches.protection.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.branches.protection'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.branches.protection.required_status_checks = endpoint.app.repos.branches.protection.required_status_checks || {};
endpoint.app.repos.branches.protection.required_status_checks.contexts = endpoint.app.repos.branches.protection.required_status_checks.contexts || {};
endpoint.app.repos.branches.protection.required_status_checks.contexts.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.branches.protection.required_status_checks.contexts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.branches.protection.restrictions = endpoint.app.repos.branches.protection.restrictions || {};
endpoint.app.repos.branches.protection.restrictions.teams = endpoint.app.repos.branches.protection.restrictions.teams || {};
endpoint.app.repos.branches.protection.restrictions.teams.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.branches.protection.restrictions.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.branches.protection.restrictions.users = endpoint.app.repos.branches.protection.restrictions.users || {};
endpoint.app.repos.branches.protection.restrictions.users.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.branches.protection.restrictions.users'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.collaborators = endpoint.app.repos.collaborators || {};
endpoint.app.repos.collaborators.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.collaborators'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

endpoint.app.repos.contents = endpoint.app.repos.contents || {};
endpoint.app.repos.contents.put = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['put']['repos.contents'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.put({path: url, body: arguments[size]});
	else return endpoint.app.put(url);
};

