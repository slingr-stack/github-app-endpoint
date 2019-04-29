

var urlsData = {
	"get": {},
	"post": {
		"gists": {
			"0": "/gists"
		},
		"gists.forks": {
			"1": "/gists/:id/forks"
		},
		"repos.git.blobs": {
			"2": "/repos/:owner/:repo/git/blobs"
		},
		"repos.git.commits": {
			"2": "/repos/:owner/:repo/git/commits"
		},
		"repos.git.refs": {
			"2": "/repos/:owner/:repo/git/refs"
		},
		"repos.git.tags": {
			"2": "/repos/:owner/:repo/git/tags"
		},
		"repos.git.trees": {
			"2": "/repos/:owner/:repo/git/trees"
		},
		"installations.access_tokens": {
			"1": "/installations/:installation_id/access_tokens"
		},
		"repos.issues": {
			"2": "/repos/:owner/:repo/issues"
		},
		"repos.issues.assignees": {
			"3": "/repos/:owner/:repo/issues/:number/assignees"
		},
		"repos.issues.comments": {
			"3": "/repos/:owner/:repo/issues/:number/comments"
		},
		"repos.labels": {
			"2": "/repos/:owner/:repo/labels"
		},
		"repos.issues.labels": {
			"3": "/repos/:owner/:repo/issues/:number/labels"
		},
		"repos.milestones": {
			"2": "/repos/:owner/:repo/milestones"
		},
		"markdown": {
			"0": "/markdown"
		},
		"markdown.raw": {
			"0": "/markdown/raw"
		},
		"orgs.teams": {
			"1": "/orgs/:org/teams"
		},
		"orgs.hooks": {
			"1": "/orgs/:org/hooks"
		},
		"orgs.hooks.pings": {
			"2": "/orgs/:org/hooks/:id/pings"
		},
		"repos.projects": {
			"2": "/repos/:owner/:repo/projects"
		},
		"orgs.projects": {
			"1": "/orgs/:org/projects"
		},
		"projects.columns.cards": {
			"1": "/projects/columns/:column_id/cards"
		},
		"projects.columns.cards.moves": {
			"1": "/projects/columns/cards/:id/moves"
		},
		"projects.columns": {
			"1": "/projects/:project_id/columns"
		},
		"projects.columns.moves": {
			"1": "/projects/columns/:id/moves"
		},
		"repos.pulls": {
			"2": "/repos/:owner/:repo/pulls"
		},
		"repos.pulls.reviews": {
			"3": "/repos/:owner/:repo/pulls/:number/reviews"
		},
		"repos.pulls.reviews.events": {
			"4": "/repos/:owner/:repo/pulls/:number/reviews/:id/events"
		},
		"repos.pulls.comments": {
			"3": "/repos/:owner/:repo/pulls/:number/comments"
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
		"repos.branches.protection.required_status_checks.contexts": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"
		},
		"repos.branches.protection.enforce_admins": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins"
		},
		"repos.branches.protection.restrictions.teams": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams"
		},
		"repos.branches.protection.restrictions.users": {
			"3": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users"
		},
		"repos.commits.comments": {
			"3": "/repos/:owner/:repo/commits/:sha/comments"
		},
		"repos.keys": {
			"2": "/repos/:owner/:repo/keys"
		},
		"repos.merges": {
			"2": "/repos/:owner/:repo/merges"
		},
		"repos.pages.builds": {
			"2": "/repos/:owner/:repo/pages/builds"
		},
		"repos.releases": {
			"2": "/repos/:owner/:repo/releases"
		},
		"repos.statuses": {
			"3": "/repos/:owner/:repo/statuses/:sha"
		},
		"repos.hooks": {
			"2": "/repos/:owner/:repo/hooks"
		},
		"repos.hooks.tests": {
			"3": "/repos/:owner/:repo/hooks/:id/tests"
		},
		"repos.hooks.pings": {
			"3": "/repos/:owner/:repo/hooks/:id/pings"
		}
	},
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


endpoint.app.gists = endpoint.app.gists || {};
endpoint.app.gists.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['gists'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.gists.forks = endpoint.app.gists.forks || {};
endpoint.app.gists.forks.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['gists.forks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos = endpoint.app.repos || {};
endpoint.app.repos.git = endpoint.app.repos.git || {};
endpoint.app.repos.git.blobs = endpoint.app.repos.git.blobs || {};
endpoint.app.repos.git.blobs.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.blobs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.git.commits = endpoint.app.repos.git.commits || {};
endpoint.app.repos.git.commits.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.commits'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.git.refs = endpoint.app.repos.git.refs || {};
endpoint.app.repos.git.refs.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.refs'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.git.tags = endpoint.app.repos.git.tags || {};
endpoint.app.repos.git.tags.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.tags'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.git.trees = endpoint.app.repos.git.trees || {};
endpoint.app.repos.git.trees.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.trees'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.installations = endpoint.app.installations || {};
endpoint.app.installations.access_tokens = endpoint.app.installations.access_tokens || {};
endpoint.app.installations.access_tokens.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['installations.access_tokens'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.issues = endpoint.app.repos.issues || {};
endpoint.app.repos.issues.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.issues.assignees = endpoint.app.repos.issues.assignees || {};
endpoint.app.repos.issues.assignees.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.assignees'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.issues.comments = endpoint.app.repos.issues.comments || {};
endpoint.app.repos.issues.comments.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.labels = endpoint.app.repos.labels || {};
endpoint.app.repos.labels.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.issues.labels = endpoint.app.repos.issues.labels || {};
endpoint.app.repos.issues.labels.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.labels'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.milestones = endpoint.app.repos.milestones || {};
endpoint.app.repos.milestones.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.milestones'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.markdown = endpoint.app.markdown || {};
endpoint.app.markdown.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['markdown'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.markdown.raw = endpoint.app.markdown.raw || {};
endpoint.app.markdown.raw.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['markdown.raw'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.orgs = endpoint.app.orgs || {};
endpoint.app.orgs.teams = endpoint.app.orgs.teams || {};
endpoint.app.orgs.teams.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['orgs.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.orgs.hooks = endpoint.app.orgs.hooks || {};
endpoint.app.orgs.hooks.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['orgs.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.orgs.hooks.pings = endpoint.app.orgs.hooks.pings || {};
endpoint.app.orgs.hooks.pings.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['orgs.hooks.pings'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.projects = endpoint.app.repos.projects || {};
endpoint.app.repos.projects.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.orgs.projects = endpoint.app.orgs.projects || {};
endpoint.app.orgs.projects.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['orgs.projects'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.projects = endpoint.app.projects || {};
endpoint.app.projects.columns = endpoint.app.projects.columns || {};
endpoint.app.projects.columns.cards = endpoint.app.projects.columns.cards || {};
endpoint.app.projects.columns.cards.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['projects.columns.cards'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.projects.columns.cards.moves = endpoint.app.projects.columns.cards.moves || {};
endpoint.app.projects.columns.cards.moves.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['projects.columns.cards.moves'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.projects.columns.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['projects.columns'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.projects.columns.moves = endpoint.app.projects.columns.moves || {};
endpoint.app.projects.columns.moves.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['projects.columns.moves'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.pulls = endpoint.app.repos.pulls || {};
endpoint.app.repos.pulls.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.pulls.reviews = endpoint.app.repos.pulls.reviews || {};
endpoint.app.repos.pulls.reviews.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.reviews'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.pulls.reviews.events = endpoint.app.repos.pulls.reviews.events || {};
endpoint.app.repos.pulls.reviews.events.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.reviews.events'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.pulls.comments = endpoint.app.repos.pulls.comments || {};
endpoint.app.repos.pulls.comments.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.pulls.requested_reviewers = endpoint.app.repos.pulls.requested_reviewers || {};
endpoint.app.repos.pulls.requested_reviewers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.requested_reviewers'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.comments = endpoint.app.repos.comments || {};
endpoint.app.repos.comments.reactions = endpoint.app.repos.comments.reactions || {};
endpoint.app.repos.comments.reactions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.issues.reactions = endpoint.app.repos.issues.reactions || {};
endpoint.app.repos.issues.reactions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.issues.comments.reactions = endpoint.app.repos.issues.comments.reactions || {};
endpoint.app.repos.issues.comments.reactions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.pulls.comments.reactions = endpoint.app.repos.pulls.comments.reactions || {};
endpoint.app.repos.pulls.comments.reactions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.comments.reactions'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.user = endpoint.app.user || {};
endpoint.app.user.repos = endpoint.app.user.repos || {};
endpoint.app.user.repos.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['user.repos'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.branches = endpoint.app.repos.branches || {};
endpoint.app.repos.branches.protection = endpoint.app.repos.branches.protection || {};
endpoint.app.repos.branches.protection.required_status_checks = endpoint.app.repos.branches.protection.required_status_checks || {};
endpoint.app.repos.branches.protection.required_status_checks.contexts = endpoint.app.repos.branches.protection.required_status_checks.contexts || {};
endpoint.app.repos.branches.protection.required_status_checks.contexts.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.branches.protection.required_status_checks.contexts'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.branches.protection.enforce_admins = endpoint.app.repos.branches.protection.enforce_admins || {};
endpoint.app.repos.branches.protection.enforce_admins.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.branches.protection.enforce_admins'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.branches.protection.restrictions = endpoint.app.repos.branches.protection.restrictions || {};
endpoint.app.repos.branches.protection.restrictions.teams = endpoint.app.repos.branches.protection.restrictions.teams || {};
endpoint.app.repos.branches.protection.restrictions.teams.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.branches.protection.restrictions.teams'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.branches.protection.restrictions.users = endpoint.app.repos.branches.protection.restrictions.users || {};
endpoint.app.repos.branches.protection.restrictions.users.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.branches.protection.restrictions.users'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.commits = endpoint.app.repos.commits || {};
endpoint.app.repos.commits.comments = endpoint.app.repos.commits.comments || {};
endpoint.app.repos.commits.comments.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.commits.comments'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.keys = endpoint.app.repos.keys || {};
endpoint.app.repos.keys.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.keys'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.merges = endpoint.app.repos.merges || {};
endpoint.app.repos.merges.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.merges'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.pages = endpoint.app.repos.pages || {};
endpoint.app.repos.pages.builds = endpoint.app.repos.pages.builds || {};
endpoint.app.repos.pages.builds.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pages.builds'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.releases = endpoint.app.repos.releases || {};
endpoint.app.repos.releases.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.releases'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.statuses = endpoint.app.repos.statuses || {};
endpoint.app.repos.statuses.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.statuses'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.hooks = endpoint.app.repos.hooks || {};
endpoint.app.repos.hooks.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.hooks'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.hooks.tests = endpoint.app.repos.hooks.tests || {};
endpoint.app.repos.hooks.tests.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.hooks.tests'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

endpoint.app.repos.hooks.pings = endpoint.app.repos.hooks.pings || {};
endpoint.app.repos.hooks.pings.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.hooks.pings'][size], Array.prototype.slice.call(arguments, 0, size));
	if (hasParams) return endpoint.app.post({path: url, body: arguments[size]});
	else return endpoint.app.post(url);
};

