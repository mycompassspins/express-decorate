/**
 * Created by Justin on 8/27/16.
 */

module.exports = (gulp) =>
{
	let sourcemaps = require('gulp-sourcemaps'),
		ts = require('gulp-typescript'),
		cache = require('gulp-cached'),
		runSequence = require('run-sequence');

	let tsconfig = require('gulp-tsconfig-files'),
		del = require('del');

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

	gulp.task('build:app', () =>
	{
		let tsProject = ts.createProject('build/tsconfig.json');
		let tsResult = gulp.src('src/**/*.ts')
			.pipe(cache('DistBuild'))
			.pipe(sourcemaps.init())
			.pipe(ts(tsProject));

		return tsResult.js
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('build'))
	});

	// gulp test runs this first, so this needs to complete before tests can run
	// hence the callback
	gulp.task('build', (cb) =>
	{
		runSequence('clean', 'build:app', cb);
	});
};
