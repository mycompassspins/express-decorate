"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    _1.GET('/')
], TestController.prototype, "TestMethod", null);
__decorate([
    _1.GET('/middleware-test', TestMiddleware_1.TestMiddleware.Test)
], TestController.prototype, "TestMethod2", null);
TestController = __decorate([
    _1.Controller('/api/test')
], TestController);
exports.TestController = TestController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYXBpL1Rlc3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUtBLG1CQUFvQyxRQUNwQyxDQUFDLENBRDJDO0FBQzVDLGlDQUErQixrQkFFL0IsQ0FBQyxDQUZnRDtBQUdqRDtJQUtpQixVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFFdEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFHUyxXQUFXLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFFdkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNoRSxDQUFDO0tBQUE7QUFPRixDQUFDO0FBakJHO0lBQUMsTUFBRyxDQUFDLEdBQUcsQ0FBQztnREFBQTtBQU1UO0lBQUMsTUFBRyxDQUFDLGtCQUFrQixFQUFFLCtCQUFjLENBQUMsSUFBSSxDQUFDO2lEQUFBO0FBWGpEO0lBQUMsYUFBVSxDQUFDLFdBQVcsQ0FBQztrQkFBQTtBQUNYLHNCQUFjLGlCQXFCMUIsQ0FBQSIsImZpbGUiOiJ0ZXN0L2FwaS9UZXN0Q29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKdXN0aW4gb24gOC8xNy8xNi5cbiAqL1xuXG5pbXBvcnQgeyBJUmVxdWVzdCwgSVJlc3BvbnNlLCBJTmV4dEZ1bmN0aW9uIH0gZnJvbSAnLi9UZXN0TWlkZGxld2FyZSdcbmltcG9ydCB7IENvbnRyb2xsZXIsIEdFVCwgV1MgfSBmcm9tICcuLi8uLi8nXG5pbXBvcnQgeyBUZXN0TWlkZGxld2FyZSB9IGZyb20gJy4vVGVzdE1pZGRsZXdhcmUnXG5cbkBDb250cm9sbGVyKCcvYXBpL3Rlc3QnKVxuZXhwb3J0IGNsYXNzIFRlc3RDb250cm9sbGVyXG57XG5cdHB1YmxpYyAkcm91dGVzOmFueTtcblxuICAgIEBHRVQoJy8nKVxuICAgIHB1YmxpYyBhc3luYyBUZXN0TWV0aG9kKHJlcTpJUmVxdWVzdCwgcmVzOklSZXNwb25zZSwgbmV4dDpJTmV4dEZ1bmN0aW9uKTpQcm9taXNlPElSZXNwb25zZT5cbiAgICB7XG4gICAgXHRyZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIEBHRVQoJy9taWRkbGV3YXJlLXRlc3QnLCBUZXN0TWlkZGxld2FyZS5UZXN0KVxuXHRwdWJsaWMgYXN5bmMgVGVzdE1ldGhvZDIocmVxOklSZXF1ZXN0LCByZXM6SVJlc3BvbnNlLCBuZXh0OklOZXh0RnVuY3Rpb24pOlByb21pc2U8SVJlc3BvbnNlPlxuXHR7XG5cdFx0cmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWlkZGxld2FyZTogcmVxLm1pZGRsZXdhcmUgfSk7XG5cdH1cblxuXHQvLyBAV1MoJy93ZWJzb2NrZXQtdGVzdCcpXG5cdC8vIHB1YmxpYyBhc3luYyBUZXN0TWV0aG9kMyhyZXE6SVJlcXVlc3QsIHJlczpJUmVzcG9uc2UsIG5leHQ6SU5leHRGdW5jdGlvbik6UHJvbWlzZTxhbnk+XG5cdC8vIHtcblx0Ly8gXHRjb25zb2xlLmxvZygnV2Vic29ja2V0IFRlc3QgQ29udHJvbGxlcicpO1xuXHQvLyB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
