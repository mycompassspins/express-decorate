"use strict";
const _1 = require('./');
function Controller(...args) {
    const [ctrlPath, ctrlMiddleware] = _1.Destruct(args);
    return (target) => {
        const proto = target.prototype;
        proto.$routes = Object.getOwnPropertyNames(proto)
            .filter((prop) => prop.indexOf(_1.ROUTE_PREFIX) === 0)
            .map((prop) => {
            const { method, path, middleware: actionMiddleware } = proto[prop];
            let mountpath = `${ctrlPath}`, middleware = ctrlMiddleware.concat(actionMiddleware), fnName = prop.substring(_1.ROUTE_PREFIX.length), route;
            route = { method: method === 'del' ? 'delete' : method, mountpath: mountpath, path: path, middleware: middleware, fnName: fnName };
            return route;
        });
    };
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map