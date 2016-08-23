/**
 * Created by Justin on 8/21/16.
 */

import { isArray } from 'util'

/**
 * Make sure our paths and middleware are of the right types
 * @param args
 * @returns {string|any[]}
 * @private
 */
export function Destruct(args):any[]
{
	let hasPath:boolean = typeof args[0] === 'string' || ( isArray(args[0]) && _validatePathsArray(args[0]) ),
		path:string = hasPath ? args[0] : '',
		middleware:string[] = hasPath ? args.slice(1) : args;

	if (middleware.some(m => typeof m !== 'function'))
		throw new Error('Middleware must be function');

	return [path, middleware]
}

/**
 * If array of paths is passed to @Route(), make sure they are actually paths
 * @param paths
 * @returns {boolean}
 * @private
 */
function _validatePathsArray(paths:string[]) :boolean
{
	paths.forEach((path:string) =>
	{
		if (path.charAt(0) !== '/')
		{
			console.warn(`"${path}" is not a valid path`);
			return false;
		}
	});

	return true;
}
