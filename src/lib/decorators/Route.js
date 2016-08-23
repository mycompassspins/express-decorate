"use strict";
const _1 = require('./');
function Route(method, ...args) {
    if (typeof method !== 'string')
        throw new Error('The first argument must be an HTTP method');
    const [path, middleware] = _1.Destruct(args);
    return (target, name, descriptor) => {
        target[`${_1.ROUTE_PREFIX}${name}`] = { method: method, path: path, middleware: middleware };
    };
}
exports.Route = Route;
exports.GET = Route.bind(null, 'get');
exports.POST = Route.bind(null, 'post');
exports.PUT = Route.bind(null, 'put');
exports.DELETE = Route.bind(null, 'delete');
exports.ALL = Route.bind(null, 'all');
//# sourceMappingURL=Route.js.map