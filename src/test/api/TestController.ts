/**
 * Created by Justin on 8/17/16.
 */

import { IRequest, IResponse, INextFunction } from './TestMiddleware'
import { Controller, GET, ALT } from '../../'
import { TestMiddleware } from './TestMiddleware'

@Controller('/api/test')
export class TestController
{
	@GET('/')
    public async TestMethod(req:IRequest, res:IResponse, next:INextFunction):Promise<IResponse>
    {
    	return res.json({ success: true });
    }

    @GET('/middleware-test', TestMiddleware.Test)
	public async TestMethod2(req:IRequest, res:IResponse, next:INextFunction):Promise<IResponse>
	{
		return res.json({ success: true, middleware: req.middleware });
	}

	@ALT('/websocket-test')
	public async TestMethod3(info:any, cb:any, next:INextFunction):Promise<any>
	{
		console.log(`ws req from ${info.req.originalUrl || info.req.url} using origin ${info.origin}`);
	}
}
