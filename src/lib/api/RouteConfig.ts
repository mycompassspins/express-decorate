/**
 * Created by Justin on 8/21/16.
 */

import express = require('express');
import { IRequest, IResponse, INextFunction } from './TestMiddleware'

export function RouteConfig(app:express.Application):void
{
	app.route('/test')
		.get((req:IRequest, res:IResponse, next:INextFunction) =>
		{
			return res.json({ success: true, message: 'Successfully served route /test' });
		});
}
