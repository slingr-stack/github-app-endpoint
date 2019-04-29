

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

endpoint.user = endpoint.user || {};


endpoint.user.notifications = endpoint.user.notifications || {};
endpoint.user.notifications.threads = endpoint.user.notifications.threads || {};
endpoint.user.notifications.threads.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['notifications.threads'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.gists = endpoint.user.gists || {};
endpoint.user.gists.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['gists'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos = endpoint.user.repos || {};
endpoint.user.repos.git = endpoint.user.repos.git || {};
endpoint.user.repos.git.refs = endpoint.user.repos.git.refs || {};
endpoint.user.repos.git.refs.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.git.refs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.issues = endpoint.user.repos.issues || {};
endpoint.user.repos.issues.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.issues.comments = endpoint.user.repos.issues.comments || {};
endpoint.user.repos.issues.comments.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.issues.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.labels = endpoint.user.repos.labels || {};
endpoint.user.repos.labels.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.milestones = endpoint.user.repos.milestones || {};
endpoint.user.repos.milestones.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.milestones'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.orgs = endpoint.user.orgs || {};
endpoint.user.orgs.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.user = endpoint.user.user || {};
endpoint.user.user.memberships = endpoint.user.user.memberships || {};
endpoint.user.user.memberships.orgs = endpoint.user.user.memberships.orgs || {};
endpoint.user.user.memberships.orgs.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['user.memberships.orgs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.teams = endpoint.user.teams || {};
endpoint.user.teams.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.orgs.hooks = endpoint.user.orgs.hooks || {};
endpoint.user.orgs.hooks.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['orgs.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.projects = endpoint.user.projects || {};
endpoint.user.projects.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.projects.columns = endpoint.user.projects.columns || {};
endpoint.user.projects.columns.cards = endpoint.user.projects.columns.cards || {};
endpoint.user.projects.columns.cards.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['projects.columns.cards'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.projects.columns.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['projects.columns'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.pulls = endpoint.user.repos.pulls || {};
endpoint.user.repos.pulls.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.pulls'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.pulls.comments = endpoint.user.repos.pulls.comments || {};
endpoint.user.repos.pulls.comments.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.pulls.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.branches = endpoint.user.repos.branches || {};
endpoint.user.repos.branches.protection = endpoint.user.repos.branches.protection || {};
endpoint.user.repos.branches.protection.required_status_checks = endpoint.user.repos.branches.protection.required_status_checks || {};
endpoint.user.repos.branches.protection.required_status_checks.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.branches.protection.required_status_checks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.branches.protection.required_pull_request_reviews = endpoint.user.repos.branches.protection.required_pull_request_reviews || {};
endpoint.user.repos.branches.protection.required_pull_request_reviews.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.branches.protection.required_pull_request_reviews'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.comments = endpoint.user.repos.comments || {};
endpoint.user.repos.comments.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.invitations = endpoint.user.repos.invitations || {};
endpoint.user.repos.invitations.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.user.repository_invitations = endpoint.user.user.repository_invitations || {};
endpoint.user.user.repository_invitations.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['user.repository_invitations'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.releases = endpoint.user.repos.releases || {};
endpoint.user.repos.releases.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.releases'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.releases.assets = endpoint.user.repos.releases.assets || {};
endpoint.user.repos.releases.assets.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.releases.assets'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

endpoint.user.repos.hooks = endpoint.user.repos.hooks || {};
endpoint.user.repos.hooks.patch = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['patch']['repos.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.user.patch({path: url, body: arguments[size]});
	else return endpoint.user.patch(url);
};

