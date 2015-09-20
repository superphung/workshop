
var koa = require('koa');

/**
 * This is a promisified version of zlib's gzip function,
 * allowing you to simply `yield` it without "thunkifying" it.
 *
 *   app.use(function* (next) {
 *     this.response.set('Content-Encoding', 'gzip');
 *     this.response.body = yield gzip('something');
 *   })
 */
var gzip = require('mz/zlib').gzip;

var app = module.exports = koa();

app.use(function* () {
    console.log(this.acceptsEncodings('gzip'));
    if (this.acceptsEncodings('gzip')) {
	this.response.set('Content-Encoding', 'gzip');
	this.response.body = yield gzip('hello world');
    }
    else if (this.acceptsEncodings('identity')) {
	this.body = 'hello world';
    }
})
