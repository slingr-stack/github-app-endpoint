

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

endpoint.install = endpoint.install || {};


endpoint.install.gists = endpoint.install.gists || {};
endpoint.install.gists.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['gists'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.gists.forks = endpoint.install.gists.forks || {};
endpoint.install.gists.forks.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['gists.forks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos = endpoint.install.repos || {};
endpoint.install.repos.git = endpoint.install.repos.git || {};
endpoint.install.repos.git.blobs = endpoint.install.repos.git.blobs || {};
endpoint.install.repos.git.blobs.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.blobs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.git.commits = endpoint.install.repos.git.commits || {};
endpoint.install.repos.git.commits.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.commits'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.git.refs = endpoint.install.repos.git.refs || {};
endpoint.install.repos.git.refs.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.refs'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.git.tags = endpoint.install.repos.git.tags || {};
endpoint.install.repos.git.tags.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.tags'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.git.trees = endpoint.install.repos.git.trees || {};
endpoint.install.repos.git.trees.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.git.trees'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.installations = endpoint.install.installations || {};
endpoint.install.installations.access_tokens = endpoint.install.installations.access_tokens || {};
endpoint.install.installations.access_tokens.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['installations.access_tokens'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.issues = endpoint.install.repos.issues || {};
endpoint.install.repos.issues.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.issues.assignees = endpoint.install.repos.issues.assignees || {};
endpoint.install.repos.issues.assignees.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.assignees'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.issues.comments = endpoint.install.repos.issues.comments || {};
endpoint.install.repos.issues.comments.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.labels = endpoint.install.repos.labels || {};
endpoint.install.repos.labels.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.issues.labels = endpoint.install.repos.issues.labels || {};
endpoint.install.repos.issues.labels.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.labels'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.milestones = endpoint.install.repos.milestones || {};
endpoint.install.repos.milestones.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.milestones'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.markdown = endpoint.install.markdown || {};
endpoint.install.markdown.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['markdown'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.markdown.raw = endpoint.install.markdown.raw || {};
endpoint.install.markdown.raw.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['markdown.raw'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.orgs = endpoint.install.orgs || {};
endpoint.install.orgs.teams = endpoint.install.orgs.teams || {};
endpoint.install.orgs.teams.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['orgs.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.orgs.hooks = endpoint.install.orgs.hooks || {};
endpoint.install.orgs.hooks.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['orgs.hooks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.orgs.hooks.pings = endpoint.install.orgs.hooks.pings || {};
endpoint.install.orgs.hooks.pings.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['orgs.hooks.pings'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.projects = endpoint.install.repos.projects || {};
endpoint.install.repos.projects.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.projects'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.orgs.projects = endpoint.install.orgs.projects || {};
endpoint.install.orgs.projects.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['orgs.projects'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.projects = endpoint.install.projects || {};
endpoint.install.projects.columns = endpoint.install.projects.columns || {};
endpoint.install.projects.columns.cards = endpoint.install.projects.columns.cards || {};
endpoint.install.projects.columns.cards.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['projects.columns.cards'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.projects.columns.cards.moves = endpoint.install.projects.columns.cards.moves || {};
endpoint.install.projects.columns.cards.moves.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['projects.columns.cards.moves'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.projects.columns.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['projects.columns'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.projects.columns.moves = endpoint.install.projects.columns.moves || {};
endpoint.install.projects.columns.moves.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['projects.columns.moves'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.pulls = endpoint.install.repos.pulls || {};
endpoint.install.repos.pulls.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.reviews = endpoint.install.repos.pulls.reviews || {};
endpoint.install.repos.pulls.reviews.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.reviews'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.reviews.events = endpoint.install.repos.pulls.reviews.events || {};
endpoint.install.repos.pulls.reviews.events.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.reviews.events'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.comments = endpoint.install.repos.pulls.comments || {};
endpoint.install.repos.pulls.comments.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.requested_reviewers = endpoint.install.repos.pulls.requested_reviewers || {};
endpoint.install.repos.pulls.requested_reviewers.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.requested_reviewers'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.comments = endpoint.install.repos.comments || {};
endpoint.install.repos.comments.reactions = endpoint.install.repos.comments.reactions || {};
endpoint.install.repos.comments.reactions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.comments.reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.issues.reactions = endpoint.install.repos.issues.reactions || {};
endpoint.install.repos.issues.reactions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.issues.comments.reactions = endpoint.install.repos.issues.comments.reactions || {};
endpoint.install.repos.issues.comments.reactions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.issues.comments.reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.pulls.comments.reactions = endpoint.install.repos.pulls.comments.reactions || {};
endpoint.install.repos.pulls.comments.reactions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pulls.comments.reactions'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.user = endpoint.install.user || {};
endpoint.install.user.repos = endpoint.install.user.repos || {};
endpoint.install.user.repos.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['user.repos'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.branches = endpoint.install.repos.branches || {};
endpoint.install.repos.branches.protection = endpoint.install.repos.branches.protection || {};
endpoint.install.repos.branches.protection.required_status_checks = endpoint.install.repos.branches.protection.required_status_checks || {};
endpoint.install.repos.branches.protection.required_status_checks.contexts = endpoint.install.repos.branches.protection.required_status_checks.contexts || {};
endpoint.install.repos.branches.protection.required_status_checks.contexts.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.branches.protection.required_status_checks.contexts'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.enforce_admins = endpoint.install.repos.branches.protection.enforce_admins || {};
endpoint.install.repos.branches.protection.enforce_admins.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.branches.protection.enforce_admins'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions = endpoint.install.repos.branches.protection.restrictions || {};
endpoint.install.repos.branches.protection.restrictions.teams = endpoint.install.repos.branches.protection.restrictions.teams || {};
endpoint.install.repos.branches.protection.restrictions.teams.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.branches.protection.restrictions.teams'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.branches.protection.restrictions.users = endpoint.install.repos.branches.protection.restrictions.users || {};
endpoint.install.repos.branches.protection.restrictions.users.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.branches.protection.restrictions.users'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.commits = endpoint.install.repos.commits || {};
endpoint.install.repos.commits.comments = endpoint.install.repos.commits.comments || {};
endpoint.install.repos.commits.comments.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.commits.comments'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.keys = endpoint.install.repos.keys || {};
endpoint.install.repos.keys.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.keys'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.merges = endpoint.install.repos.merges || {};
endpoint.install.repos.merges.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.merges'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.pages = endpoint.install.repos.pages || {};
endpoint.install.repos.pages.builds = endpoint.install.repos.pages.builds || {};
endpoint.install.repos.pages.builds.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.pages.builds'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.releases = endpoint.install.repos.releases || {};
endpoint.install.repos.releases.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.releases'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.statuses = endpoint.install.repos.statuses || {};
endpoint.install.repos.statuses.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.statuses'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.hooks = endpoint.install.repos.hooks || {};
endpoint.install.repos.hooks.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.hooks'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.hooks.tests = endpoint.install.repos.hooks.tests || {};
endpoint.install.repos.hooks.tests.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.hooks.tests'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

endpoint.install.repos.hooks.pings = endpoint.install.repos.hooks.pings || {};
endpoint.install.repos.hooks.pings.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	var hasParams = size > 0 && (typeof arguments[size - 1] == "object"); if (hasParams) size--;
	var url = parse(urlsData['post']['repos.hooks.pings'][size-1], Array.prototype.slice.call(arguments, 1, size));
	if (hasParams) return endpoint.install.post({account: arguments[0], path: url, body: arguments[size]});
	else return endpoint.install.post({account: arguments[0], path: url});
};

