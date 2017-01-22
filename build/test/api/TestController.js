/**
 * Created by Justin on 8/17/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const _1 = require('../../');
const TestMiddleware_1 = require('./TestMiddleware');
let TestController = class TestController {
    TestMethod(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({ success: true });
        });
    }
    TestMethod2(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({ success: true, middleware: req.middleware });
        });
    }
    TestMethod3(info, cb, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`ws req from ${info.req.originalUrl || info.req.url} using origin ${info.origin}`);
        });
    }
};
__decorate([
    _1.GET('/'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object, Object, Function]), 
    __metadata('design:returntype', Promise)
], TestController.prototype, "TestMethod", null);
__decorate([
    _1.GET('/middleware-test', TestMiddleware_1.TestMiddleware.Test), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object, Object, Function]), 
    __metadata('design:returntype', Promise)
], TestController.prototype, "TestMethod2", null);
__decorate([
    _1.ALT('/websocket-test'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object, Object, Function]), 
    __metadata('design:returntype', Promise)
], TestController.prototype, "TestMethod3", null);
TestController = __decorate([
    _1.Controller('/api/test'), 
    __metadata('design:paramtypes', [])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=TestController.js.map