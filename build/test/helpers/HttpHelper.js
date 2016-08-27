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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvaGVscGVycy9IdHRwSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE1BQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBVXBDO0lBRUMsT0FBb0IsR0FBRyxDQUFDLEdBQVU7O1lBRWpDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQU8sRUFBRSxHQUFPLEVBQUUsSUFBUTtvQkFFM0MsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDO0tBQUE7SUFFRCxPQUFvQixJQUFJLENBQUMsT0FBdUI7O1lBRS9DLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUVsQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQU8sRUFBRSxHQUFPLEVBQUUsSUFBUTtvQkFFaEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQXpCWSxlQUFPLFVBeUJuQixDQUFBIiwiZmlsZSI6InRlc3QvaGVscGVycy9IdHRwSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA4LzE3LzE2LlxuICovXG5cbmltcG9ydCByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXF1ZXN0T3B0aW9uc1xue1xuXHR1cmw6c3RyaW5nO1xuXHRtZXRob2Q6c3RyaW5nO1xuXHRoZWFkZXJzPzphbnk7XG5cdGJvZHk/OnN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFJlcXVlc3Rcbntcblx0cHVibGljIHN0YXRpYyBhc3luYyBHZXQodXJsOnN0cmluZyk6UHJvbWlzZTxhbnk+XG5cdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cblx0XHR7XG5cdFx0XHRyZXF1ZXN0LmdldCh1cmwsIChlcnI6YW55LCByZXM6YW55LCBib2R5OmFueSkgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKGVyciB8fCAhYm9keSkgcmV0dXJuIHJlamVjdCh7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShKU09OLnBhcnNlKGJvZHkpKTtcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgUG9zdChvcHRpb25zOklSZXF1ZXN0T3B0aW9ucyk6UHJvbWlzZTxhbnk+XG5cdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cblx0XHR7XG5cdFx0XHRyZXF1ZXN0LnBvc3Qob3B0aW9ucywgKGVycjphbnksIHJlczphbnksIGJvZHk6YW55KSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlKEpTT04ucGFyc2UoYm9keSkpO1xuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
