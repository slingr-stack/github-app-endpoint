# Javascript API

The Javascript API of the githubApp endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PATCH`,`PUT` requests to the [githubApp API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.githubApp.get('/repos/:owner/:repo/traffic/views')
var response = app.endpoints.githubApp.post('/repos/:owner/:repo/pulls/:number/reviews', body)
var response = app.endpoints.githubApp.post('/repos/:owner/:repo/pulls/:number/reviews')
var response = app.endpoints.githubApp.delete('/reactions/:id')
var response = app.endpoints.githubApp.patch('/user/memberships/orgs/:org', body)
var response = app.endpoints.githubApp.patch('/user/memberships/orgs/:org')
var response = app.endpoints.githubApp.put('/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals', body)
var response = app.endpoints.githubApp.put('/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.events.get()
```
---
* API URL: '/repos/:owner/:repo/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.events.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.events.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/:issue_number/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.events.get(owner, repo, issueNumber)
```
---
* API URL: '/repos/:owner/:repo/issues/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.events.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/events/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.events.get(owner, repo, id)
```
---
* API URL: '/networks/:owner/:repo/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.networks.events.get(owner, repo)
```
---
* API URL: '/orgs/:org/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.events.get(org)
```
---
* API URL: '/users/:username/received_events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.receivedEvents.get(username)
```
---
* API URL: '/users/:username/received_events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.receivedEvents.get(username)
```
---
* API URL: '/users/:username/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.events.get(username)
```
---
* API URL: '/users/:username/events/public'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.events.public.get(username)
```
---
* API URL: '/users/:username/events/orgs/:org'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.events.orgs.get(username, org)
```
---
* API URL: '/feeds'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.feeds.get()
```
---
* API URL: '/notifications'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.notifications.get()
```
---
* API URL: '/repos/:owner/:repo/notifications'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.notifications.get(owner, repo)
```
---
* API URL: '/notifications/threads/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.notifications.threads.get(id)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.notifications.threads.subscription.get(id)
```
---
* API URL: '/repos/:owner/:repo/stargazers'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.stargazers.get(owner, repo)
```
---
* API URL: '/users/:username/starred'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.starred.get(username)
```
---
* API URL: '/user/starred'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.starred.get()
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.starred.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/subscribers'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.subscribers.get(owner, repo)
```
---
* API URL: '/users/:username/subscriptions'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.subscriptions.get(username)
```
---
* API URL: '/user/subscriptions'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.subscriptions.get()
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.subscription.get(owner, repo)
```
---
* API URL: '/users/:username/gists'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.gists.get(username)
```
---
* API URL: '/gists'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gists.get()
```
---
* API URL: '/gists/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gists.get(id)
```
---
* API URL: '/gists/:id/:sha'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gists.get(id, sha)
```
---
* API URL: '/gists/public'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gists.public.get()
```
---
* API URL: '/gists/starred'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gists.starred.get()
```
---
* API URL: '/gists/:id/commits'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gists.commits.get(id)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gists.star.get(id)
```
---
* API URL: '/gists/:id/forks'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gists.forks.get(id)
```
---
* API URL: '/repos/:owner/:repo/git/blobs/:sha'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.git.blobs.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/commits/:sha'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.git.commits.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.git.refs.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:repo/git/refs'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.git.refs.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/git/tags/:sha'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.git.tags.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/trees/:sha'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.git.trees.get(owner, repo, sha)
```
---
* API URL: '/apps/:app_slug'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.apps.get(appSlug)
```
---
* API URL: '/app'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.app.get()
```
---
* API URL: '/app/installations'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.app.installations.get()
```
---
* API URL: '/app/installations/:installation_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.app.installations.get(installationId)
```
---
* API URL: '/user/installations'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.installations.get()
```
---
* API URL: '/installation/repositories'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.installation.repositories.get()
```
---
* API URL: '/user/installations/:installation_id/repositories'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.installations.repositories.get(installationId)
```
---
* API URL: '/marketplace_listing/plans'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.marketplaceListing.plans.get()
```
---
* API URL: '/marketplace_listing/plans/:id/accounts'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.marketplaceListing.plans.accounts.get(id)
```
---
* API URL: '/marketplace_listing/accounts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.marketplaceListing.accounts.get(id)
```
---
* API URL: '/user/marketplace_purchases'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.marketplacePurchases.get()
```
---
* API URL: '/issues'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.issues.get()
```
---
* API URL: '/user/issues'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.issues.get()
```
---
* API URL: '/orgs/:org/issues'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.issues.get(org)
```
---
* API URL: '/repos/:owner/:repo/issues'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/:number'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/assignees'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.assignees.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/assignees/:assignee'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.assignees.get(owner, repo, assignee)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/comments'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.comments.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/comments'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/labels'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.labels.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.labels.get(owner, repo, name)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.labels.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number/labels'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.milestones.labels.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/milestones'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.milestones.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.milestones.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/:issue_number/timeline'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.timeline.get(owner, repo, issueNumber)
```
---
* API URL: '/codes_of_conduct'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.codesOfConduct.get()
```
---
* API URL: '/codes_of_conduct/:key'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.codesOfConduct.get(key)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/:archive_format/:ref'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.get(owner, repo, archiveFormat, ref)
```
---
* API URL: '/repos/:owner/:repo/community/code_of_conduct'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.community.codeOfConduct.get(owner, repo)
```
---
* API URL: '/emojis'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.emojis.get()
```
---
* API URL: '/gitignore/templates'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gitignore.templates.get()
```
---
* API URL: '/gitignore/templates/:name'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.gitignore.templates.get(name)
```
---
* API URL: '/licenses'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.licenses.get()
```
---
* API URL: '/licenses/:license'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.licenses.get(license)
```
---
* API URL: '/repos/:owner/:repo/license'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.license.get(owner, repo)
```
---
* API URL: '/meta'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.meta.get()
```
---
* API URL: '/rate_limit'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.rateLimit.get()
```
---
* API URL: '/user/orgs'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.orgs.get()
```
---
* API URL: '/organizations'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.organizations.get()
```
---
* API URL: '/users/:username/orgs'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.orgs.get(username)
```
---
* API URL: '/orgs/:org'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.get(org)
```
---
* API URL: '/orgs/:org/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.members.get(org)
```
---
* API URL: '/orgs/:org/members/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.members.get(org, username)
```
---
* API URL: '/orgs/:org/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.members.get(org)
```
---
* API URL: '/orgs/:org/members/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.members.get(org, username)
```
---
* API URL: '/orgs/:org/public_members'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.publicMembers.get(org)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.publicMembers.get(org, username)
```
---
* API URL: '/orgs/:org/public_members'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.publicMembers.get(org)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.publicMembers.get(org, username)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.memberships.get(org, username)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.memberships.get(org, username)
```
---
* API URL: '/orgs/:org/invitations'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.invitations.get(org)
```
---
* API URL: '/orgs/:org/invitations'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.invitations.get(org)
```
---
* API URL: '/user/memberships/orgs'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.memberships.orgs.get()
```
---
* API URL: '/user/memberships/orgs/:org'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.memberships.orgs.get(org)
```
---
* API URL: '/orgs/:org/outside_collaborators'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.outsideCollaborators.get(org)
```
---
* API URL: '/orgs/:org/teams'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.teams.get(org)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.teams.get(id)
```
---
* API URL: '/teams/:id/teams'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.teams.teams.get(id)
```
---
* API URL: '/teams/:id/members'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.teams.members.get(id)
```
---
* API URL: '/teams/:id/members/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.teams.members.get(id, username)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.teams.memberships.get(id, username)
```
---
* API URL: '/teams/:id/invitations'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.teams.invitations.get(id)
```
---
* API URL: '/teams/:id/repos'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.teams.repos.get(id)
```
---
* API URL: '/teams/:id/repos/:owner/:repo'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.teams.repos.get(id, owner, repo)
```
---
* API URL: '/user/teams'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.teams.get()
```
---
* API URL: '/orgs/:org/hooks'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.hooks.get(org)
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.hooks.get(org, id)
```
---
* API URL: '/orgs/:org/blocks'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.blocks.get(org)
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.blocks.get(org, username)
```
---
* API URL: '/repos/:owner/:repo/projects'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.projects.get(owner, repo)
```
---
* API URL: '/orgs/:org/projects'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.projects.get(org)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.projects.get(id)
```
---
* API URL: '/projects/columns/:column_id/cards'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.projects.columns.cards.get(columnId)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.projects.columns.cards.get(id)
```
---
* API URL: '/projects/:project_id/columns'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.projects.columns.get(projectId)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.projects.columns.get(id)
```
---
* API URL: '/repos/:owner/:repo/pulls'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/commits'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.commits.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/files'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.files.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/merge'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.merge.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.reviews.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.reviews.get(owner, repo, number, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/comments'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.reviews.comments.get(owner, repo, number, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/comments'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.comments.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.comments.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.requestedReviewers.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/reactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.reactions.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.issues.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pulls.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/user/repos'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.repos.get()
```
---
* API URL: '/users/:username/repos'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.users.repos.get(username)
```
---
* API URL: '/orgs/:org/repos'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.orgs.repos.get(org)
```
---
* API URL: '/repositories'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repositories.get()
```
---
* API URL: '/repos/:owner/:repo/topics'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.topics.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/contributors'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.contributors.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/languages'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.languages.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/teams'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.teams.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/tags'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.tags.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.protection.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredStatusChecks.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredStatusChecks.contexts.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredPullRequestReviews.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.protection.enforceAdmins.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.teams.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.users.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/collaborators'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.collaborators.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.collaborators.get(owner, repo, username)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username/permission'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.collaborators.permission.get(owner, repo, username)
```
---
* API URL: '/repos/:owner/:repo/comments'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.comments.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/comments'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.commits.comments.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:name/community/profile'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.community.profile.get(owner, name)
```
---
* API URL: '/repos/:owner/:repo/commits'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.commits.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/commits/:sha'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.commits.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.commits.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:repo/commits/:sha'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.commits.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/compare/:baseCommitSuspensivePointsHeadCommit'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.compare.get(owner, repo, baseCommitSuspensivePointsHeadCommit)
```
---
* API URL: '/repos/:owner/:repo/readme'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.readme.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.contents.get(owner, repo, path)
```
---
* API URL: '/repos/:owner/:repo/keys'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.keys.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/keys/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.keys.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/deployments'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.deployments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments/:deployment_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.deployments.get(owner, repo, deploymentId)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.deployments.statuses.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses/:status_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.deployments.statuses.get(owner, repo, id, statusId)
```
---
* API URL: '/repos/:owner/:repo/downloads'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.downloads.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/downloads/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.downloads.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/forks'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.forks.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/invitations'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.invitations.get(owner, repo)
```
---
* API URL: '/user/repository_invitations'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.user.repositoryInvitations.get()
```
---
* API URL: '/repos/:owner/:repo/pages'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pages.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pages/builds'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pages.builds.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pages/builds/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pages.builds.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pages/builds/latest'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.pages.builds.latest.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.releases.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.releases.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/releases/latest'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.releases.latest.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases/tags/:tag'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.releases.tags.get(owner, repo, tag)
```
---
* API URL: '/repos/:owner/:repo/releases/:id/assets'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.releases.assets.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.releases.assets.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/stats/contributors'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.stats.contributors.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/commit_activity'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.stats.commitActivity.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/code_frequency'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.stats.codeFrequency.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/participation'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.stats.participation.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/punch_card'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.stats.punchCard.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/statuses'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.commits.statuses.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/status'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.commits.status.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:repo/traffic/popular/referrers'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.traffic.popular.referrers.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/popular/paths'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.traffic.popular.paths.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/views'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.traffic.views.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/clones'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.traffic.clones.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/hooks'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.hooks.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.repos.hooks.get(owner, repo, id)
```
---
* API URL: '/search/repositories'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.search.repositories.get()
```
---
* API URL: '/search/commits'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.search.commits.get()
```
---
* API URL: '/search/code'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.search.code.get()
```
---
* API URL: '/search/issues'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.search.issues.get()
```
---
* API URL: '/search/users'
* HTTP Method: 'GET'
```javascript
app.endpoints.githubApp.search.users.get()
```
---
* API URL: '/gists'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.gists.post(body)
```
---
* API URL: '/gists/:id/forks'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.gists.forks.post(id, body)
```
---
* API URL: '/repos/:owner/:repo/git/blobs'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.git.blobs.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/commits'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.git.commits.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/refs'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.git.refs.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/tags'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.git.tags.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/trees'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.git.trees.post(owner, repo, body)
```
---
* API URL: '/installations/:installation_id/access_tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.installations.accessTokens.post(installationId, body)
```
---
* API URL: '/repos/:owner/:repo/issues'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.issues.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/assignees'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.issues.assignees.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/comments'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.issues.comments.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/labels'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.labels.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.issues.labels.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/milestones'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.milestones.post(owner, repo, body)
```
---
* API URL: '/markdown'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.markdown.post(body)
```
---
* API URL: '/markdown/raw'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.markdown.raw.post(body)
```
---
* API URL: '/orgs/:org/teams'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.orgs.teams.post(org, body)
```
---
* API URL: '/orgs/:org/hooks'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.orgs.hooks.post(org, body)
```
---
* API URL: '/orgs/:org/hooks/:id/pings'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.orgs.hooks.pings.post(org, id, body)
```
---
* API URL: '/repos/:owner/:repo/projects'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.projects.post(owner, repo, body)
```
---
* API URL: '/orgs/:org/projects'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.orgs.projects.post(org, body)
```
---
* API URL: '/projects/columns/:column_id/cards'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.projects.columns.cards.post(columnId, body)
```
---
* API URL: '/projects/columns/cards/:id/moves'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.projects.columns.cards.moves.post(id, body)
```
---
* API URL: '/projects/:project_id/columns'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.projects.columns.post(projectId, body)
```
---
* API URL: '/projects/columns/:id/moves'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.projects.columns.moves.post(id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.pulls.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.pulls.reviews.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/events'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.pulls.reviews.events.post(owner, repo, number, id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/comments'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.pulls.comments.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.pulls.requestedReviewers.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/reactions'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.issues.reactions.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.issues.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.pulls.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/user/repos'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.user.repos.post(body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredStatusChecks.contexts.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.branches.protection.enforceAdmins.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.teams.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.users.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/commits/:sha/comments'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.commits.comments.post(owner, repo, sha, body)
```
---
* API URL: '/repos/:owner/:repo/keys'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.keys.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/merges'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.merges.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/pages/builds'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.pages.builds.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/releases'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.releases.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/statuses/:sha'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.statuses.post(owner, repo, sha, body)
```
---
* API URL: '/repos/:owner/:repo/hooks'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.hooks.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id/tests'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.hooks.tests.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id/pings'
* HTTP Method: 'POST'
```javascript
app.endpoints.githubApp.repos.hooks.pings.post(owner, repo, id, body)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.notifications.threads.subscription.delete(id)
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.user.starred.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.subscription.delete(owner, repo)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.gists.star.delete(id)
```
---
* API URL: '/gists/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.gists.delete(id)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.git.refs.delete(owner, repo, ref)
```
---
* API URL: '/user/installations/:installation_id/repositories/:repository_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.user.installations.repositories.delete(installationId, repositoryId)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/lock'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.issues.lock.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/assignees'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.issues.assignees.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.issues.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.labels.delete(owner, repo, name)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.issues.labels.delete(owner, repo, number, name)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.issues.labels.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.milestones.delete(owner, repo, number)
```
---
* API URL: '/orgs/:org/members/:username'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.orgs.members.delete(org, username)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.orgs.publicMembers.delete(org, username)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.orgs.memberships.delete(org, username)
```
---
* API URL: '/orgs/:org/outside_collaborators/:username'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.orgs.outsideCollaborators.delete(org, username)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.teams.delete(id)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.teams.memberships.delete(id, username)
```
---
* API URL: '/teams/:id/repos/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.teams.repos.delete(id, owner, repo)
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.orgs.hooks.delete(org, id)
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.orgs.blocks.delete(org, username)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.projects.delete(id)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.projects.columns.cards.delete(id)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.projects.columns.delete(id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.pulls.reviews.delete(owner, repo, number, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.pulls.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.pulls.requestedReviewers.delete(owner, repo, number)
```
---
* API URL: '/reactions/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.reactions.delete(id)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.branches.protection.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredStatusChecks.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredStatusChecks.contexts.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredPullRequestReviews.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.branches.protection.enforceAdmins.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.teams.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.users.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.collaborators.delete(owner, repo, username)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.contents.delete(owner, repo, path)
```
---
* API URL: '/repos/:owner/:repo/keys/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.keys.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/deployments'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.deployments.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.deployments.statuses.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/downloads/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.downloads.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/forks'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.forks.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/invitations/:invitation_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.invitations.delete(owner, repo, invitationId)
```
---
* API URL: '/user/repository_invitations/:invitation_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.user.repositoryInvitations.delete(invitationId)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.releases.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.releases.assets.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.githubApp.repos.hooks.delete(owner, repo, id)
```
---
* API URL: '/notifications/threads/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.notifications.threads.patch(id, body)
```
---
* API URL: '/gists/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.gists.patch(id, body)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.git.refs.patch(owner, repo, ref, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.issues.patch(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.issues.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.labels.patch(owner, repo, name, body)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.milestones.patch(owner, repo, number, body)
```
---
* API URL: '/orgs/:org'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.orgs.patch(org, body)
```
---
* API URL: '/user/memberships/orgs/:org'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.user.memberships.orgs.patch(org, body)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.teams.patch(id, body)
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.orgs.hooks.patch(org, id, body)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.projects.patch(id, body)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.projects.columns.cards.patch(id, body)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.projects.columns.patch(id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.pulls.patch(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.pulls.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.patch(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredStatusChecks.patch(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredPullRequestReviews.patch(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/invitations/:invitation_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.invitations.patch(owner, repo, invitationId, body)
```
---
* API URL: '/user/repository_invitations/:invitation_id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.user.repositoryInvitations.patch(invitationId, body)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.releases.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.releases.assets.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.githubApp.repos.hooks.patch(owner, repo, id, body)
```
---
* API URL: '/notifications'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.notifications.put(body)
```
---
* API URL: '/repos/:owner/:repo/notifications'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.notifications.put(owner, repo, body)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.notifications.threads.subscription.put(id, body)
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.user.starred.put(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.subscription.put(owner, repo, body)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.gists.star.put(id, body)
```
---
* API URL: '/user/installations/:installation_id/repositories/:repository_id'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.user.installations.repositories.put(installationId, repositoryId, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/lock'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.issues.lock.put(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.issues.labels.put(owner, repo, number, body)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.orgs.publicMembers.put(org, username, body)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.orgs.memberships.put(org, username, body)
```
---
* API URL: '/orgs/:org/outside_collaborators/:username'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.orgs.outsideCollaborators.put(org, username, body)
```
---
* API URL: '/teams/:id/members/:username'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.teams.members.put(id, username, body)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.teams.memberships.put(id, username, body)
```
---
* API URL: '/teams/:id/repos/:org/:repo'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.teams.repos.put(id, org, repo, body)
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.orgs.blocks.put(org, username, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/merge'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.pulls.merge.put(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.pulls.reviews.dismissals.put(owner, repo, number, id, body)
```
---
* API URL: '/repos/:owner/:repo/topics'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.topics.put(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.branches.protection.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.branches.protection.requiredStatusChecks.contexts.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.teams.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.branches.protection.restrictions.users.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.collaborators.put(owner, repo, username, body)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'PUT'
```javascript
app.endpoints.githubApp.repos.contents.put(owner, repo, path, body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,DELETE,PATCH,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>Path</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/events<br>/repos/{owner}/{repo}/events<br>/repos/{owner}/{repo}/issues/events<br>/repos/{owner}/{repo}/issues/{issue_number}/events<br>/repos/{owner}/{repo}/issues/events<br>/repos/{owner}/{repo}/issues/events/{id}<br>/networks/{owner}/{repo}/events<br>/orgs/{org}/events<br>/users/{username}/received_events<br>/users/{username}/received_events<br>/users/{username}/events<br>/users/{username}/events/public<br>/users/{username}/events/orgs/{org}<br>/feeds<br>/notifications<br>/repos/{owner}/{repo}/notifications<br>/notifications/threads/{id}<br>/notifications/threads/{id}/subscription<br>/repos/{owner}/{repo}/stargazers<br>/users/{username}/starred<br>/user/starred<br>/user/starred/{owner}/{repo}<br>/repos/{owner}/{repo}/subscribers<br>/users/{username}/subscriptions<br>/user/subscriptions<br>/repos/{owner}/{repo}/subscription<br>/users/{username}/gists<br>/gists<br>/gists/{id}<br>/gists/{id}/{sha}<br>/gists/public<br>/gists/starred<br>/gists/{id}/commits<br>/gists/{id}/star<br>/gists/{id}/forks<br>/repos/{owner}/{repo}/git/blobs/{sha}<br>/repos/{owner}/{repo}/git/commits/{sha}<br>/repos/{owner}/{repo}/git/refs/{ref}<br>/repos/{owner}/{repo}/git/refs<br>/repos/{owner}/{repo}/git/tags/{sha}<br>/repos/{owner}/{repo}/git/trees/{sha}<br>/apps/{app_slug}<br>/app<br>/app/installations<br>/app/installations/{installation_id}<br>/user/installations<br>/installation/repositories<br>/user/installations/{installation_id}/repositories<br>/marketplace_listing/plans<br>/marketplace_listing/plans/{id}/accounts<br>/marketplace_listing/accounts/{id}<br>/user/marketplace_purchases<br>/issues<br>/user/issues<br>/orgs/{org}/issues<br>/repos/{owner}/{repo}/issues<br>/repos/{owner}/{repo}/issues/{number}<br>/repos/{owner}/{repo}/assignees<br>/repos/{owner}/{repo}/assignees/{assignee}<br>/repos/{owner}/{repo}/issues/{number}/comments<br>/repos/{owner}/{repo}/issues/comments<br>/repos/{owner}/{repo}/labels<br>/repos/{owner}/{repo}/labels/{name}<br>/repos/{owner}/{repo}/issues/{number}/labels<br>/repos/{owner}/{repo}/milestones/{number}/labels<br>/repos/{owner}/{repo}/milestones<br>/repos/{owner}/{repo}/milestones/{number}<br>/repos/{owner}/{repo}/issues/{issue_number}/timeline<br>/codes_of_conduct<br>/codes_of_conduct/{key}<br>/repos/{owner}/{repo}<br>/repos/{owner}/{repo}<br>/repos/{owner}/{repo}<br>/repos/{owner}/{repo}/{archive_format}/{ref}<br>/repos/{owner}/{repo}/community/code_of_conduct<br>/emojis<br>/gitignore/templates<br>/gitignore/templates/{name}<br>/licenses<br>/licenses/{license}<br>/repos/{owner}/{repo}/license<br>/meta<br>/rate_limit<br>/user/orgs<br>/organizations<br>/users/{username}/orgs<br>/orgs/{org}<br>/orgs/{org}/members<br>/orgs/{org}/members/{username}<br>/orgs/{org}/members<br>/orgs/{org}/members/{username}<br>/orgs/{org}/public_members<br>/orgs/{org}/public_members/{username}<br>/orgs/{org}/public_members<br>/orgs/{org}/public_members/{username}<br>/orgs/{org}/memberships/{username}<br>/orgs/{org}/memberships/{username}<br>/orgs/{org}/invitations<br>/orgs/{org}/invitations<br>/user/memberships/orgs<br>/user/memberships/orgs/{org}<br>/orgs/{org}/outside_collaborators<br>/orgs/{org}/teams<br>/teams/{id}<br>/teams/{id}/teams<br>/teams/{id}/members<br>/teams/{id}/members/{username}<br>/teams/{id}/memberships/{username}<br>/teams/{id}/invitations<br>/teams/{id}/repos<br>/teams/{id}/repos/{owner}/{repo}<br>/user/teams<br>/orgs/{org}/hooks<br>/orgs/{org}/hooks/{id}<br>/orgs/{org}/blocks<br>/orgs/{org}/blocks/{username}<br>/repos/{owner}/{repo}/projects<br>/orgs/{org}/projects<br>/projects/{id}<br>/projects/columns/{column_id}/cards<br>/projects/columns/cards/{id}<br>/projects/{project_id}/columns<br>/projects/columns/{id}<br>/repos/{owner}/{repo}/pulls<br>/repos/{owner}/{repo}/pulls/{number}<br>/repos/{owner}/{repo}/pulls/{number}/commits<br>/repos/{owner}/{repo}/pulls/{number}/files<br>/repos/{owner}/{repo}/pulls/{number}/merge<br>/repos/{owner}/{repo}/pulls/{number}/reviews<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}/comments<br>/repos/{owner}/{repo}/pulls/{number}/comments<br>/repos/{owner}/{repo}/pulls/comments<br>/repos/{owner}/{repo}/pulls/comments/{id}<br>/repos/{owner}/{repo}/pulls/{number}/requested_reviewers<br>/repos/{owner}/{repo}/comments/{id}/reactions<br>/repos/{owner}/{repo}/issues/{number}/reactions<br>/repos/{owner}/{repo}/issues/comments/{id}/reactions<br>/repos/{owner}/{repo}/pulls/comments/{id}/reactions<br>/user/repos<br>/users/{username}/repos<br>/orgs/{org}/repos<br>/repositories<br>/repos/{owner}/{repo}/topics<br>/repos/{owner}/{repo}/contributors<br>/repos/{owner}/{repo}/languages<br>/repos/{owner}/{repo}/teams<br>/repos/{owner}/{repo}/tags<br>/repos/{owner}/{repo}/branches<br>/repos/{owner}/{repo}/branches/{branch}<br>/repos/{owner}/{repo}/branches/{branch}/protection<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews<br>/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users<br>/repos/{owner}/{repo}/collaborators<br>/repos/{owner}/{repo}/collaborators/{username}<br>/repos/{owner}/{repo}/collaborators/{username}/permission<br>/repos/{owner}/{repo}/comments<br>/repos/{owner}/{repo}/comments/{id}<br>/repos/{owner}/{repo}/commits/{ref}/comments<br>/repos/{owner}/{name}/community/profile<br>/repos/{owner}/{repo}/commits<br>/repos/{owner}/{repo}/commits/{sha}<br>/repos/{owner}/{repo}/commits/{ref}<br>/repos/{owner}/{repo}/commits/{sha}<br>/repos/{owner}/{repo}/compare/{baseCommitSuspensivePointsHeadCommit}<br>/repos/{owner}/{repo}/readme<br>/repos/{owner}/{repo}/contents/{path}<br>/repos/{owner}/{repo}/keys<br>/repos/{owner}/{repo}/keys/{id}<br>/repos/{owner}/{repo}/deployments<br>/repos/{owner}/{repo}/deployments/{deployment_id}<br>/repos/{owner}/{repo}/deployments/{id}/statuses<br>/repos/{owner}/{repo}/deployments/{id}/statuses/{status_id}<br>/repos/{owner}/{repo}/downloads<br>/repos/{owner}/{repo}/downloads/{id}<br>/repos/{owner}/{repo}/forks<br>/repos/{owner}/{repo}/invitations<br>/user/repository_invitations<br>/repos/{owner}/{repo}/pages<br>/repos/{owner}/{repo}/pages/builds<br>/repos/{owner}/{repo}/pages/builds/{id}<br>/repos/{owner}/{repo}/pages/builds/latest<br>/repos/{owner}/{repo}/releases<br>/repos/{owner}/{repo}/releases/{id}<br>/repos/{owner}/{repo}/releases/latest<br>/repos/{owner}/{repo}/releases/tags/{tag}<br>/repos/{owner}/{repo}/releases/{id}/assets<br>/repos/{owner}/{repo}/releases/assets/{id}<br>/repos/{owner}/{repo}/stats/contributors<br>/repos/{owner}/{repo}/stats/commit_activity<br>/repos/{owner}/{repo}/stats/code_frequency<br>/repos/{owner}/{repo}/stats/participation<br>/repos/{owner}/{repo}/stats/punch_card<br>/repos/{owner}/{repo}/commits/{ref}/statuses<br>/repos/{owner}/{repo}/commits/{ref}/status<br>/repos/{owner}/{repo}/traffic/popular/referrers<br>/repos/{owner}/{repo}/traffic/popular/paths<br>/repos/{owner}/{repo}/traffic/views<br>/repos/{owner}/{repo}/traffic/clones<br>/repos/{owner}/{repo}/hooks<br>/repos/{owner}/{repo}/hooks/{id}<br>/search/repositories<br>/search/commits<br>/search/code<br>/search/issues<br>/search/users<br>/gists<br>/gists/{id}/forks<br>/repos/{owner}/{repo}/git/blobs<br>/repos/{owner}/{repo}/git/commits<br>/repos/{owner}/{repo}/git/refs<br>/repos/{owner}/{repo}/git/tags<br>/repos/{owner}/{repo}/git/trees<br>/installations/{installation_id}/access_tokens<br>/repos/{owner}/{repo}/issues<br>/repos/{owner}/{repo}/issues/{number}/assignees<br>/repos/{owner}/{repo}/issues/{number}/comments<br>/repos/{owner}/{repo}/labels<br>/repos/{owner}/{repo}/issues/{number}/labels<br>/repos/{owner}/{repo}/milestones<br>/markdown<br>/markdown/raw<br>/orgs/{org}/teams<br>/orgs/{org}/hooks<br>/orgs/{org}/hooks/{id}/pings<br>/repos/{owner}/{repo}/projects<br>/orgs/{org}/projects<br>/projects/columns/{column_id}/cards<br>/projects/columns/cards/{id}/moves<br>/projects/{project_id}/columns<br>/projects/columns/{id}/moves<br>/repos/{owner}/{repo}/pulls<br>/repos/{owner}/{repo}/pulls/{number}/reviews<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}/events<br>/repos/{owner}/{repo}/pulls/{number}/comments<br>/repos/{owner}/{repo}/pulls/{number}/requested_reviewers<br>/repos/{owner}/{repo}/comments/{id}/reactions<br>/repos/{owner}/{repo}/issues/{number}/reactions<br>/repos/{owner}/{repo}/issues/comments/{id}/reactions<br>/repos/{owner}/{repo}/pulls/comments/{id}/reactions<br>/user/repos<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts<br>/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users<br>/repos/{owner}/{repo}/commits/{sha}/comments<br>/repos/{owner}/{repo}/keys<br>/repos/{owner}/{repo}/merges<br>/repos/{owner}/{repo}/pages/builds<br>/repos/{owner}/{repo}/releases<br>/repos/{owner}/{repo}/statuses/{sha}<br>/repos/{owner}/{repo}/hooks<br>/repos/{owner}/{repo}/hooks/{id}/tests<br>/repos/{owner}/{repo}/hooks/{id}/pings<br>/notifications/threads/{id}/subscription<br>/user/starred/{owner}/{repo}<br>/repos/{owner}/{repo}/subscription<br>/gists/{id}/star<br>/gists/{id}<br>/repos/{owner}/{repo}/git/refs/{ref}<br>/user/installations/{installation_id}/repositories/{repository_id}<br>/repos/{owner}/{repo}/issues/{number}/lock<br>/repos/{owner}/{repo}/issues/{number}/assignees<br>/repos/{owner}/{repo}/issues/comments/{id}<br>/repos/{owner}/{repo}/labels/{name}<br>/repos/{owner}/{repo}/issues/{number}/labels/{name}<br>/repos/{owner}/{repo}/issues/{number}/labels<br>/repos/{owner}/{repo}/milestones/{number}<br>/orgs/{org}/members/{username}<br>/orgs/{org}/public_members/{username}<br>/orgs/{org}/memberships/{username}<br>/orgs/{org}/outside_collaborators/{username}<br>/teams/{id}<br>/teams/{id}/memberships/{username}<br>/teams/{id}/repos/{owner}/{repo}<br>/orgs/{org}/hooks/{id}<br>/orgs/{org}/blocks/{username}<br>/projects/{id}<br>/projects/columns/cards/{id}<br>/projects/columns/{id}<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}<br>/repos/{owner}/{repo}/pulls/comments/{id}<br>/repos/{owner}/{repo}/pulls/{number}/requested_reviewers<br>/reactions/{id}<br>/repos/{owner}/{repo}<br>/repos/{owner}/{repo}/branches/{branch}/protection<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews<br>/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users<br>/repos/{owner}/{repo}/collaborators/{username}<br>/repos/{owner}/{repo}/comments/{id}<br>/repos/{owner}/{repo}/contents/{path}<br>/repos/{owner}/{repo}/keys/{id}<br>/repos/{owner}/{repo}/deployments<br>/repos/{owner}/{repo}/deployments/{id}/statuses<br>/repos/{owner}/{repo}/downloads/{id}<br>/repos/{owner}/{repo}/forks<br>/repos/{owner}/{repo}/invitations/{invitation_id}<br>/user/repository_invitations/{invitation_id}<br>/repos/{owner}/{repo}/releases/{id}<br>/repos/{owner}/{repo}/releases/assets/{id}<br>/repos/{owner}/{repo}/hooks/{id}<br>/notifications/threads/{id}<br>/gists/{id}<br>/repos/{owner}/{repo}/git/refs/{ref}<br>/repos/{owner}/{repo}/issues/{number}<br>/repos/{owner}/{repo}/issues/comments/{id}<br>/repos/{owner}/{repo}/labels/{name}<br>/repos/{owner}/{repo}/milestones/{number}<br>/orgs/{org}<br>/user/memberships/orgs/{org}<br>/teams/{id}<br>/orgs/{org}/hooks/{id}<br>/projects/{id}<br>/projects/columns/cards/{id}<br>/projects/columns/{id}<br>/repos/{owner}/{repo}/pulls/{number}<br>/repos/{owner}/{repo}/pulls/comments/{id}<br>/repos/{owner}/{repo}<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews<br>/repos/{owner}/{repo}/comments/{id}<br>/repos/{owner}/{repo}/invitations/{invitation_id}<br>/user/repository_invitations/{invitation_id}<br>/repos/{owner}/{repo}/releases/{id}<br>/repos/{owner}/{repo}/releases/assets/{id}<br>/repos/{owner}/{repo}/hooks/{id}<br>/notifications<br>/repos/{owner}/{repo}/notifications<br>/notifications/threads/{id}/subscription<br>/user/starred/{owner}/{repo}<br>/repos/{owner}/{repo}/subscription<br>/gists/{id}/star<br>/user/installations/{installation_id}/repositories/{repository_id}<br>/repos/{owner}/{repo}/issues/{number}/lock<br>/repos/{owner}/{repo}/issues/{number}/labels<br>/orgs/{org}/public_members/{username}<br>/orgs/{org}/memberships/{username}<br>/orgs/{org}/outside_collaborators/{username}<br>/teams/{id}/members/{username}<br>/teams/{id}/memberships/{username}<br>/teams/{id}/repos/{org}/{repo}<br>/orgs/{org}/blocks/{username}<br>/repos/{owner}/{repo}/pulls/{number}/merge<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}/dismissals<br>/repos/{owner}/{repo}/topics<br>/repos/{owner}/{repo}/branches/{branch}/protection<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users<br>/repos/{owner}/{repo}/collaborators/{username}<br>/repos/{owner}/{repo}/contents/{path}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### List Issues

This flow step will send a request to the endpoint to obtain all user issues.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

### List Repositories for the authenticated user

This flow step will send a request to githubApp to get all the repositories that the authenticated user has explicit permission to access.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

### Create a new issue for a given repository

This flow step will send a request to githubApp to create a issue in the repo selected.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Owner</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Owner or creator of the repository, can be the name of the organization that owns it.            
        </td>
    </tr>
    <tr>
        <td>Repository</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Name of the repository where the issue will be created.
        </td>
    </tr>
    <tr>
        <td>Title of the Issue</td>
        <td>text</td>
        <td>yes</td>
        <td> Issue created by Flow </td>
        <td>Always</td>
        <td>
            Title principal of the issue.
        </td>
    </tr>
    <tr>
        <td>Body of the Issue</td>
        <td>text</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Description of the issue.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

</details>