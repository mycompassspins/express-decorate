/**
 * Created by Justin on 8/19/16.
 */

import { Request } from './helpers/HttpHelper'
import { AppStart } from './app'

describe('HttpHelper', () =>
{
	let app:any = AppStart(2000);

	it('should get a 200 response when requesting http://www.google.com', (done:Function) =>
	{
		Request.Get('http://www.google.com')
			.then((res) =>
			{
				expect(res).toBe(200);
				done();
			});
	});

	it('should get a 404 response when requesting http://www.google.com/nothing', (done:Function) =>
	{
		Request.Get('http://www.google.com/nothing')
			.then((res) =>
			{
				expect(res).toBe(404);
				app.Stop();
				done();
			});
	});
});
