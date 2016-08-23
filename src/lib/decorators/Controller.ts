/**
 * Created by Justin on 8/21/16.
 */

import { Destruct, ROUTE_PREFIX } from './'

export interface IControllerRoute
{
	method:string|string[];
	mountpath:string|string[];
	path:string|string[];
	middleware:string|string[];
	fnName:string;
}

/**
 * @usage @Controller(path: optional, ...middleware: optional)
 * @param args
 * @returns {(target:any)=>void}
 * @constructor
 */
export function Controller(...args):Function
{
	// validate ...args
	const [ctrlPath, ctrlMiddleware] = Destruct(args);

	return (target):void =>
	{
		// Add a $routes property to the class's prototype
		const proto = target.prototype;

		// Filter prototype's properties by those prefixed with $$route_
		// and attach method, paths, middleware and controller action to our $route property
		proto.$routes = Object.getOwnPropertyNames(proto)
			.filter((prop:string) => prop.indexOf(ROUTE_PREFIX) === 0)
			.map((prop:string):IControllerRoute =>
			{
				const { method, path, middleware: actionMiddleware } = proto[prop];

				let mountpath:string = `${ctrlPath}`,
					middleware:string|string[] = ctrlMiddleware.concat(actionMiddleware),
					fnName:string = prop.substring(ROUTE_PREFIX.length),
					route:IControllerRoute;

				// We need mountpath, mountpath and path map to the originalUrl, baseUrl and path on Express's request object
				route = { method: method === 'del' ? 'delete' : method, mountpath, path, middleware, fnName };
				return route;
			})
	}
}
