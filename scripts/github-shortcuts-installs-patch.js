

var urlsData = {
	"get": {},
	"post": {},
	"put": {},
	"patch": {
		"notifications.threads": {
			"1": "/notifications/threads/:id"
		},
		"gists": {
			"1": "/gists/:id"
		},
		"repos.git.refs": {
			"3": "/repos/:owner/:repo/git/refs/:ref"
		},
		"repos.issues": {
			"3": "/repos/:owner/:repo/issues/:number"
		},
		"repos.issues.comments": {
			"3": "/repos/:owner/:repo/issues/comments/:id"
		},
		"repos.labels": {
			"3": "/repos/:owner/:repo/labels/:name"
		},
		"repos.milestones": {
			"3": "/repos/:owner/:repo/milestones/:number"
		},
		"orgs": {
			"1": "/orgs/:org"
		},
		"user.memberships.orgs": {
			"1": "/user/memberships/orgs/:org"
		},
		"teams": {
			"1": "/teams/:id"
		},
		"orgs.hooks": {
			"2": "/orgs/:org/hooks/:id"
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
			"3": "/repos/:owner/:repo/pulls/:number"
		},
		"repos.pulls.comments": {
			"3": "/repos/:owner/:repo/pulls/comments/:id"
		},
		"repos": {
			"2": "/repos/:owner/:repo"
		},
		"repos.branches.protection.required_status_checks": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks"
		},
		"repos.branches.protection.required_pull_request_reviews": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"
		},
		"repos.comments": {
			"3": "/repos/:owner/:repo/comments/:id"
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
	},
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
endpoint.install.notifications.threads = endpoint.install.notifications.threads || {};
endpoint.install.notifications.threads.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['notifications.threads'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.gists = endpoint.install.gists || {};
endpoint.install.gists.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['gists'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos = endpoint.install.repos || {};
endpoint.install.repos.git = endpoint.install.repos.git || {};
endpoint.install.repos.git.refs = endpoint.install.repos.git.refs || {};
endpoint.install.repos.git.refs.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.git.refs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.issues = endpoint.install.repos.issues || {};
endpoint.install.repos.issues.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.issues'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.issues.comments = endpoint.install.repos.issues.comments || {};
endpoint.install.repos.issues.comments.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.issues.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.labels = endpoint.install.repos.labels || {};
endpoint.install.repos.labels.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.milestones = endpoint.install.repos.milestones || {};
endpoint.install.repos.milestones.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.milestones'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.orgs = endpoint.install.orgs || {};
endpoint.install.orgs.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['orgs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.user = endpoint.install.user || {};
endpoint.install.user.memberships = endpoint.install.user.memberships || {};
endpoint.install.user.memberships.orgs = endpoint.install.user.memberships.orgs || {};
endpoint.install.user.memberships.orgs.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['user.memberships.orgs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.teams = endpoint.install.teams || {};
endpoint.install.teams.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.orgs.hooks = endpoint.install.orgs.hooks || {};
endpoint.install.orgs.hooks.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['orgs.hooks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.projects = endpoint.install.projects || {};
endpoint.install.projects.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['projects'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.projects.columns = endpoint.install.projects.columns || {};
endpoint.install.projects.columns.cards = endpoint.install.projects.columns.cards || {};
endpoint.install.projects.columns.cards.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['projects.columns.cards'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.projects.columns.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['projects.columns'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.pulls = endpoint.install.repos.pulls || {};
endpoint.install.repos.pulls.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.pulls'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.comments = endpoint.install.repos.pulls.comments || {};
endpoint.install.repos.pulls.comments.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.pulls.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.branches = endpoint.install.repos.branches || {};
endpoint.install.repos.branches.protection = endpoint.install.repos.branches.protection || {};
endpoint.install.repos.branches.protection.required_status_checks = endpoint.install.repos.branches.protection.required_status_checks || {};
endpoint.install.repos.branches.protection.required_status_checks.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.branches.protection.required_status_checks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.required_pull_request_reviews = endpoint.install.repos.branches.protection.required_pull_request_reviews || {};
endpoint.install.repos.branches.protection.required_pull_request_reviews.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.branches.protection.required_pull_request_reviews'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.comments = endpoint.install.repos.comments || {};
endpoint.install.repos.comments.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.invitations = endpoint.install.repos.invitations || {};
endpoint.install.repos.invitations.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.invitations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.user.repository_invitations = endpoint.install.user.repository_invitations || {};
endpoint.install.user.repository_invitations.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['user.repository_invitations'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.releases = endpoint.install.repos.releases || {};
endpoint.install.repos.releases.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.releases'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.releases.assets = endpoint.install.repos.releases.assets || {};
endpoint.install.repos.releases.assets.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.releases.assets'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

endpoint.install.repos.hooks = endpoint.install.repos.hooks || {};
endpoint.install.repos.hooks.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.hooks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.patch({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.patch({account: arguments[0], path: url});
};

