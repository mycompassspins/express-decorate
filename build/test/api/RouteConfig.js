/**
 * Created by Justin on 8/21/16.
 */
"use strict";
function RouteConfig(app) {
    app.route('/test')
        .get((req, res, next) => {
        return res.json({ success: true, message: 'Successfully served route /test' });
    });
}
exports.RouteConfig = RouteConfig;
//# sourceMappingURL=RouteConfig.js.map