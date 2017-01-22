/**
 * Created by Justin on 8/27/16.
 */
"use strict";
const FileSystemHelper_1 = require('./helpers/FileSystemHelper');
const ErrorMessageHelper_1 = require('./helpers/ErrorMessageHelper');
const express_1 = require('express');
const util = require('util');
const chalk = require('chalk');
class ExpressDecorate {
    constructor(app, opts) {
        this.app = app;
        this.opts = opts;
        // Set options defaults
        this._setDefaults(app);
        // Load and instantiate controllers
        this._loadControllers(app);
    }
    _setDefaults(app) {
        if (!this.opts.hasOwnProperty('extension'))
            this.opts.extension = 'js';
        if (!this.opts.hasOwnProperty('ctrlLoadRecursive'))
            this.opts.ctrlLoadRecursive = true;
        if (this.opts.hasOwnProperty('ctrlIgnore')) {
            this.opts.ctrlIgnore = this.opts.ctrlIgnore instanceof RegExp ?
                this.opts.ctrlIgnore : new RegExp(`${this.opts.ctrlIgnore}`);
        }
        if (!this.opts.hasOwnProperty('mergeParams'))
            this.opts.mergeParams = true;
        if (this.opts.hasOwnProperty('routeConfig'))
            this.opts.routeConfig(app);
        if (!this.opts.hasOwnProperty('debug'))
            this.opts.debug = false;
    }
    /**
     * Load and instantiate API controllers and configure routes for each
     * @param app
     * @returns {void}
     * @private
     */
    _loadControllers(app) {
        const opts = this.opts, EXT_PATTERN = /\.[t|j]s?/, CTRL_PATTERN = /controller/, MAP_PATTERN = /\.map$/, API_DIR = opts.ctrlDir, IGNORE_PATTERN = opts.ctrlIgnore || null;
        try {
            // Get list of files in controllers directory
            let apiContents = FileSystemHelper_1.FileSystemHelper.GetDirectoryContents(API_DIR, opts.ctrlLoadRecursive);
            apiContents.filter((file) => {
                return file.fileName.indexOf(opts.extension) !== -1;
            }).forEach((file) => {
                // Get file name without extension and make sure BaseController is skipped
                let fileName = file.fileName
                    .replace(EXT_PATTERN, '')
                    .replace('BaseController', '');
                // If the file is a Controller and not a .map file
                if (CTRL_PATTERN.test(fileName.toLowerCase()) &&
                    !MAP_PATTERN.test(fileName) &&
                    (!IGNORE_PATTERN || !IGNORE_PATTERN.test(fileName))) {
                    // Construct relative path for require() call
                    let path = file.fullPath
                        .replace(`${API_DIR}/`, '')
                        .replace(file.fileName, '')
                        .replace(opts.ctrlIgnore, '');
                    try {
                        // Instantiate the controller
                        let ctrlConstructor = require(`${API_DIR}/${path}/${fileName}`), ctrlName = Object.keys(ctrlConstructor)[0], controller = new ctrlConstructor[ctrlName];
                        // $routes property is added to each controller via the EndPointRouting decorators
                        // Loop the $routes and attach each to the proper controller action
                        for (const { method, mountpath, path, middleware, requiredBodyParams, fnName } of controller.$routes) {
                            // Set the mountpath for Express
                            app.use(mountpath, this._routerAdd(opts, method, mountpath, path, middleware, fnName, controller));
                        }
                        // DEBUG: log controller routes
                        if (opts.debug) {
                            ErrorMessageHelper_1.Log(null, 'debug', opts, `Routes for ${ctrlName}`);
                            controller.$routes.forEach((route) => console.log(util.inspect(route)));
                        }
                    }
                    catch (e) {
                        ErrorMessageHelper_1.Log(e, 'error', this.opts, `configuring routes for ${fileName}`);
                    }
                }
            });
        }
        catch (e) {
            ErrorMessageHelper_1.Log(e, 'error', this.opts);
        }
    }
    _routerAdd(opts, method, mountpath, path, middleware, fnName, controller) {
        // mergeParams allows us to have a path parameter in the mountpath that will then show
        // in the Express request object via req.params
        let router = express_1.Router({ mergeParams: opts.mergeParams });
        // Attach router, middleware and controller action to mountpath
        router[method === 'alternate' ? opts.alternateMethod : method](path, ...middleware, controller[fnName]);
        return router;
    }
}
exports.ExpressDecorate = ExpressDecorate;
//# sourceMappingURL=ExpressDecorate.js.map