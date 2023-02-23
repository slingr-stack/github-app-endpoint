////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.events = {};

endpoint.repos = {};

endpoint.repos.events = {};

endpoint.repos.issues = {};

endpoint.repos.issues.events = {};

endpoint.networks = {};

endpoint.networks.events = {};

endpoint.orgs = {};

endpoint.orgs.events = {};

endpoint.users = {};

endpoint.users.receivedEvents = {};

endpoint.users.events = {};

endpoint.users.events.public = {};

endpoint.users.events.orgs = {};

endpoint.feeds = {};

endpoint.notifications = {};

endpoint.repos.notifications = {};

endpoint.notifications.threads = {};

endpoint.notifications.threads.subscription = {};

endpoint.repos.stargazers = {};

endpoint.users.starred = {};

endpoint.user = {};

endpoint.user.starred = {};

endpoint.repos.subscribers = {};

endpoint.users.subscriptions = {};

endpoint.user.subscriptions = {};

endpoint.repos.subscription = {};

endpoint.users.gists = {};

endpoint.gists = {};

endpoint.gists.public = {};

endpoint.gists.starred = {};

endpoint.gists.commits = {};

endpoint.gists.star = {};

endpoint.gists.forks = {};

endpoint.repos.git = {};

endpoint.repos.git.blobs = {};

endpoint.repos.git.commits = {};

endpoint.repos.git.refs = {};

endpoint.repos.git.tags = {};

endpoint.repos.git.trees = {};

endpoint.apps = {};

endpoint.app = {};

endpoint.app.installations = {};

endpoint.user.installations = {};

endpoint.installation = {};

endpoint.installation.repositories = {};

endpoint.user.installations.repositories = {};

endpoint.marketplaceListing = {};

endpoint.marketplaceListing.plans = {};

endpoint.marketplaceListing.plans.accounts = {};

endpoint.marketplaceListing.accounts = {};

endpoint.user.marketplacePurchases = {};

endpoint.issues = {};

endpoint.user.issues = {};

endpoint.orgs.issues = {};

endpoint.repos.assignees = {};

endpoint.repos.issues.comments = {};

endpoint.repos.labels = {};

endpoint.repos.issues.labels = {};

endpoint.repos.milestones = {};

endpoint.repos.milestones.labels = {};

endpoint.repos.issues.timeline = {};

endpoint.codesOfConduct = {};

endpoint.repos.community = {};

endpoint.repos.community.codeOfConduct = {};

endpoint.emojis = {};

endpoint.gitignore = {};

endpoint.gitignore.templates = {};

endpoint.licenses = {};

endpoint.repos.license = {};

endpoint.meta = {};

endpoint.rateLimit = {};

endpoint.user.orgs = {};

endpoint.organizations = {};

endpoint.users.orgs = {};

endpoint.orgs.members = {};

endpoint.orgs.publicMembers = {};

endpoint.orgs.memberships = {};

endpoint.orgs.invitations = {};

endpoint.user.memberships = {};

endpoint.user.memberships.orgs = {};

endpoint.orgs.outsideCollaborators = {};

endpoint.orgs.teams = {};

endpoint.teams = {};

endpoint.teams.teams = {};

endpoint.teams.members = {};

endpoint.teams.memberships = {};

endpoint.teams.invitations = {};

endpoint.teams.repos = {};

endpoint.user.teams = {};

endpoint.orgs.hooks = {};

endpoint.orgs.blocks = {};

endpoint.repos.projects = {};

endpoint.orgs.projects = {};

endpoint.projects = {};

endpoint.projects.columns = {};

endpoint.projects.columns.cards = {};

endpoint.repos.pulls = {};

endpoint.repos.pulls.commits = {};

endpoint.repos.pulls.files = {};

endpoint.repos.pulls.merge = {};

endpoint.repos.pulls.reviews = {};

endpoint.repos.pulls.reviews.comments = {};

endpoint.repos.pulls.comments = {};

endpoint.repos.pulls.requestedReviewers = {};

endpoint.repos.comments = {};

endpoint.repos.comments.reactions = {};

endpoint.repos.issues.reactions = {};

endpoint.repos.issues.comments.reactions = {};

endpoint.repos.pulls.comments.reactions = {};

endpoint.user.repos = {};

endpoint.users.repos = {};

endpoint.orgs.repos = {};

endpoint.repositories = {};

endpoint.repos.topics = {};

endpoint.repos.contributors = {};

endpoint.repos.languages = {};

endpoint.repos.teams = {};

endpoint.repos.tags = {};

endpoint.repos.branches = {};

endpoint.repos.branches.protection = {};

endpoint.repos.branches.protection.requiredStatusChecks = {};

endpoint.repos.branches.protection.requiredStatusChecks.contexts = {};

endpoint.repos.branches.protection.requiredPullRequestReviews = {};

endpoint.repos.branches.protection.enforceAdmins = {};

endpoint.repos.branches.protection.restrictions = {};

endpoint.repos.branches.protection.restrictions.teams = {};

endpoint.repos.branches.protection.restrictions.users = {};

endpoint.repos.collaborators = {};

endpoint.repos.collaborators.permission = {};

endpoint.repos.commits = {};

endpoint.repos.commits.comments = {};

endpoint.repos.community.profile = {};

endpoint.repos.compare = {};

endpoint.repos.readme = {};

endpoint.repos.contents = {};

endpoint.repos.keys = {};

endpoint.repos.deployments = {};

endpoint.repos.deployments.statuses = {};

endpoint.repos.downloads = {};

endpoint.repos.forks = {};

endpoint.repos.invitations = {};

endpoint.user.repositoryInvitations = {};

endpoint.repos.pages = {};

endpoint.repos.pages.builds = {};

endpoint.repos.pages.builds.latest = {};

endpoint.repos.releases = {};

endpoint.repos.releases.latest = {};

endpoint.repos.releases.tags = {};

endpoint.repos.releases.assets = {};

endpoint.repos.stats = {};

endpoint.repos.stats.contributors = {};

endpoint.repos.stats.commitActivity = {};

endpoint.repos.stats.codeFrequency = {};

endpoint.repos.stats.participation = {};

endpoint.repos.stats.punchCard = {};

endpoint.repos.commits.statuses = {};

endpoint.repos.commits.status = {};

endpoint.repos.traffic = {};

endpoint.repos.traffic.popular = {};

endpoint.repos.traffic.popular.referrers = {};

endpoint.repos.traffic.popular.paths = {};

endpoint.repos.traffic.views = {};

endpoint.repos.traffic.clones = {};

endpoint.repos.hooks = {};

endpoint.search = {};

endpoint.search.repositories = {};

endpoint.search.commits = {};

endpoint.search.code = {};

endpoint.search.issues = {};

endpoint.search.users = {};

endpoint.installations = {};

endpoint.installations.accessTokens = {};

endpoint.repos.issues.assignees = {};

endpoint.markdown = {};

endpoint.markdown.raw = {};

endpoint.orgs.hooks.pings = {};

endpoint.projects.columns.cards.moves = {};

endpoint.projects.columns.moves = {};

endpoint.repos.pulls.reviews.events = {};

endpoint.repos.merges = {};

endpoint.repos.statuses = {};

endpoint.repos.hooks.tests = {};

endpoint.repos.hooks.pings = {};

endpoint.repos.issues.lock = {};

endpoint.reactions = {};

endpoint.repos.pulls.reviews.dismissals = {};

endpoint.syncInstallations = {};

endpoint.utils = {};

endpoint.utils.formatTimestamp = {};

endpoint.utils.parseTimestamp = {};

endpoint.events.get = function(httpOptions) {
    var url = parse('/events');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.events.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/events', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.issues.events.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-4){
        case 0:
            url = parse('/repos/:owner/:repo/issues/events', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/issues/:issue_number/events', [owner, repo, issueNumber]);
            break;
        case 2:
            url = parse('/repos/:owner/:repo/issues/events', [owner, repo]);
            break;
        case 3:
            url = parse('/repos/:owner/:repo/issues/events/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.networks.events.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/networks/:owner/:repo/events', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.events.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/events', [org]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.receivedEvents.get = function(username, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/users/:username/received_events', [username]);
            break;
        case 1:
            url = parse('/users/:username/received_events', [username]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.events.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/events', [username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.events.public.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/events/public', [username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.events.orgs.get = function(username, org, httpOptions) {
    if (!username || !org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username,org].');
        return;
    }
    var url = parse('/users/:username/events/orgs/:org', [username, org]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.feeds.get = function(httpOptions) {
    var url = parse('/feeds');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.notifications.get = function(httpOptions) {
    var url = parse('/notifications');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.notifications.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/notifications', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.notifications.threads.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.notifications.threads.subscription.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id/subscription', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.stargazers.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stargazers', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.starred.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/starred', [username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.starred.get = function(owner, repo, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/user/starred');
            break;
        case 1:
            url = parse('/user/starred/:owner/:repo', [owner, repo]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.subscribers.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/subscribers', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.subscriptions.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/subscriptions', [username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.subscriptions.get = function(httpOptions) {
    var url = parse('/user/subscriptions');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.subscription.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/subscription', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.gists.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/gists', [username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.gists.get = function(id, sha, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-3){
        case 0:
            url = parse('/gists');
            break;
        case 1:
            url = parse('/gists/:id', [id]);
            break;
        case 2:
            url = parse('/gists/:id/:sha', [id, sha]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.gists.public.get = function(httpOptions) {
    var url = parse('/gists/public');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.gists.starred.get = function(httpOptions) {
    var url = parse('/gists/starred');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.gists.commits.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/commits', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.gists.star.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/star', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.gists.forks.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/forks', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.git.blobs.get = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/blobs/:sha', [owner, repo, sha]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.git.commits.get = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/commits/:sha', [owner, repo, sha]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.git.refs.get = function(owner, repo, ref, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/git/refs/:ref', [owner, repo, ref]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/git/refs', [owner, repo]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.git.tags.get = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/tags/:sha', [owner, repo, sha]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.git.trees.get = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/trees/:sha', [owner, repo, sha]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.apps.get = function(appSlug, httpOptions) {
    if (!appSlug) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [appSlug].');
        return;
    }
    var url = parse('/apps/:app_slug', [appSlug]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.app.get = function(httpOptions) {
    var url = parse('/app');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.app.installations.get = function(installationId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/app/installations');
            break;
        case 1:
            url = parse('/app/installations/:installation_id', [installationId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.installations.get = function(httpOptions) {
    var url = parse('/user/installations');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.installation.repositories.get = function(httpOptions) {
    var url = parse('/installation/repositories');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.installations.repositories.get = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/user/installations/:installation_id/repositories', [installationId]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.marketplaceListing.plans.get = function(httpOptions) {
    var url = parse('/marketplace_listing/plans');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.marketplaceListing.plans.accounts.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/marketplace_listing/plans/:id/accounts', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.marketplaceListing.accounts.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/marketplace_listing/accounts/:id', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.marketplacePurchases.get = function(httpOptions) {
    var url = parse('/user/marketplace_purchases');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.issues.get = function(httpOptions) {
    var url = parse('/issues');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.issues.get = function(httpOptions) {
    var url = parse('/user/issues');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.issues.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/issues', [org]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.issues.get = function(owner, repo, number, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/issues', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/issues/:number', [owner, repo, number]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.assignees.get = function(owner, repo, assignee, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/assignees', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/assignees/:assignee', [owner, repo, assignee]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.issues.comments.get = function(owner, repo, number, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/issues/:number/comments', [owner, repo, number]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/issues/comments', [owner, repo]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.labels.get = function(owner, repo, name, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/labels', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/labels/:name', [owner, repo, name]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.issues.labels.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/labels', [owner, repo, number]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.milestones.labels.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/milestones/:number/labels', [owner, repo, number]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.milestones.get = function(owner, repo, number, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/milestones', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/milestones/:number', [owner, repo, number]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.issues.timeline.get = function(owner, repo, issueNumber, httpOptions) {
    if (!owner || !repo || !issueNumber) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,issueNumber].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:issue_number/timeline', [owner, repo, issueNumber]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.codesOfConduct.get = function(key, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/codes_of_conduct');
            break;
        case 1:
            url = parse('/codes_of_conduct/:key', [key]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.get = function(owner, repo, archiveFormat, ref, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-4){
        case 0:
            url = parse('/repos/:owner/:repo', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo', [owner, repo]);
            break;
        case 2:
            url = parse('/repos/:owner/:repo', [owner, repo]);
            break;
        case 3:
            url = parse('/repos/:owner/:repo/:archive_format/:ref', [owner, repo, archiveFormat, ref]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.community.codeOfConduct.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/community/code_of_conduct', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.emojis.get = function(httpOptions) {
    var url = parse('/emojis');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.gitignore.templates.get = function(name, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/gitignore/templates');
            break;
        case 1:
            url = parse('/gitignore/templates/:name', [name]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.licenses.get = function(license, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/licenses');
            break;
        case 1:
            url = parse('/licenses/:license', [license]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.license.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/license', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.meta.get = function(httpOptions) {
    var url = parse('/meta');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.rateLimit.get = function(httpOptions) {
    var url = parse('/rate_limit');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.orgs.get = function(httpOptions) {
    var url = parse('/user/orgs');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.organizations.get = function(httpOptions) {
    var url = parse('/organizations');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.orgs.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/orgs', [username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org', [org]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.members.get = function(org, username, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-4){
        case 0:
            url = parse('/orgs/:org/members', [org]);
            break;
        case 1:
            url = parse('/orgs/:org/members/:username', [org, username]);
            break;
        case 2:
            url = parse('/orgs/:org/members', [org]);
            break;
        case 3:
            url = parse('/orgs/:org/members/:username', [org, username]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.publicMembers.get = function(org, username, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-4){
        case 0:
            url = parse('/orgs/:org/public_members', [org]);
            break;
        case 1:
            url = parse('/orgs/:org/public_members/:username', [org, username]);
            break;
        case 2:
            url = parse('/orgs/:org/public_members', [org]);
            break;
        case 3:
            url = parse('/orgs/:org/public_members/:username', [org, username]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.memberships.get = function(org, username, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/orgs/:org/memberships/:username', [org, username]);
            break;
        case 1:
            url = parse('/orgs/:org/memberships/:username', [org, username]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.invitations.get = function(org, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/orgs/:org/invitations', [org]);
            break;
        case 1:
            url = parse('/orgs/:org/invitations', [org]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.memberships.orgs.get = function(org, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/user/memberships/orgs');
            break;
        case 1:
            url = parse('/user/memberships/orgs/:org', [org]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.outsideCollaborators.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/outside_collaborators', [org]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.teams.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/teams', [org]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.teams.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.teams.teams.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id/teams', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.teams.members.get = function(id, username, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/teams/:id/members', [id]);
            break;
        case 1:
            url = parse('/teams/:id/members/:username', [id, username]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.teams.memberships.get = function(id, username, httpOptions) {
    if (!id || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,username].');
        return;
    }
    var url = parse('/teams/:id/memberships/:username', [id, username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.teams.invitations.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id/invitations', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.teams.repos.get = function(id, owner, repo, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/teams/:id/repos', [id]);
            break;
        case 1:
            url = parse('/teams/:id/repos/:owner/:repo', [id, owner, repo]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.teams.get = function(httpOptions) {
    var url = parse('/user/teams');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.hooks.get = function(org, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/orgs/:org/hooks', [org]);
            break;
        case 1:
            url = parse('/orgs/:org/hooks/:id', [org, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.blocks.get = function(org, username, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/orgs/:org/blocks', [org]);
            break;
        case 1:
            url = parse('/orgs/:org/blocks/:username', [org, username]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.projects.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/projects', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.projects.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/projects', [org]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.projects.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/:id', [id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.projects.columns.cards.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/projects/columns/:column_id/cards', [columnId]);
            break;
        case 1:
            url = parse('/projects/columns/cards/:id', [id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.projects.columns.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/projects/:project_id/columns', [projectId]);
            break;
        case 1:
            url = parse('/projects/columns/:id', [id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.get = function(owner, repo, number, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/pulls', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/pulls/:number', [owner, repo, number]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.commits.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/commits', [owner, repo, number]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.files.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/files', [owner, repo, number]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.merge.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/merge', [owner, repo, number]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.reviews.get = function(owner, repo, number, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/pulls/:number/reviews', [owner, repo, number]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id', [owner, repo, number, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.reviews.comments.get = function(owner, repo, number, id, httpOptions) {
    if (!owner || !repo || !number || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id/comments', [owner, repo, number, id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.comments.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-3){
        case 0:
            url = parse('/repos/:owner/:repo/pulls/:number/comments', [owner, repo, number]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/pulls/comments', [owner, repo]);
            break;
        case 2:
            url = parse('/repos/:owner/:repo/pulls/comments/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.requestedReviewers.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/requested_reviewers', [owner, repo, number]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.comments.reactions.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.issues.reactions.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/reactions', [owner, repo, number]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.issues.comments.reactions.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pulls.comments.reactions.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.repos.get = function(httpOptions) {
    var url = parse('/user/repos');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.users.repos.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/repos', [username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.orgs.repos.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/repos', [org]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repositories.get = function(httpOptions) {
    var url = parse('/repositories');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.topics.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/topics', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.contributors.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/contributors', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.languages.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/languages', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.teams.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/teams', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.tags.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/tags', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.get = function(owner, repo, branch, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/branches', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/branches/:branch', [owner, repo, branch]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.protection.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection', [owner, repo, branch]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.protection.requiredStatusChecks.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks', [owner, repo, branch]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.protection.requiredStatusChecks.contexts.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts', [owner, repo, branch]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.protection.requiredPullRequestReviews.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews', [owner, repo, branch]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.protection.enforceAdmins.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/enforce_admins', [owner, repo, branch]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.protection.restrictions.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions', [owner, repo, branch]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.protection.restrictions.teams.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/teams', [owner, repo, branch]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.branches.protection.restrictions.users.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/users', [owner, repo, branch]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.collaborators.get = function(owner, repo, username, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/collaborators', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/collaborators/:username', [owner, repo, username]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.collaborators.permission.get = function(owner, repo, username, httpOptions) {
    if (!owner || !repo || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,username].');
        return;
    }
    var url = parse('/repos/:owner/:repo/collaborators/:username/permission', [owner, repo, username]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.comments.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/comments', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/comments/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.commits.comments.get = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/commits/:ref/comments', [owner, repo, ref]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.community.profile.get = function(owner, name, httpOptions) {
    if (!owner || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,name].');
        return;
    }
    var url = parse('/repos/:owner/:name/community/profile', [owner, name]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.commits.get = function(owner, repo, sha, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-4){
        case 0:
            url = parse('/repos/:owner/:repo/commits', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/commits/:sha', [owner, repo, sha]);
            break;
        case 2:
            url = parse('/repos/:owner/:repo/commits/:ref', [owner, repo, ref]);
            break;
        case 3:
            url = parse('/repos/:owner/:repo/commits/:sha', [owner, repo, sha]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.compare.get = function(owner, repo, baseCommitSuspensivePointsHeadCommit, httpOptions) {
    if (!owner || !repo || !baseCommitSuspensivePointsHeadCommit) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,baseCommitSuspensivePointsHeadCommit].');
        return;
    }
    var url = parse('/repos/:owner/:repo/compare/:baseCommitSuspensivePointsHeadCommit', [owner, repo, baseCommitSuspensivePointsHeadCommit]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.readme.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/readme', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.contents.get = function(owner, repo, path, httpOptions) {
    if (!owner || !repo || !path) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,path].');
        return;
    }
    var url = parse('/repos/:owner/:repo/contents/:path', [owner, repo, path]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.keys.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/keys', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/keys/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.deployments.get = function(owner, repo, deploymentId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/deployments', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/deployments/:deployment_id', [owner, repo, deploymentId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.deployments.statuses.get = function(owner, repo, id, statusId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/deployments/:id/statuses', [owner, repo, id]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/deployments/:id/statuses/:status_id', [owner, repo, id, statusId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.downloads.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/downloads', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/downloads/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.forks.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/forks', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.invitations.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/invitations', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.repositoryInvitations.get = function(httpOptions) {
    var url = parse('/user/repository_invitations');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pages.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pages', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pages.builds.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/pages/builds', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/pages/builds/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.pages.builds.latest.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pages/builds/latest', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.releases.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/releases', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/releases/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.releases.latest.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/latest', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.releases.tags.get = function(owner, repo, tag, httpOptions) {
    if (!owner || !repo || !tag) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,tag].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/tags/:tag', [owner, repo, tag]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.releases.assets.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/releases/:id/assets', [owner, repo, id]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/releases/assets/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.stats.contributors.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/contributors', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.stats.commitActivity.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/commit_activity', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.stats.codeFrequency.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/code_frequency', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.stats.participation.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/participation', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.stats.punchCard.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/punch_card', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.commits.statuses.get = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/commits/:ref/statuses', [owner, repo, ref]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.commits.status.get = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/commits/:ref/status', [owner, repo, ref]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.traffic.popular.referrers.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/traffic/popular/referrers', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.traffic.popular.paths.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/traffic/popular/paths', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.traffic.views.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/traffic/views', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.traffic.clones.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/traffic/clones', [owner, repo]);
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.repos.hooks.get = function(owner, repo, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/hooks', [owner, repo]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/hooks/:id', [owner, repo, id]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.repositories.get = function(httpOptions) {
    var url = parse('/search/repositories');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.commits.get = function(httpOptions) {
    var url = parse('/search/commits');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.code.get = function(httpOptions) {
    var url = parse('/search/code');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.issues.get = function(httpOptions) {
    var url = parse('/search/issues');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.users.get = function(httpOptions) {
    var url = parse('/search/users');
    sys.logs.debug('[githubApp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.gists.post = function(httpOptions) {
    var url = parse('/gists');
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.gists.forks.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/forks', [id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.git.blobs.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/blobs', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.git.commits.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/commits', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.git.refs.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/refs', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.git.tags.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/tags', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.git.trees.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/trees', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.installations.accessTokens.post = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/installations/:installation_id/access_tokens', [installationId]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.issues.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.issues.assignees.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/assignees', [owner, repo, number]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.issues.comments.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/comments', [owner, repo, number]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.labels.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/labels', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.issues.labels.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/labels', [owner, repo, number]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.milestones.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/milestones', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.markdown.post = function(httpOptions) {
    var url = parse('/markdown');
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.markdown.raw.post = function(httpOptions) {
    var url = parse('/markdown/raw');
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.orgs.teams.post = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/teams', [org]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.orgs.hooks.post = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/hooks', [org]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.orgs.hooks.pings.post = function(org, id, httpOptions) {
    if (!org || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,id].');
        return;
    }
    var url = parse('/orgs/:org/hooks/:id/pings', [org, id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.projects.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/projects', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.orgs.projects.post = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/projects', [org]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.projects.columns.cards.post = function(columnId, httpOptions) {
    if (!columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [columnId].');
        return;
    }
    var url = parse('/projects/columns/:column_id/cards', [columnId]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.projects.columns.cards.moves.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/cards/:id/moves', [id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.projects.columns.post = function(projectId, httpOptions) {
    if (!projectId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [projectId].');
        return;
    }
    var url = parse('/projects/:project_id/columns', [projectId]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.projects.columns.moves.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/:id/moves', [id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.pulls.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.pulls.reviews.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews', [owner, repo, number]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.pulls.reviews.events.post = function(owner, repo, number, id, httpOptions) {
    if (!owner || !repo || !number || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id/events', [owner, repo, number, id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.pulls.comments.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/comments', [owner, repo, number]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.pulls.requestedReviewers.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/requested_reviewers', [owner, repo, number]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.comments.reactions.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.issues.reactions.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/reactions', [owner, repo, number]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.issues.comments.reactions.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.pulls.comments.reactions.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.user.repos.post = function(httpOptions) {
    var url = parse('/user/repos');
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.branches.protection.requiredStatusChecks.contexts.post = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts', [owner, repo, branch]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.branches.protection.enforceAdmins.post = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/enforce_admins', [owner, repo, branch]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.branches.protection.restrictions.teams.post = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/teams', [owner, repo, branch]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.branches.protection.restrictions.users.post = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/users', [owner, repo, branch]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.commits.comments.post = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/commits/:sha/comments', [owner, repo, sha]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.keys.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/keys', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.merges.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/merges', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.pages.builds.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pages/builds', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.releases.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.statuses.post = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/statuses/:sha', [owner, repo, sha]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.hooks.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks', [owner, repo]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.hooks.tests.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks/:id/tests', [owner, repo, id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.repos.hooks.pings.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks/:id/pings', [owner, repo, id]);
    sys.logs.debug('[githubApp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.notifications.threads.subscription.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id/subscription', [id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.user.starred.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/user/starred/:owner/:repo', [owner, repo]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.subscription.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/subscription', [owner, repo]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.gists.star.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/star', [id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.gists.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id', [id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.git.refs.delete = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/refs/:ref', [owner, repo, ref]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.user.installations.repositories.delete = function(installationId, repositoryId, httpOptions) {
    if (!installationId || !repositoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId,repositoryId].');
        return;
    }
    var url = parse('/user/installations/:installation_id/repositories/:repository_id', [installationId, repositoryId]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.issues.lock.delete = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/lock', [owner, repo, number]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.issues.assignees.delete = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/assignees', [owner, repo, number]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.issues.comments.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/comments/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.labels.delete = function(owner, repo, name, httpOptions) {
    if (!owner || !repo || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,name].');
        return;
    }
    var url = parse('/repos/:owner/:repo/labels/:name', [owner, repo, name]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.issues.labels.delete = function(owner, repo, number, name, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-2){
        case 0:
            url = parse('/repos/:owner/:repo/issues/:number/labels/:name', [owner, repo, number, name]);
            break;
        case 1:
            url = parse('/repos/:owner/:repo/issues/:number/labels', [owner, repo, number]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.milestones.delete = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/milestones/:number', [owner, repo, number]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.orgs.members.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/members/:username', [org, username]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.orgs.publicMembers.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/public_members/:username', [org, username]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.orgs.memberships.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/memberships/:username', [org, username]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.orgs.outsideCollaborators.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/outside_collaborators/:username', [org, username]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.teams.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id', [id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.teams.memberships.delete = function(id, username, httpOptions) {
    if (!id || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,username].');
        return;
    }
    var url = parse('/teams/:id/memberships/:username', [id, username]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.teams.repos.delete = function(id, owner, repo, httpOptions) {
    if (!id || !owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,owner,repo].');
        return;
    }
    var url = parse('/teams/:id/repos/:owner/:repo', [id, owner, repo]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.orgs.hooks.delete = function(org, id, httpOptions) {
    if (!org || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,id].');
        return;
    }
    var url = parse('/orgs/:org/hooks/:id', [org, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.orgs.blocks.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/blocks/:username', [org, username]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.projects.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/:id', [id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.projects.columns.cards.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/cards/:id', [id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.projects.columns.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/:id', [id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.pulls.reviews.delete = function(owner, repo, number, id, httpOptions) {
    if (!owner || !repo || !number || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id', [owner, repo, number, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.pulls.comments.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.pulls.requestedReviewers.delete = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/requested_reviewers', [owner, repo, number]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.reactions.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/reactions/:id', [id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo', [owner, repo]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.branches.protection.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection', [owner, repo, branch]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.branches.protection.requiredStatusChecks.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks', [owner, repo, branch]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.branches.protection.requiredStatusChecks.contexts.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts', [owner, repo, branch]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.branches.protection.requiredPullRequestReviews.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews', [owner, repo, branch]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.branches.protection.enforceAdmins.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/enforce_admins', [owner, repo, branch]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.branches.protection.restrictions.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions', [owner, repo, branch]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.branches.protection.restrictions.teams.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/teams', [owner, repo, branch]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.branches.protection.restrictions.users.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/users', [owner, repo, branch]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.collaborators.delete = function(owner, repo, username, httpOptions) {
    if (!owner || !repo || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,username].');
        return;
    }
    var url = parse('/repos/:owner/:repo/collaborators/:username', [owner, repo, username]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.comments.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/comments/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.contents.delete = function(owner, repo, path, httpOptions) {
    if (!owner || !repo || !path) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,path].');
        return;
    }
    var url = parse('/repos/:owner/:repo/contents/:path', [owner, repo, path]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.keys.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/keys/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.deployments.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/deployments', [owner, repo]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.deployments.statuses.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/deployments/:id/statuses', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.downloads.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/downloads/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.forks.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/forks', [owner, repo]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.invitations.delete = function(owner, repo, invitationId, httpOptions) {
    if (!owner || !repo || !invitationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,invitationId].');
        return;
    }
    var url = parse('/repos/:owner/:repo/invitations/:invitation_id', [owner, repo, invitationId]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.user.repositoryInvitations.delete = function(invitationId, httpOptions) {
    if (!invitationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [invitationId].');
        return;
    }
    var url = parse('/user/repository_invitations/:invitation_id', [invitationId]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.releases.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.releases.assets.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/assets/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.repos.hooks.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.notifications.threads.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id', [id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.gists.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id', [id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.git.refs.patch = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/refs/:ref', [owner, repo, ref]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.issues.patch = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number', [owner, repo, number]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.issues.comments.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/comments/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.labels.patch = function(owner, repo, name, httpOptions) {
    if (!owner || !repo || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,name].');
        return;
    }
    var url = parse('/repos/:owner/:repo/labels/:name', [owner, repo, name]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.milestones.patch = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/milestones/:number', [owner, repo, number]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.orgs.patch = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org', [org]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.user.memberships.orgs.patch = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/user/memberships/orgs/:org', [org]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.teams.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id', [id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.orgs.hooks.patch = function(org, id, httpOptions) {
    if (!org || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,id].');
        return;
    }
    var url = parse('/orgs/:org/hooks/:id', [org, id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.projects.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/:id', [id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.projects.columns.cards.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/cards/:id', [id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.projects.columns.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/:id', [id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.pulls.patch = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number', [owner, repo, number]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.pulls.comments.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.patch = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo', [owner, repo]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.branches.protection.requiredStatusChecks.patch = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks', [owner, repo, branch]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.branches.protection.requiredPullRequestReviews.patch = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews', [owner, repo, branch]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.comments.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/comments/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.invitations.patch = function(owner, repo, invitationId, httpOptions) {
    if (!owner || !repo || !invitationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,invitationId].');
        return;
    }
    var url = parse('/repos/:owner/:repo/invitations/:invitation_id', [owner, repo, invitationId]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.user.repositoryInvitations.patch = function(invitationId, httpOptions) {
    if (!invitationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [invitationId].');
        return;
    }
    var url = parse('/user/repository_invitations/:invitation_id', [invitationId]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.releases.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.releases.assets.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/assets/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.repos.hooks.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks/:id', [owner, repo, id]);
    sys.logs.debug('[githubApp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.notifications.put = function(httpOptions) {
    var url = parse('/notifications');
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.notifications.put = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/notifications', [owner, repo]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.notifications.threads.subscription.put = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id/subscription', [id]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.user.starred.put = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/user/starred/:owner/:repo', [owner, repo]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.subscription.put = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/subscription', [owner, repo]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.gists.star.put = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/star', [id]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.user.installations.repositories.put = function(installationId, repositoryId, httpOptions) {
    if (!installationId || !repositoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId,repositoryId].');
        return;
    }
    var url = parse('/user/installations/:installation_id/repositories/:repository_id', [installationId, repositoryId]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.issues.lock.put = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/lock', [owner, repo, number]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.issues.labels.put = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/labels', [owner, repo, number]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.orgs.publicMembers.put = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/public_members/:username', [org, username]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.orgs.memberships.put = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/memberships/:username', [org, username]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.orgs.outsideCollaborators.put = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/outside_collaborators/:username', [org, username]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.teams.members.put = function(id, username, httpOptions) {
    if (!id || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,username].');
        return;
    }
    var url = parse('/teams/:id/members/:username', [id, username]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.teams.memberships.put = function(id, username, httpOptions) {
    if (!id || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,username].');
        return;
    }
    var url = parse('/teams/:id/memberships/:username', [id, username]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.teams.repos.put = function(id, org, repo, httpOptions) {
    if (!id || !org || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,org,repo].');
        return;
    }
    var url = parse('/teams/:id/repos/:org/:repo', [id, org, repo]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.orgs.blocks.put = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/blocks/:username', [org, username]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.pulls.merge.put = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/merge', [owner, repo, number]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.pulls.reviews.dismissals.put = function(owner, repo, number, id, httpOptions) {
    if (!owner || !repo || !number || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals', [owner, repo, number, id]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.topics.put = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/topics', [owner, repo]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.branches.protection.put = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection', [owner, repo, branch]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.branches.protection.requiredStatusChecks.contexts.put = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts', [owner, repo, branch]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.branches.protection.restrictions.teams.put = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/teams', [owner, repo, branch]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.branches.protection.restrictions.users.put = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/users', [owner, repo, branch]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.collaborators.put = function(owner, repo, username, httpOptions) {
    if (!owner || !repo || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,username].');
        return;
    }
    var url = parse('/repos/:owner/:repo/collaborators/:username', [owner, repo, username]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.repos.contents.put = function(owner, repo, path, httpOptions) {
    if (!owner || !repo || !path) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,path].');
        return;
    }
    var url = parse('/repos/:owner/:repo/contents/:path', [owner, repo, path]);
    sys.logs.debug('[githubApp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.syncInstallations = function() {
    return endpoint._syncInstallations({});
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}