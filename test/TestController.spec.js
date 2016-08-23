"use strict";
const api_1 = require('../src/lib/api');
const TestController_1 = require('../src/lib/api/TestController');
const HttpHelper_1 = require('../src/lib/helpers/HttpHelper');
describe('TestController', () => {
    let app = api_1.AppStart(3000), ctrl = new TestController_1.TestController(), expectedRoute = {
        method: 'get',
        mountpath: '/api/test',
        path: '/',
        fnName: 'TestMethod'
    };
    it('should have a $routes property with 1 configured route', (done) => {
        let ctrlCopy = Object.create(ctrl);
        expect(ctrlCopy['$routes']).toBeDefined();
        expect(ctrlCopy['$routes'].length).toEqual(2);
        expect(ctrlCopy['$routes'][0].middleware).toBeDefined();
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
});
//# sourceMappingURL=TestController.spec.js.map