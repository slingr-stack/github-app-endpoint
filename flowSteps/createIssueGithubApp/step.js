/**
 * This flow step will send a request to githubApp to create a issue in the repo selected.
 *
 * @param {object} inputs
 * {text} owner
 * {text} repo
 * {text} title
 * {text} body
 *
 */
step.createIssueGithubApp = function (inputs) {

	var inputsLogic = {
		owner: inputs.owner,
		repo: inputs.repositories,
		body: {
			title: inputs.title || "Issue created by Flow",
			body: inputs.body
		}
	};

	return endpoint.repos.issues.post(inputsLogic.owner, inputsLogic.repo, inputsLogic.body);
};