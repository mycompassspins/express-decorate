/**
 * Created by Justin on 8/27/16.
 */

module.exports = (gulp) =>
{
	let sourcemaps = require('gulp-sourcemaps'),
		exec = require('child_process').exec,
		chalk = require('chalk'),
		runSequence = require('run-sequence');

	gulp.task('build:readme', () =>
	{
		return gulp.src('ReadMe.md')
			.pipe(gulp.dest('dist'));
	});

	gulp.task('build:pkg', () =>
	{
		return gulp.src('package.json')
			.pipe(gulp.dest('dist'))
	});

	gulp.task('build:src', 'Compile server-side TS', (cb) =>
	{
		exec('tsc --version', (err, stdout, stderr) =>
		{
			console.log(chalk.green("Typescript " + stdout));
		});

		return exec('tsc', (err, stdout, stderr) =>
		{
			if (err) console.log(stderr);
			console.log(chalk.green("Done Compiling TS " + stdout));
			cb(err);
		})
	});

	// gulp test runs this first, so this needs to complete before tests can run
	// hence the callback
	gulp.task('build', (cb) =>
	{
		runSequence('clean', 'build:src', cb);
	});
};
