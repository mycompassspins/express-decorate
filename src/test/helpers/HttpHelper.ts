/**
 * Created by Justin on 8/17/16.
 */

import request = require('request');

export interface IRequestOptions
{
	url:string;
	method:string;
	headers?:any;
	body?:string;
}

export class Request
{
	public static async Get(url:string):Promise<any>
	{
		return new Promise((resolve, reject) =>
		{
			request.get(url, (err:any, res:any, body:any) =>
			{
				if (err || !body) return reject({ success: false });

				let parsedBody:any;
				try
				{
					parsedBody = JSON.parse(body);
				}
				catch(e)
				{
					parsedBody = res.statusCode;
				}

				return resolve(parsedBody);
			})
		})
	}

	public static async Post(options:IRequestOptions):Promise<any>
	{
		return new Promise((resolve, reject) =>
		{
			request.post(options, (err:any, res:any, body:any) =>
			{
				if (err) return reject(err);
				return resolve(JSON.parse(body));
			});
		})
	}
}
