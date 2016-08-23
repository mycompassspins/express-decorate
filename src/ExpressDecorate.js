"use strict";
const FileSystemHelper_1 = require('./lib/helpers/FileSystemHelper');
const express_1 = require('express');
const chalk = require('chalk');
class ExpressDecorate {
    constructor(app, opts) {
        this.app = app;
        this.opts = opts;
        this._setDefaults(app);
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
    _loadControllers(app) {
        const opts = this.opts, EXT_PATTERN = /\.[t|j]s?/, CTRL_PATTERN = /Controller/, MAP_PATTERN = /\.map$/, API_DIR = opts.ctrlDir, IGNORE_PATTERN = opts.ctrlIgnore || null;
        try {
            let apiContents = FileSystemHelper_1.FileSystemHelper.GetDirectoryContents(API_DIR, opts.ctrlLoadRecursive);
            apiContents.filter((file) => {
                return file.fileName.indexOf(opts.extension) !== -1;
            }).forEach((file) => {
                let fileName = file.fileName
                    .replace(EXT_PATTERN, '')
                    .replace('BaseController', '');
                if (CTRL_PATTERN.test(fileName) &&
                    !MAP_PATTERN.test(fileName) &&
                    (!IGNORE_PATTERN || !IGNORE_PATTERN.test(fileName))) {
                    let path = file.fullPath
                        .replace(`${API_DIR}/`, '')
                        .replace(file.fileName, '')
                        .replace(opts.ctrlIgnore, '');
                    try {
                        let ctrlConstructor = require(`${API_DIR}/${path}/${fileName}`), ctrlName = Object.keys(ctrlConstructor)[0], controller = new ctrlConstructor[ctrlName];
                        for (const { method, mountpath, path, middleware, fnName } of controller.$routes) {
                            app.use(mountpath, this._routerAdd(opts, method, mountpath, path, middleware, fnName, controller));
                        }
                    }
                    catch (e) {
                        this._constructErrorMsg(e, 'error', this.opts, `configuring routes for ${fileName}:`);
                    }
                }
            });
        }
        catch (e) {
            this._constructErrorMsg(e, 'error', this.opts);
        }
    }
    _routerAdd(opts, method, mountpath, path, middleware, fnName, controller) {
        let router = express_1.Router({ mergeParams: opts.mergeParams });
        router[method](path, ...middleware, controller[fnName]);
        return router;
    }
    _constructErrorMsg(e, type, opts, customMsg) {
        let chalk = require('chalk'), color = type === 'error' ? 'red' : type === 'debug' ? 'cyan' : 'blue', flag = `[${type.toUpperCase()}] `, error = opts.debug ? e : e.message, msg = customMsg ? `${customMsg}:` : '';
        return console.log(chalk[color](flag), msg, error);
    }
}
exports.ExpressDecorate = ExpressDecorate;
//# sourceMappingURL=ExpressDecorate.js.map