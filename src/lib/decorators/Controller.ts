/**
 * Created by Justin on 8/21/16.
 */

import { Destruct } from './ValidatePaths'
import { IControllerRoute } from '../interfaces/IExpressDecorateRepository'

/**
 * @usage @Controller(path: optional, ...middleware: optional)
 * @param args
 * @returns {(target:any)=>void}
 * @constructor
 */
export function Controller(...args:any[]):Function
{
	// validate ...args
	const [ctrlPath, ctrlMiddleware] = Destruct(args),
		ROUTE_PREFIX = '$$route__';

	return (target:any):void =>
	{
		// Add a $routes property to the class's prototype
		const proto:any = target.prototype;

		// Filter prototype's properties by those prefixed with $$route_
		// and attach method, paths, middleware and controller action to our $route property
		proto.$routes = <IControllerRoute[]>Object.getOwnPropertyNames(proto)
			.filter((prop:string) => prop.indexOf(ROUTE_PREFIX) === 0)
			.map((prop:string):IControllerRoute =>
			{
				const { method, path, middleware: actionMiddleware } = proto[prop];

				let mountpath:string = `${ctrlPath}`,
					middleware:string|string[] = ctrlMiddleware.concat(actionMiddleware),
					fnName:string = prop.substring(ROUTE_PREFIX.length),
					route:IControllerRoute;

				// We need mountpath - mountpath and path map to the originalUrl, baseUrl and path on Express's request object
				route = { method: method === 'del' ? 'delete' : method, mountpath, path, middleware, fnName };
				return route;
			})
	}
}
