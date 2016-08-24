/**
 * Created by Justin on 8/21/16.
 */

import { AppStart } from './api'
import { TestController } from './api/TestController'
import { Request } from './helpers/HttpHelper'

describe('TestController', () =>
{
	let app:any = AppStart(3000),
		ctrl:TestController = new TestController(),
		expectedRoute:any = {
			method: 'get',
			mountpath: '/api/test',
			path: '/',
			fnName: 'TestMethod'
		};

    it('should have a $routes property with 1 configured route', (done:Function) =>
    {
    	let ctrlCopy:TestController = Object.create(ctrl);
        expect(ctrlCopy['$routes']).toBeDefined();
        expect(ctrlCopy['$routes'].length).toEqual(2);
        expect(ctrlCopy['$routes'][0].middleware).toBeDefined();

        // TODO: middleware property logs as `[ [Function: Test] ]` - How to add that to the expectedRoute object??
        delete ctrlCopy['$routes'][0].middleware;

        expect(ctrlCopy['$routes'][0]).toEqual(expectedRoute);
        done();
    });

	it('should make a successful GET request', (done:Function) =>
	{
		Request.Get('http://localhost:3000/api/test')
			.then((res:any) =>
			{
				expect(res.success).toBeDefined();
				expect(res.success).toBe(true);
				done();
			});
	});

	it('should fire middleware before sending response', (done:Function) =>
	{
		Request.Get('http://localhost:3000/api/test/middleware-test')
			.then((res:any) =>
			{
				expect(res.success).toBeDefined();
				expect(res.success).toBe(true);
				expect(res.middleware).toBeDefined();
				expect(res.middleware).toBe('successful');
				app.Stop();
				done();
			});
	})
});
