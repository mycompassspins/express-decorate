/**
 * Created by Justin on 8/21/16.
 */

import { AppStart } from './app'
import { Request } from './helpers/HttpHelper'

describe('RouteConfig', () =>
{
	let app:any = AppStart(4000);

	it('should have a route configured for /test', (done:Function) =>
	{
		Request.Get('http://localhost:4000/test')
			.then((res) =>
			{
				expect(res.success).toBe(true);
				expect(res.message).toEqual('Successfully served route /test');
				app.Stop();
				done();
			})
	})
});

