/**
 * Created by Justin on 8/21/16.
 */
"use strict";
const util_1 = require('util');
const ErrorMessageHelper_1 = require('../helpers/ErrorMessageHelper');
/**
 * Make sure our paths and middleware are of the right types
 * @param args
 * @returns {string|any[]}
 * @private
 */
function Destruct(args) {
    let hasPath = typeof args[0] === 'string' || (util_1.isArray(args[0]) && _validatePathsArray(args[0])), path = hasPath ? args[0] : '', middleware = hasPath ? args.slice(1) : args;
    middleware.forEach((m) => {
        if (typeof m !== 'function') {
            throw `Expected ${m} to be a function but got "${typeof m}"`;
        }
    });
    return [path, middleware];
}
exports.Destruct = Destruct;
/**
 * If array of paths is passed to @Route(), make sure they are actually paths
 * @param paths
 * @returns {boolean}
 * @private
 */
function _validatePathsArray(paths) {
    paths.forEach((path) => {
        if (path.charAt(0) !== '/') {
            ErrorMessageHelper_1.Log(null, 'warn', null, `"${path}" is not a valid path`);
            return false;
        }
    });
    return true;
}
//# sourceMappingURL=ValidatePaths.js.map