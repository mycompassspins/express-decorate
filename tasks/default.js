/**
 * Created by Justin on 8/16/16.
 */

module.exports = (gulp) =>
{
	let runSeq = require('run-sequence');

	gulp.task('default', 'Builds app and tests and runs Jasmine specs', () =>
	{
		runSeq('build', 'test');
	})
};
