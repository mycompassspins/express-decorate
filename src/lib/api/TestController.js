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
const TestMiddleware_1 = require('./TestMiddleware');
const decorators_1 = require('../decorators');
const TestMiddleware_2 = require('./TestMiddleware');
let TestController = class TestController {
    TestMethod(req, res, next) {
        return __awaiter(this, void 0, Promise, function* () {
            return res.json({ success: true });
        });
    }
    TestMethod2(req, res, next) {
        return __awaiter(this, void 0, Promise, function* () {
            return res.json({ success: true, middleware: req.middleware });
        });
    }
};
__decorate([
    decorators_1.GET('/'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [(typeof (_a = typeof TestMiddleware_1.IRequest !== 'undefined' && TestMiddleware_1.IRequest) === 'function' && _a) || Object, (typeof (_b = typeof TestMiddleware_1.IResponse !== 'undefined' && TestMiddleware_1.IResponse) === 'function' && _b) || Object, (typeof (_c = typeof TestMiddleware_1.INextFunction !== 'undefined' && TestMiddleware_1.INextFunction) === 'function' && _c) || Object]), 
    __metadata('design:returntype', Promise)
], TestController.prototype, "TestMethod", null);
__decorate([
    decorators_1.GET('/middleware-test', TestMiddleware_2.TestMiddleware.Test), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [(typeof (_d = typeof TestMiddleware_1.IRequest !== 'undefined' && TestMiddleware_1.IRequest) === 'function' && _d) || Object, (typeof (_e = typeof TestMiddleware_1.IResponse !== 'undefined' && TestMiddleware_1.IResponse) === 'function' && _e) || Object, (typeof (_f = typeof TestMiddleware_1.INextFunction !== 'undefined' && TestMiddleware_1.INextFunction) === 'function' && _f) || Object]), 
    __metadata('design:returntype', Promise)
], TestController.prototype, "TestMethod2", null);
TestController = __decorate([
    decorators_1.Controller('/api/test'), 
    __metadata('design:paramtypes', [])
], TestController);
exports.TestController = TestController;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=TestController.js.map