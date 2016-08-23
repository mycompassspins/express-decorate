/**
 * Created by Justin on 8/17/16.
 */

import { IRequest, IResponse, INextFunction } from './TestMiddleware'
import { Controller, GET } from '../decorators'
import { TestMiddleware } from './TestMiddleware'

@Controller('/api/test')
export class TestController
{
	public $routes:any;

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
}
