/**
 * Created by Justin on 8/27/16.
 */

import { IExpressDecorateOptions } from '../interfaces/IExpressDecorateRepository'

export function Log(e:any, type:string, opts:IExpressDecorateOptions, customMsg?:string):void
{
	let chalk = require('chalk'),
		color = type === 'error' ? 'red' : type === 'debug' ? 'cyan' : type === 'warn' ? 'yellow' : 'blue',
		flag = `[${type.toUpperCase()}] `,
		msg = customMsg ? `${customMsg}:` : '',
		error:any = '';

	if (e) error = opts.debug ? e : e.message;

	return console.log(chalk[color](flag), msg, error)
}
