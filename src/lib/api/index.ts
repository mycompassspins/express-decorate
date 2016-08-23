/**
 * Created by Justin on 8/21/16.
 */

import { Application } from './Application'

export function AppStart(port:number)
{
	let app:Application = new Application(port);

	app.Config();
	app.Start();

	return app;
}
