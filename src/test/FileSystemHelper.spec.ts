/**
 * Created by Justin on 8/19/16.
 */

process.env.NODE_ENV = 'test';
import { FileSystemHelper as fsHelper } from '../lib/helpers/FileSystemHelper'

describe('FileSystemHelper', () =>
{
	let srcDir = __dirname,
		isDir = fsHelper.IsDirectory(srcDir);

	it('should show that /src is a directory and not a file', (done:Function) =>
	{
		expect(isDir).toBe(true);
		done();
	});

	it('should traverse /src/test directory and return all files ', (done:Function) =>
	{
		let contents:string[] = fsHelper.GetDirectoryContents(srcDir, false);
		expect(contents.length).toBeGreaterThan(7);
		done();
	});
});

