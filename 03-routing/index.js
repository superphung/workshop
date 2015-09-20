
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
    if (this.request.url === '/') this.body = 'hello world';
    yield next;
});

app.use(function* (next) {
    if (this.request.url === '/404') this.body = 'page not found';
    yield next;
});

app.use(function* () {
    if (this.request.url === '/500') this.body = 'internal server error';
});
