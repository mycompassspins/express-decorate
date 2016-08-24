"use strict";
const util_1 = require('util');
function Destruct(args) {
    let hasPath = typeof args[0] === 'string' || (util_1.isArray(args[0]) && _validatePathsArray(args[0])), path = hasPath ? args[0] : '', middleware = hasPath ? args.slice(1) : args;
    if (middleware.some(m => typeof m !== 'function'))
        throw new Error('Middleware must be function');
    return [path, middleware];
}
exports.Destruct = Destruct;
function _validatePathsArray(paths) {
    paths.forEach((path) => {
        if (path.charAt(0) !== '/') {
            console.warn(`"${path}" is not a valid path`);
            return false;
        }
    });
    return true;
}
//# sourceMappingURL=ValidatePaths.js.map