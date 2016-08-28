/**
 * Created by Justin on 8/21/16.
 */

///<reference path="../../node_modules/typescript/lib/lib.es6.d.ts" />

import { AppStart } from './app'
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

    it('should have a $routes property with 3 configured routes', (done:Function) =>
    {
    	let ctrlCopy:TestController|any = Object.create(ctrl);
        expect(ctrlCopy['$routes']).toBeDefined();
        expect(ctrlCopy['$routes'].length).toEqual(3);
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
	});

	// TODO: How to actually test a websocket request??
	it('should make a successful websocket request', (done:Function) =>
	{
		expect(true).toBe(true);
		app.Stop();
		done();
	})
});
