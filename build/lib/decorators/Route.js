/**
 * Created by Justin on 8/21/16.
 */
"use strict";
const ValidatePaths_1 = require('./ValidatePaths');
/**
 * @usage @Route(method, path: optional, ...middleware: optional)
 * @param method
 * @param args
 * @returns {(target:any, name:any, descriptor:any)=>void}
 * @constructor
 */
function Route(method, ...args) {
    if (typeof method !== 'string')
        throw new Error('The first argument must be an HTTP method');
    const [path, middleware] = ValidatePaths_1.Destruct(args), ROUTE_PREFIX = '$$route__';
    return (target, name, descriptor) => {
        target[`${ROUTE_PREFIX}${name}`] = { method, path, middleware };
    };
}
exports.Route = Route;
// Individual wrappers for @Route()
const GET = Route.bind(null, 'get');
exports.GET = GET;
const POST = Route.bind(null, 'post');
exports.POST = POST;
const PUT = Route.bind(null, 'put');
exports.PUT = PUT;
const DELETE = Route.bind(null, 'delete');
exports.DELETE = DELETE;
const ALL = Route.bind(null, 'all');
exports.ALL = ALL;
const ALT = Route.bind(null, 'alternate');
exports.ALT = ALT;
//# sourceMappingURL=Route.js.map