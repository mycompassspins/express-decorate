/**
 * Created by Justin on 8/16/16.
 */

///<reference path="../typings/index.d.ts" />

import { AppStart } from '../src/lib/api'
import { FileSystemHelper as fsHelper } from '../src/lib/helpers/FileSystemHelper'
import express = require('express');

describe('ExpressDecorate', () =>
{
	let app:any = AppStart(9000);

    it('should fail if the provided controllers directory does not exist', (done:Function) =>
    {
		let ctrlDir:string = `${__dirname}/${app.expressDecorate.opts.ctrlDir}`,
			isDir:boolean,
			err:string;

		try
		{
			isDir = fsHelper.IsDirectory(ctrlDir);
		}
		catch(e)
		{
			isDir = false;
			err = e.message;
		}

		expect(isDir).toBe(false);
		expect(err).toEqual(`ENOENT: no such file or directory, lstat '${ctrlDir}'`);

		done();
    });

    it('should properly set options defaults', (done:Function) =>
    {
        expect(app.expressDecorate.opts.ctrlLoadRecursive).toBe(true);
        expect(app.expressDecorate.opts.ctrlIgnore).not.toBeDefined();
        expect(app.expressDecorate.opts.mergeParams).toBe(true);
		app.Stop();
        done();
    });
});
