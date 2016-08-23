"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const request = require('request');
class Request {
    static Get(url) {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise((resolve, reject) => {
                request.get(url, (err, res, body) => {
                    if (err || !body)
                        return reject({ success: false });
                    return resolve(JSON.parse(body));
                });
            });
        });
    }
    static Post(options) {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise((resolve, reject) => {
                request.post(options, (err, res, body) => {
                    if (err)
                        return reject(err);
                    return resolve(JSON.parse(body));
                });
            });
        });
    }
}
exports.Request = Request;
//# sourceMappingURL=HttpHelper.js.map