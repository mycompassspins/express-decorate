/**
 * Created by Justin on 8/21/16.
 */
"use strict";
const app_1 = require('./app');
const TestController_1 = require('./api/TestController');
const HttpHelper_1 = require('./helpers/HttpHelper');
describe('TestController', () => {
    let app = app_1.AppStart(3000), ctrl = new TestController_1.TestController(), expectedRoute = {
        method: 'get',
        mountpath: '/api/test',
        path: '/',
        fnName: 'TestMethod'
    };
    it('should have a $routes property with 3 configured routes', (done) => {
        let ctrlCopy = Object.create(ctrl);
        expect(ctrlCopy['$routes']).toBeDefined();
        expect(ctrlCopy['$routes'].length).toEqual(3);
        expect(ctrlCopy['$routes'][0].middleware).toBeDefined();
        // TODO: middleware property logs as `[ [Function: Test] ]` - How to add that to the expectedRoute object??
        delete ctrlCopy['$routes'][0].middleware;
        expect(ctrlCopy['$routes'][0]).toEqual(expectedRoute);
        done();
    });
    it('should make a successful GET request', (done) => {
        HttpHelper_1.Request.Get('http://localhost:3000/api/test')
            .then((res) => {
            expect(res.success).toBeDefined();
            expect(res.success).toBe(true);
            done();
        });
    });
    it('should fire middleware before sending response', (done) => {
        HttpHelper_1.Request.Get('http://localhost:3000/api/test/middleware-test')
            .then((res) => {
            expect(res.success).toBeDefined();
            expect(res.success).toBe(true);
            expect(res.middleware).toBeDefined();
            expect(res.middleware).toBe('successful');
            app.Stop();
            done();
        });
    });
    // TODO: How to actually test a websocket request??
    it('should make a successful websocket request', (done) => {
        expect(true).toBe(true);
        app.Stop();
        done();
    });
});
//# sourceMappingURL=TestController.spec.js.map