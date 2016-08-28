/**
 * Created by Justin on 8/27/16.
 */

export interface IExpressDecorateOptions
{
	ctrlDir:string;
	extension?:string;
	ctrlLoadRecursive?:boolean;
	ctrlIgnore?:RegExp;
	mergeParams?:boolean;
	routeConfig?:Function;
	debug?:boolean;
	alternateMethod?:string;
}

export interface IControllerRoute
{
	method:string|string[];
	mountpath:string|string[];
	path:string|string[];
	middleware:string|string[];
	requiredBodyParams?:string[];
	fnName:string;
}
