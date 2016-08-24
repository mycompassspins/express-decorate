"use strict";
const ExpressDecorate_1 = require('../../src/ExpressDecorate');
const RouteConfig_1 = require('./RouteConfig');
const express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
class Application {
    constructor(port) {
        this.port = port;
        this.expressApp = express();
        this.opts = { ctrlDir: `${__dirname}`, routeConfig: RouteConfig_1.RouteConfig, debug: true };
    }
    Config() {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(morgan('dev'));
        this.expressDecorate = new ExpressDecorate_1.ExpressDecorate(this.expressApp, this.opts);
    }
    Start() {
        this.server = this.expressApp.listen(this.port, () => {
            let site = `http://localhost:${this.port}`;
            console.info(`Revelry and awe are afoot at ${site} in development mode.`);
        });
    }
    Stop() {
        this.server.close(() => {
            console.warn('Stopping Express Server . . .');
            setTimeout(() => {
                console.info('Server Stopped');
                process.exit(0);
            }, 1500);
        });
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map