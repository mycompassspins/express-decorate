/**
 * Created by Justin on 8/27/16.
 */

import { Destruct, ROUTE_PREFIX } from './ValidatePaths'

export interface IWebSocketRoute
{
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
export function WebSocketController(...args:any[]):Function
{
	// validate ...args
	const [ctrlPath, ctrlMiddleware] = Destruct(args);

	return (target:ObjectConstructor):void =>
	{
		// Add a $routes property to the class's prototype
		const proto:any = target.prototype;

		// Filter prototype's properties by those prefixed with $$route_
		// and attach method, paths, middleware and controller action to our $route property
		proto.$routes = <IWebSocketRoute[]>Object.getOwnPropertyNames(proto)
			.filter((prop:string) => prop.indexOf(ROUTE_PREFIX) === 0)
			.map((prop:string):IWebSocketRoute =>
			{
				const { path, middleware: actionMiddleware } = proto[prop];

				let mountpath:string = `${ctrlPath}`,
					middleware:string|string[] = ctrlMiddleware.concat(actionMiddleware),
					fnName:string = prop.substring(ROUTE_PREFIX.length),
					route:IWebSocketRoute;

				// We need mountpath, mountpath and path map to the originalUrl, baseUrl and path on Express's request object
				route = { mountpath, path, middleware, fnName };
				return route;
			})
	}
}

