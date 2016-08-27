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
}

export interface IControllerRoute
{
	method:string|string[];
	mountpath:string|string[];
	path:string|string[];
	middleware:string|string[];
	fnName:string;
}
