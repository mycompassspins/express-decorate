"use strict";
const _1 = require('../');
const RouteConfig_1 = require('./api/RouteConfig');
const express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
class Application {
    constructor(port) {
        this.port = port;
        this.expressApp = express();
        this.opts = { ctrlDir: `${__dirname}/api`, routeConfig: RouteConfig_1.RouteConfig, debug: true };
    }
    Config() {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(morgan('dev'));
        this.expressDecorate = new _1.ExpressDecorate(this.expressApp, this.opts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvQXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLG1CQUF5RCxLQUN6RCxDQUFDLENBRDZEO0FBQzlELDhCQUE0QixtQkFDNUIsQ0FBQyxDQUQ4QztBQUMvQyxNQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUVwQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDeEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBUS9CO0lBT0MsWUFBb0IsSUFBVztRQUFYLFNBQUksR0FBSixJQUFJLENBQU87UUFMeEIsZUFBVSxHQUF1QixPQUFPLEVBQUUsQ0FBQztRQUUzQyxTQUFJLEdBQTJCLEVBQUUsT0FBTyxFQUFFLEdBQUcsU0FBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHlCQUFXLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0lBRzVFLENBQUM7SUFFM0IsTUFBTTtRQUVaLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxrQkFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxLQUFLO1FBRVgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBRS9DLElBQUksSUFBSSxHQUFVLG9CQUFvQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLElBQUk7UUFFVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUVqQixPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFLOUMsVUFBVSxDQUFDO2dCQUVWLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDO0FBMUNZLG1CQUFXLGNBMEN2QixDQUFBIiwiZmlsZSI6InRlc3QvQXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDgvMjEvMTYuXG4gKi9cblxuaW1wb3J0IHsgRXhwcmVzc0RlY29yYXRlLCBJRXhwcmVzc0RlY29yYXRlT3B0aW9ucyB9IGZyb20gJy4uLydcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnLi9hcGkvUm91dGVDb25maWcnXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmltcG9ydCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xubGV0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xubGV0IG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpO1xuXG4vKipcbiAqIE1haW4gRXhwcmVzcyBhcHBsaWNhdGlvbiBjbGFzcyAtIGluIGNoYXJnZSBvZiBzdGFydGluZy9zdG9wcGluZyBzZXJ2ZXIgYW5kIGFsbCBhcHAgY29uZmlndXJhdGlvbnNcbiAqIEBjbGFzc1xuICogQHVzYWdlXG4gKiBpbXBvcnQgeyBhcHAsIEFQUCwgU0VSVkVSIH0gZnJvbSAuL2luZGV4XG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvblxue1xuXHRwdWJsaWMgZXhwcmVzc0FwcDpleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xuXHRwdWJsaWMgc2VydmVyOmh0dHAuU2VydmVyO1xuXHRwdWJsaWMgb3B0czpJRXhwcmVzc0RlY29yYXRlT3B0aW9ucyA9IHsgY3RybERpcjogYCR7X19kaXJuYW1lfS9hcGlgLCByb3V0ZUNvbmZpZzogUm91dGVDb25maWcsIGRlYnVnOiB0cnVlIH07XG5cdHB1YmxpYyBleHByZXNzRGVjb3JhdGU6RXhwcmVzc0RlY29yYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcG9ydDpudW1iZXIpe31cblxuXHRwdWJsaWMgQ29uZmlnKClcblx0e1xuXHRcdHRoaXMuZXhwcmVzc0FwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuXHRcdHRoaXMuZXhwcmVzc0FwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXHRcdHRoaXMuZXhwcmVzc0FwcC51c2UobW9yZ2FuKCdkZXYnKSk7XG5cdFx0dGhpcy5leHByZXNzRGVjb3JhdGUgPSBuZXcgRXhwcmVzc0RlY29yYXRlKHRoaXMuZXhwcmVzc0FwcCwgdGhpcy5vcHRzKTtcblx0fVxuXG5cdHB1YmxpYyBTdGFydCgpXG5cdHtcblx0XHR0aGlzLnNlcnZlciA9IHRoaXMuZXhwcmVzc0FwcC5saXN0ZW4odGhpcy5wb3J0LCAoKSA9PlxuXHRcdHtcblx0XHRcdGxldCBzaXRlOnN0cmluZyA9IGBodHRwOi8vbG9jYWxob3N0OiR7dGhpcy5wb3J0fWA7XG5cdFx0XHRjb25zb2xlLmluZm8oYFJldmVscnkgYW5kIGF3ZSBhcmUgYWZvb3QgYXQgJHtzaXRlfSBpbiBkZXZlbG9wbWVudCBtb2RlLmApO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIFN0b3AoKVxuXHR7XG5cdFx0dGhpcy5zZXJ2ZXIuY2xvc2UoKCkgPT5cblx0XHR7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1N0b3BwaW5nIEV4cHJlc3MgU2VydmVyIC4gLiAuJyk7XG5cblx0XHRcdC8vIFJpZ2h0IG5vdyB0aGUgb25seSB0aGluZyBjYWxsaW5nIGFwcC5TdG9wKCkgaXMgb25lIG9mIG91ciBzcGVjc1xuXHRcdFx0Ly8gR2l2ZSB0aGUgc3BlYyBwbGVudHkgb2YgdGltZSB0byBjb21wbGV0ZSBiZWZvcmUga2lsbGluZyB0aGUgcHJvY2Vzc1xuXHRcdFx0Ly8gVE9ETzogZGV0ZXJtaW5lIGlmIHRoaXMgaXMgYW4gYWNjZXB0YWJsZSBzb2x1dGlvblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRjb25zb2xlLmluZm8oJ1NlcnZlciBTdG9wcGVkJyk7XG5cdFx0XHRcdHByb2Nlc3MuZXhpdCgwKTtcblx0XHRcdH0sIDE1MDApO1xuXHRcdH0pO1xuXHR9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==