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
    TestMethod3(info, cb, next) {
        return __awaiter(this, void 0, Promise, function* () {
            console.log(`ws req from ${info.req.originalUrl || info.req.url} using origin ${info.origin}`);
        });
    }
};
__decorate([
    _1.GET('/')
], TestController.prototype, "TestMethod", null);
__decorate([
    _1.GET('/middleware-test', TestMiddleware_1.TestMiddleware.Test)
], TestController.prototype, "TestMethod2", null);
__decorate([
    _1.ALT('/websocket-test')
], TestController.prototype, "TestMethod3", null);
TestController = __decorate([
    _1.Controller('/api/test')
], TestController);
exports.TestController = TestController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYXBpL1Rlc3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUtBLG1CQUFxQyxRQUNyQyxDQUFDLENBRDRDO0FBQzdDLGlDQUErQixrQkFFL0IsQ0FBQyxDQUZnRDtBQUdqRDtJQUdpQixVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFFdEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFHUyxXQUFXLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFFdkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNoRSxDQUFDO0tBQUE7SUFHWSxXQUFXLENBQUMsSUFBUSxFQUFFLEVBQU0sRUFBRSxJQUFrQjs7WUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDaEcsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQWpCQTtJQUFDLE1BQUcsQ0FBQyxHQUFHLENBQUM7Z0RBQUE7QUFNTjtJQUFDLE1BQUcsQ0FBQyxrQkFBa0IsRUFBRSwrQkFBYyxDQUFDLElBQUksQ0FBQztpREFBQTtBQU1oRDtJQUFDLE1BQUcsQ0FBQyxpQkFBaUIsQ0FBQztpREFBQTtBQWZ4QjtJQUFDLGFBQVUsQ0FBQyxXQUFXLENBQUM7a0JBQUE7QUFDWCxzQkFBYyxpQkFtQjFCLENBQUEiLCJmaWxlIjoidGVzdC9hcGkvVGVzdENvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDgvMTcvMTYuXG4gKi9cblxuaW1wb3J0IHsgSVJlcXVlc3QsIElSZXNwb25zZSwgSU5leHRGdW5jdGlvbiB9IGZyb20gJy4vVGVzdE1pZGRsZXdhcmUnXG5pbXBvcnQgeyBDb250cm9sbGVyLCBHRVQsIEFMVCB9IGZyb20gJy4uLy4uLydcbmltcG9ydCB7IFRlc3RNaWRkbGV3YXJlIH0gZnJvbSAnLi9UZXN0TWlkZGxld2FyZSdcblxuQENvbnRyb2xsZXIoJy9hcGkvdGVzdCcpXG5leHBvcnQgY2xhc3MgVGVzdENvbnRyb2xsZXJcbntcblx0QEdFVCgnLycpXG4gICAgcHVibGljIGFzeW5jIFRlc3RNZXRob2QocmVxOklSZXF1ZXN0LCByZXM6SVJlc3BvbnNlLCBuZXh0OklOZXh0RnVuY3Rpb24pOlByb21pc2U8SVJlc3BvbnNlPlxuICAgIHtcbiAgICBcdHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgQEdFVCgnL21pZGRsZXdhcmUtdGVzdCcsIFRlc3RNaWRkbGV3YXJlLlRlc3QpXG5cdHB1YmxpYyBhc3luYyBUZXN0TWV0aG9kMihyZXE6SVJlcXVlc3QsIHJlczpJUmVzcG9uc2UsIG5leHQ6SU5leHRGdW5jdGlvbik6UHJvbWlzZTxJUmVzcG9uc2U+XG5cdHtcblx0XHRyZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtaWRkbGV3YXJlOiByZXEubWlkZGxld2FyZSB9KTtcblx0fVxuXG5cdEBBTFQoJy93ZWJzb2NrZXQtdGVzdCcpXG5cdHB1YmxpYyBhc3luYyBUZXN0TWV0aG9kMyhpbmZvOmFueSwgY2I6YW55LCBuZXh0OklOZXh0RnVuY3Rpb24pOlByb21pc2U8YW55PlxuXHR7XG5cdFx0Y29uc29sZS5sb2coYHdzIHJlcSBmcm9tICR7aW5mby5yZXEub3JpZ2luYWxVcmwgfHwgaW5mby5yZXEudXJsfSB1c2luZyBvcmlnaW4gJHtpbmZvLm9yaWdpbn1gKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
