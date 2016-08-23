/**
 * Created by Justin on 8/16/16.
 */

module.exports = (gulp) =>
{
	let jasmine = require('gulp-jasmine-node'),
		argv = require('yargs').argv;

	gulp.task('test', 'Runs the Jasmine test specs', () =>
	{
		return gulp.src(argv.file || 'test/**/*.spec.js')
			.pipe(jasmine({
				timeout: 10000,
				includeStackTrace: false,
				color: true
			}));
	});
};
