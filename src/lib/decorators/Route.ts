/**
 * Created by Justin on 8/21/16.
 */

import { Destruct, ROUTE_PREFIX } from './ValidatePaths'

/**
 * @usage @Route(method, path: optional, ...middleware: optional)
 * @param method
 * @param params
 * @param args
 * @returns {(target:any, name:any, descriptor:any)=>void}
 * @constructor
 */
function Route(method:string, ...args:any[])
{
	if (typeof method !== 'string')
		throw new Error('The first argument must be an HTTP method');

	const [path, middleware] = Destruct(args);

	return (target:any, name:string, descriptor:any):void =>
	{
		target[`${ROUTE_PREFIX}${name}`] = { method, path, middleware };
	}
}

function WsRoute(...args:any[])
{
	const [path, middleware] = Destruct(args);

	return (target:any, name:string, descriptor:any):void =>
	{
		target[`${ROUTE_PREFIX}${name}`] = { path, middleware };
	}
}

// Individual wrappers for @Route()
const GET:Function = Route.bind(null, 'get');
const POST:Function = Route.bind(null, 'post');
const PUT:Function = Route.bind(null, 'put');
const DELETE:Function = Route.bind(null, 'delete');
const ALL:Function = Route.bind(null, 'all');
const WS:Function = WsRoute.bind(null);

export { Route, WsRoute, GET, POST, PUT, DELETE, ALL, WS }
