/**
 * Created by Justin on 8/21/16.
 */

import { Destruct, ROUTE_PREFIX, IControllerRoute } from './'

/**
 * @usage @Route(method, path: optional, ...middleware: optional)
 * @param method
 * @param params
 * @param args
 * @returns {(target:any, name:any, descriptor:any)=>void}
 * @constructor
 */
export function Route(method:string, ...args)
{
	if (typeof method !== 'string')
		throw new Error('The first argument must be an HTTP method');

	const [path, middleware] = Destruct(args);

	return (target, name, descriptor):void =>
	{
		target[`${ROUTE_PREFIX}${name}`] = { method, path, middleware };
	}
}

// Individual wrappers for @Route()
export const GET = Route.bind(null, 'get');
export const POST = Route.bind(null, 'post');
export const PUT = Route.bind(null, 'put');
export const DELETE = Route.bind(null, 'delete');
export const ALL = Route.bind(null, 'all');
