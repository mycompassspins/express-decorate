/**
 * Created by Justin on 8/21/16.
 */

import { isArray } from 'util'
import { Log } from '../helpers/ErrorMessageHelper'

/**
 * Make sure our paths and middleware are of the right types
 * @param args
 * @returns {string|any[]}
 * @private
 */
export function Destruct(args:any[]):any[]
{
	let hasPath:boolean = typeof args[0] === 'string' || ( isArray(args[0]) && _validatePathsArray(args[0]) ),
		path:string = hasPath ? args[0] : '',
		middleware:string[] = hasPath ? args.slice(1) : args;

	middleware.forEach((m:any) =>
	{
		if (typeof m !== 'function')
		{
			throw `Expected ${m} to be a function but got "${typeof m}"`;
		}

	});

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
			Log(null, 'warn', null, `"${path}" is not a valid path`);
			return false;
		}
	});

	return true;
}
