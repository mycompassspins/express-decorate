/**
 * Created by Justin on 8/16/16.
 */

module.exports = (gulp) =>
{
	let jasmine = require('gulp-jasmine-node'),
		argv = require('yargs').argv;

	gulp.task('test', 'Runs the Jasmine test specs', ['build'], () =>
	{
		return gulp.src(argv.file ? `build/test/${argv.file}.spec.js` : 'build/test/**/*.spec.js')
			.pipe(jasmine({
				timeout: 10000,
				includeStackTrace: false,
				color: true
			}));
	});
};
