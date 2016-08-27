"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class TestMiddleware {
    static Test(req, res, next) {
        return __awaiter(this, void 0, Promise, function* () {
            req.middleware = 'successful';
            return next();
        });
    }
}
exports.TestMiddleware = TestMiddleware;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYXBpL1Rlc3RNaWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBO0lBRUksT0FBb0IsSUFBSSxDQUFDLEdBQVksRUFBRSxHQUFZLEVBQUUsSUFBaUI7O1lBRWxFLEdBQUcsQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixDQUFDO0tBQUE7QUFDTCxDQUFDO0FBUFksc0JBQWMsaUJBTzFCLENBQUEiLCJmaWxlIjoidGVzdC9hcGkvVGVzdE1pZGRsZXdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDgvMTcvMTYuXG4gKi9cblxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0IHsgbWlkZGxld2FyZTpzdHJpbmc7IH1cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3BvbnNlIGV4dGVuZHMgUmVzcG9uc2Uge31cbmV4cG9ydCBpbnRlcmZhY2UgSU5leHRGdW5jdGlvbiBleHRlbmRzIE5leHRGdW5jdGlvbiB7fVxuXG5leHBvcnQgY2xhc3MgVGVzdE1pZGRsZXdhcmVcbntcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIFRlc3QocmVxOklSZXF1ZXN0LCByZXM6UmVzcG9uc2UsIG5leHQ6TmV4dEZ1bmN0aW9uKTpQcm9taXNlPGFueT5cbiAgICB7XG4gICAgICAgIHJlcS5taWRkbGV3YXJlID0gJ3N1Y2Nlc3NmdWwnO1xuICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
