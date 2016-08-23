/**
 * Created by Justin on 8/21/16.
 */

import { ExpressDecorate, IExpressDecorateOptions } from '../../ExpressDecorate'
import { RouteConfig } from './RouteConfig'
import express = require('express');
import http = require('http');
let bodyParser = require('body-parser');
let morgan = require('morgan');

/**
 * Main Express application class - in charge of starting/stopping server and all app configurations
 * @class
 * @usage
 * import { app, APP, SERVER } from ./index
 */
export class Application
{
	public expressApp:express.Application = express();
	public server:http.Server;
	public opts:IExpressDecorateOptions = { ctrlDir: `${__dirname}`, routeConfig: RouteConfig, debug: true };
	public expressDecorate:ExpressDecorate;

	constructor(private port:number){}

	public Config()
	{
		this.expressApp.use(bodyParser.json());
		this.expressApp.use(bodyParser.urlencoded({ extended: true }));
		this.expressApp.use(morgan('dev'));
		this.expressDecorate = new ExpressDecorate(this.expressApp, this.opts);
	}

	public Start()
	{
		this.server = this.expressApp.listen(this.port, () =>
		{
			let site:string = `http://localhost:${this.port}`;
			console.info(`Revelry and awe are afoot at ${site} in development mode.`);
		});
	}

	public Stop()
	{
		this.server.close(() =>
		{
			console.warn('Stopping Express Server . . .');

			// Right now the only thing calling app.Stop() is one of our specs
			// Give the spec plenty of time to complete before killing the process
			// TODO: determine if this is an acceptable solution
			setTimeout(() =>
			{
				console.info('Server Stopped');
				process.exit(0);
			}, 1500);
		});
	}
}

