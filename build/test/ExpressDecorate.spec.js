/**
 * Created by Justin on 8/16/16.
 */
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
//# sourceMappingURL=ExpressDecorate.spec.js.map