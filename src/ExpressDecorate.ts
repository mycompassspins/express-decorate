/**
 * Created by Justin on 8/16/16.
 */

///<reference path="../typings/index.d.ts" />

import express = require('express');
import { FileSystemHelper as fsHelper } from './lib/helpers/FileSystemHelper'
import { BaseController } from './lib/api/BaseController'
import { Router } from 'express'

const util = require('util');
const chalk = require('chalk');

export interface IExpressDecorateOptions
{
    ctrlDir:string;
    extension?:string;
    ctrlLoadRecursive?:boolean;
    ctrlIgnore?:RegExp;
    mergeParams?:boolean;
	routeConfig?:Function;
	debug?:boolean;
}

export class ExpressDecorate
{
    constructor(private app:express.Application, private opts:IExpressDecorateOptions)
    {
    	// Set options defaults
		this._setDefaults(app);

		// Load and instantiate controllers
        this._loadControllers(app);
    }

    private _setDefaults(app:express.Application):void
	{
		if (!this.opts.hasOwnProperty('extension'))
			this.opts.extension = 'js';

		if (!this.opts.hasOwnProperty('ctrlLoadRecursive'))
			this.opts.ctrlLoadRecursive = true;

		if (this.opts.hasOwnProperty('ctrlIgnore'))
		{
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
    private _loadControllers(app:any):void
    {
        const opts = this.opts,
            EXT_PATTERN:RegExp = /\.[t|j]s?/,
            CTRL_PATTERN:RegExp = /Controller/,
            MAP_PATTERN:RegExp = /\.map$/,
            API_DIR:string = opts.ctrlDir,
			IGNORE_PATTERN:RegExp = opts.ctrlIgnore || null;

        try
        {
            // Get list of files in controllers directory
            let apiContents:string[] = fsHelper.GetDirectoryContents(API_DIR, opts.ctrlLoadRecursive);

            apiContents.filter((file:any) =>
            {
                return file.fileName.indexOf(opts.extension) !== -1;
            }).forEach((file:any) =>
            {
                // Get file name without extension and make sure BaseController is skipped
                let fileName:string = file.fileName
                    .replace(EXT_PATTERN, '')
                    .replace('BaseController', '');

                // If the file is a Controller and not a .map file
                if (
                	CTRL_PATTERN.test(fileName) &&
					!MAP_PATTERN.test(fileName) &&
					(!IGNORE_PATTERN || !IGNORE_PATTERN.test(fileName))
				)
                {
					// Construct relative path for require() call
                    let path = file.fullPath
                        .replace(`${API_DIR}/`, '')
                        .replace(file.fileName, '')
                        .replace(opts.ctrlIgnore, '');

                    try
                    {
                        // Instantiate the controller
                        let	ctrlConstructor:Object = require(`${API_DIR}/${path}/${fileName}`),
                            ctrlName:string = Object.keys(ctrlConstructor)[0],
                            controller:BaseController = new ctrlConstructor[ctrlName];

						// $routes property is added to each controller via the EndPointRouting decorators
                        // Loop the $routes and attach each to the proper controller action
                        for (const { method, mountpath, path, middleware, fnName } of controller.$routes)
                        {
                            // Set the mountpath for Express
                            app.use(
								mountpath,
								this._routerAdd(opts, method, mountpath, path, middleware, fnName, controller)
							);
                        }

						// DEBUG: log controller routes
						if (opts.debug)
						{
							this._constructLogMsg(null, 'debug', opts, `Routes for ${ctrlName}`);
							controller.$routes.forEach((route:any) => console.log(util.inspect(route)));
						}
                    }
                    catch(e)
                    {
                    	this._constructLogMsg(e, 'error', this.opts, `configuring routes for ${fileName}:`);
                    }
                }
            });
        }
        catch(e)
        {
        	this._constructLogMsg(e, 'error', this.opts);
        }
    }

    private _routerAdd(opts:IExpressDecorateOptions, method:string, mountpath:string, path:string,
							  middleware:any[], fnName:string, controller:BaseController):Router
	{
		// mergeParams allows us to have a path parameter in the mountpath that will then show
		// in the Express request object via req.params
		let router:Router = Router({ mergeParams: opts.mergeParams });

		// Attach router, middleware and controller action to mountpath
		router[method](path, ...middleware, controller[fnName]);
		return router;
	}

	private _constructLogMsg(e:any, type:string, opts:IExpressDecorateOptions, customMsg?:string):any
	{
		let chalk = require('chalk'),
			color = type === 'error' ? 'red' : type === 'debug' ? 'cyan' : 'blue',
			flag = `[${type.toUpperCase()}] `,
			msg = customMsg ? `${customMsg}:` : '',
			error:any = '';

		if (e) error = opts.debug ? e : e.message;

		return console.log(chalk[color](flag), msg, error);
	}
}
