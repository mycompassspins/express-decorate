"use strict";
const Application_1 = require('./Application');
function AppStart(port) {
    let app = new Application_1.Application(port);
    app.Config();
    app.Start();
    return app;
}
exports.AppStart = AppStart;
//# sourceMappingURL=index.js.map