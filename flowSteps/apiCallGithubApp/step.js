/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 * {text} method, This is used to config method.
 * {text} url, This is used to config external URL.
 * {Array[string]} pathVariables, This is used to config path variables.
 * {Array[string]} headers, This is used to config headers.
 * {Array[string]} params, This is used to config params.
 * {string} body, This is used to send body request.
 * {string} callbackData, This is used to send callback data.
 * {text} callbacks, This is used to send callbacks.
 * {boolean} followRedirects, This is used to config follow redirects.
 * {boolean} download, This is used to config download.
 * {boolean} fullResponse, This is used to config full response.
 * {number} connectionTimeout, Read timeout interval, in milliseconds.
 * {number} readTimeout, Connect timeout interval, in milliseconds.
 */
step.apiCallGithubApp = function (inputs) {

	var inputsLogic = {
		headers: inputs.headers || [],
		params: inputs.params || [],
		body: inputs.body || {},
		callbackData: inputs.callbackData || "",
		callbacks: inputs.callbacks || "",
		followRedirects: inputs.followRedirects || false,
		download: inputs.download || false,
		fileName: inputs.fileName || "",
		fullResponse: inputs.fullResponse || false,
		connectionTimeout: inputs.connectionTimeout || 5000,
		readTimeout: inputs.readTimeout || 60000,
		events: inputs.events || "",
		url: inputs.url || {
			urlValue: "",
			paramsValue: [],
			method: ""
		},
		action: inputs.action || ""
	};

	inputsLogic.headers = isObject(inputsLogic.headers) ? inputsLogic.headers : stringToObject(inputsLogic.headers);
	inputsLogic.params = isObject(inputsLogic.params) ? inputsLogic.params : stringToObject(inputsLogic.params);
	inputsLogic.body = isObject(inputsLogic.body) ? inputsLogic.body : JSON.parse(inputsLogic.body);

	var strCallback= `inputsLogic.callbacks = { ${inputsLogic.events}  : function(event, callbackData) { ${inputsLogic.callbacks} }}`;
	inputsLogic.callbacks = inputsLogic.callbacks ?
		eval(strCallback) :
		inputsLogic.callbacks;

	inputsLogic.callbackData = inputsLogic.callbackData ? {record: inputsLogic.callbackData} : inputsLogic.callbackData;

	var options = {
		path: parse(inputsLogic.url.urlValue, inputsLogic.url.paramsValue),
		params: inputsLogic.params,
		headers: inputsLogic.headers,
		body: inputsLogic.body,
		followRedirects : inputsLogic.followRedirects,
		forceDownload : inputsLogic.events === "fileDownloaded" ? true : inputsLogic.download,
		downloadSync : inputsLogic.events === "fileDownloaded" ? false : inputsLogic.download,
		fileName: inputsLogic.fileName,
		fullResponse : inputsLogic.fullResponse,
		connectionTimeout: inputsLogic.connectionTimeout,
		readTimeout: inputsLogic.readTimeout,
		defaultCallback: !!inputsLogic.events
	};

	switch (inputsLogic.url.method.toUpperCase()) {
		case 'GET':
			return endpoint._get(options, inputsLogic.callbackData, inputsLogic.callbacks);
		case 'POST':
			return endpoint._post(options, inputsLogic.callbackData, inputsLogic.callbacks);
		case 'DELETE':
			return endpoint._delete(options, inputsLogic.callbackData, inputsLogic.callbacks);
		case 'PUT':
			return endpoint._put(options, inputsLogic.callbackData, inputsLogic.callbacks);
		case 'CONNECT':
			return endpoint._connect(options, inputsLogic.callbackData, inputsLogic.callbacks);
		case 'HEAD':
			return endpoint._head(options, inputsLogic.callbackData, inputsLogic.callbacks);
		case 'OPTIONS':
			return endpoint._options(options, inputsLogic.callbackData, inputsLogic.callbacks);
		case 'PATCH':
			return endpoint._patch(options, inputsLogic.callbackData, inputsLogic.callbacks);
		case 'TRACE':
			return endpoint._trace(options, inputsLogic.callbackData, inputsLogic.callbacks);
	}



	return null;
};

var parse = function (url, pathVariables){

	var regex = /{([^}]*)}/g;

	if (!url.match(regex)){
		return url;
	}

	if(!pathVariables){
		sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
		throw new Error('Error please contact support.');
	}

	url = url.replace(regex, function(m, i) {
		return pathVariables[i] ? pathVariables[i] : m;
	})

	return url;
}
var isObject = function (obj) {
	return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var stringToObject = function (obj) {
	if (!!obj){
		var keyValue = obj.toString().split(',');
		var parseObj = {};
		for(var i = 0; i < keyValue.length; i++) {
			parseObj[keyValue[i].split('=')[0]] = keyValue[i].split('=')[1]
		}
		return parseObj;
	}
	return null;
};