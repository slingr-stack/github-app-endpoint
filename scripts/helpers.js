endpoint.syncInstallations = function() {
    return endpoint._syncInstallations({});
};

endpoint.app = endpoint.app || {};

endpoint.app.get = function (url) {
    var options = checkHttpOptions(url, {});
    if (options.params && options.params.per_page && options.params.callback) {
        var page = 1;
        var morePages = false;
        var count = 0;
        do {
            options.params.page = page;
            var items = endpoint._appGet(options);
            if (items) {
                for (var i in items) {
                    callback(items[i]);
                    count++;
                    if (options.params.max_results && count >= options.params.max_results) {
                        break;
                    }
                }
            }
            if (!items || items.length < options.params.per_page) {
                morePages = false;
            } else {
                morePages = true;
            }
            page++;
        } while (morePages);
    } else {
        return endpoint._appGet(options);
    }
};

endpoint.app.post = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._appPost(options);
};

endpoint.app.patch = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._appPatch(options);
};

endpoint.app.put = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._appPut(options);
};

endpoint.app.delete = function (url) {
    options = checkHttpOptions(url, {});
    return endpoint._appDelete(options);
};

endpoint.user = endpoint.user || {};

endpoint.user.get = function (url) {
    var options = checkHttpOptions(url, {});
    if (options.params && options.params.per_page && options.params.callback) {
        var page = 1;
        var morePages = false;
        var count = 0;
        do {
            options.params.page = page;
            var items = endpoint._userGet(options);
            if (items) {
                for (var i in items) {
                    callback(items[i]);
                    count++;
                    if (options.params.max_results && count >= options.params.max_results) {
                        break;
                    }
                }
            }
            if (!items || items.length < options.params.per_page) {
                morePages = false;
            } else {
                morePages = true;
            }
            page++;
        } while (morePages);
    } else {
        return endpoint._userGet(options);
    }
};

endpoint.user.post = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._userPost(options);
};

endpoint.user.patch = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._userPatch(options);
};

endpoint.user.put = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._userPut(options);
};

endpoint.user.delete = function (url) {
    var options = checkHttpOptions(url, {});
    return endpoint._userDelete(options);
};

endpoint.install = endpoint.install || {};

endpoint.install.get = function (url) {
    var options = checkHttpOptions(url, {});
    if (options.params && options.params.per_page && options.params.callback) {
        var page = 1;
        var morePages = false;
        var count = 0;
        var callback = options.params.callback;
        var maxResults = options.params.max_results;
        delete options.params.callback;
        delete options.params.max_results;
        do {
            options.params.page = page;
            var items = endpoint._installGet(options);
            if (items) {
                for (var i in items) {
                    callback(items[i]);
                    count++;
                    if (maxResults && count >= maxResults) {
                        break;
                    }
                }
            }
            if (!items || items.length < options.params.per_page) {
                morePages = false;
            } else {
                morePages = true;
            }
            page++;
        } while (morePages);
    } else {
        return endpoint._installGet(options);
    }
};

endpoint.install.post = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._installPost(options);
};

endpoint.install.patch = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._installPatch(options);
};

endpoint.install.put = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._installPut(options);
};

endpoint.install.delete = function (url) {
    var options = checkHttpOptions(url, {});
    return endpoint._installDelete(options);
};

endpoint.utils = endpoint.utils || {};

endpoint.utils.parseTimestamp = function(dtstr) {
    if (!dtstr) {
        return null;
    }
    var dt = dtstr.split(/[: T\-]/).map(parseFloat);
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


/////////////////////////////////////
//  Private helpers
////////////////////////////////////

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