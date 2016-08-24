"use strict";
const api_1 = require('./api');
const HttpHelper_1 = require('./helpers/HttpHelper');
describe('RouteConfig', () => {
    let app = api_1.AppStart(4000);
    it('should have a route configured for /test', (done) => {
        HttpHelper_1.Request.Get('http://localhost:4000/test')
            .then((res) => {
            expect(res.success).toBe(true);
            expect(res.message).toEqual('Successfully served route /test');
            app.Stop();
            done();
        });
    });
});
//# sourceMappingURL=RouteConfig.spec.js.map