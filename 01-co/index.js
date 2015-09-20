
var fs = require('fs');

/**
 * Create a yieldable version of `fs.stat()`:
 *
 *   app.use(function* () {
 *     var stats = yield exports.stat(__filename);
 *   })
 *
 * Hint: you can return a yieldable.
 */

exports.stat = function (filename) {
    return new Promise(function (fulfill, reject) {
	fs.stat(filename, function (err, res) {
	    if (err) reject(err);
	    else fulfill(res);
	});
    });
};

/**
 * Create a yieldable version of `fs.exists()`:
 *
 *
 *   app.use(function* () {
 *     var exists = yield exports.exists(__filename);
 *   })
 *
 * Note that `fs.exists()` simply wraps `fs.stat()`.
 * If `fs.stat()` does not return an error, then the file exists!
 *
 * Hint: don't use fs.exists() as it's not a proper callback.
 * In other words, the first argument returned in its callback
 * is not an error object, unlike node callbacks.
 */

exports.exists = function (filename) {
    return new Promise(function (fulfill, reject) {
	fs.stat(filename, function (err, res) {
	    if (res) fulfill(true);
	    else fulfill(false);
	});
    });
};
