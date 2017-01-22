/**
 * Created by Justin on 8/21/16.
 */
"use strict";
const ValidatePaths_1 = require('./ValidatePaths');
/**
 * @usage @Controller(path: optional, ...middleware: optional)
 * @param args
 * @returns {(target:any)=>void}
 * @constructor
 */
function Controller(...args) {
    // validate ...args
    const [ctrlPath, ctrlMiddleware] = ValidatePaths_1.Destruct(args), ROUTE_PREFIX = '$$route__';
    return (target) => {
        // Add a $routes property to the class's prototype
        const proto = target.prototype;
        // Filter prototype's properties by those prefixed with $$route_
        // and attach method, paths, middleware and controller action to our $route property
        proto.$routes = Object.getOwnPropertyNames(proto)
            .filter((prop) => prop.indexOf(ROUTE_PREFIX) === 0)
            .map((prop) => {
            const { method, path, middleware: actionMiddleware } = proto[prop];
            let mountpath = `${ctrlPath}`, middleware = ctrlMiddleware.concat(actionMiddleware), fnName = prop.substring(ROUTE_PREFIX.length), route;
            // We need mountpath - mountpath and path map to the originalUrl, baseUrl and path on Express's request object
            route = { method: method === 'del' ? 'delete' : method, mountpath, path, middleware, fnName };
            return route;
        });
    };
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map