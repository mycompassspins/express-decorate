"use strict";
const app_1 = require('./app');
const FileSystemHelper_1 = require('../lib/helpers/FileSystemHelper');
describe('ExpressDecorate', () => {
    let app = app_1.AppStart(9000);
    it('should fail if the provided controllers directory does not exist', (done) => {
        let ctrlDir = `${__dirname}/${app.expressDecorate.opts.ctrlDir}`, isDir, err;
        try {
            isDir = FileSystemHelper_1.FileSystemHelper.IsDirectory(ctrlDir);
        }
        catch (e) {
            isDir = false;
            err = e.message;
        }
        expect(isDir).toBe(false);
        expect(err).toEqual(`ENOENT: no such file or directory, lstat '${ctrlDir}'`);
        done();
    });
    it('should properly set options defaults', (done) => {
        expect(app.expressDecorate.opts.ctrlLoadRecursive).toBe(true);
        expect(app.expressDecorate.opts.ctrlIgnore).not.toBeDefined();
        expect(app.expressDecorate.opts.mergeParams).toBe(true);
        app.Stop();
        done();
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvRXhwcmVzc0RlY29yYXRlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU1BLHNCQUF5QixPQUN6QixDQUFDLENBRCtCO0FBQ2hDLG1DQUE2QyxpQ0FDN0MsQ0FBQyxDQUQ2RTtBQUc5RSxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFFM0IsSUFBSSxHQUFHLEdBQU8sY0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLEVBQUUsQ0FBQyxrRUFBa0UsRUFBRSxDQUFDLElBQWE7UUFFdkYsSUFBSSxPQUFPLEdBQVUsR0FBRyxTQUFTLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQ3RFLEtBQWEsRUFDYixHQUFVLENBQUM7UUFFWixJQUNBLENBQUM7WUFDQSxLQUFLLEdBQUcsbUNBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FDQTtRQUFBLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7WUFDQSxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2QsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUU3RSxJQUFJLEVBQUUsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLENBQUMsSUFBYTtRQUVyRCxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5RCxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L0V4cHJlc3NEZWNvcmF0ZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA4LzE2LzE2LlxuICovXG5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XG5cbmltcG9ydCB7IEFwcFN0YXJ0IH0gZnJvbSAnLi9hcHAnXG5pbXBvcnQgeyBGaWxlU3lzdGVtSGVscGVyIGFzIGZzSGVscGVyIH0gZnJvbSAnLi4vbGliL2hlbHBlcnMvRmlsZVN5c3RlbUhlbHBlcidcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuXG5kZXNjcmliZSgnRXhwcmVzc0RlY29yYXRlJywgKCkgPT5cbntcblx0bGV0IGFwcDphbnkgPSBBcHBTdGFydCg5MDAwKTtcblxuICAgIGl0KCdzaG91bGQgZmFpbCBpZiB0aGUgcHJvdmlkZWQgY29udHJvbGxlcnMgZGlyZWN0b3J5IGRvZXMgbm90IGV4aXN0JywgKGRvbmU6RnVuY3Rpb24pID0+XG4gICAge1xuXHRcdGxldCBjdHJsRGlyOnN0cmluZyA9IGAke19fZGlybmFtZX0vJHthcHAuZXhwcmVzc0RlY29yYXRlLm9wdHMuY3RybERpcn1gLFxuXHRcdFx0aXNEaXI6Ym9vbGVhbixcblx0XHRcdGVycjpzdHJpbmc7XG5cblx0XHR0cnlcblx0XHR7XG5cdFx0XHRpc0RpciA9IGZzSGVscGVyLklzRGlyZWN0b3J5KGN0cmxEaXIpO1xuXHRcdH1cblx0XHRjYXRjaChlKVxuXHRcdHtcblx0XHRcdGlzRGlyID0gZmFsc2U7XG5cdFx0XHRlcnIgPSBlLm1lc3NhZ2U7XG5cdFx0fVxuXG5cdFx0ZXhwZWN0KGlzRGlyKS50b0JlKGZhbHNlKTtcblx0XHRleHBlY3QoZXJyKS50b0VxdWFsKGBFTk9FTlQ6IG5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnksIGxzdGF0ICcke2N0cmxEaXJ9J2ApO1xuXG5cdFx0ZG9uZSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBwcm9wZXJseSBzZXQgb3B0aW9ucyBkZWZhdWx0cycsIChkb25lOkZ1bmN0aW9uKSA9PlxuICAgIHtcbiAgICAgICAgZXhwZWN0KGFwcC5leHByZXNzRGVjb3JhdGUub3B0cy5jdHJsTG9hZFJlY3Vyc2l2ZSkudG9CZSh0cnVlKTtcbiAgICAgICAgZXhwZWN0KGFwcC5leHByZXNzRGVjb3JhdGUub3B0cy5jdHJsSWdub3JlKS5ub3QudG9CZURlZmluZWQoKTtcbiAgICAgICAgZXhwZWN0KGFwcC5leHByZXNzRGVjb3JhdGUub3B0cy5tZXJnZVBhcmFtcykudG9CZSh0cnVlKTtcblx0XHRhcHAuU3RvcCgpO1xuICAgICAgICBkb25lKCk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
