/**
 * Created by Justin on 8/21/16.
 */

module.exports = (gulp) =>
{
	let tsconfig = require('gulp-tsconfig-files'),
		dtsGenerator = require('dts-generator'),
		exec = require('child_process').exec,
		gulpSequence = require('gulp-sequence'),
		del = require('del');

	gulp.task('clean:dist', () =>
	{
		return del(['dist/**/*', '!dist/tsconfig.json']);
	});

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

	let tsFilesGlob = ((c) =>
	{
		return c.filesGlob || c.files || 'src/index.ts';
	})(require('../dist/tsconfig.json'));

	let appName = 'express-decorate';

	gulp.task('update-tsconfig', 'Update files section in tsconfig.json', () =>
	{
		gulp.src(tsFilesGlob).pipe(tsconfig());
	});

	gulp.task('gen-def', 'Generate a single .d.ts bundle containing external module declarations', (cb) =>
	{
		return dtsGenerator.default({
			name: appName,
			baseDir: 'src',
			files: ['index.ts'],
			out: `dist/${appName}.d.ts`,
			exclude: ['node_modules']
		});
	});

	gulp.task('_build', 'INTERNAL TASK - Compiles all TypeScript source files', (cb) =>
	{
		exec('tsc --version', (err, stdout, stderr) =>
		{
			console.log('TypeScript ', stdout);
			if (stderr) {
				console.log(stderr);
			}
		});

		return exec('tsc -p dist/tsconfig.json', (err, stdout, stderr) =>
		{
			console.log(stdout);
			if (stderr) {
				console.log(stderr);
			}
			cb(err);
		});
	});

	gulp.task('npm-lint', 'INTERNAL TASK - Remove triple slashes from compiled .d.ts files', (cb) =>
	{
		return exec('ts-npm-lint --fix-typings', (err, stdout, stderr) =>
		{
			console.log(stdout);
			if (stderr) {
				console.log(stderr);
			}
			cb(err);
		});
	});

	// run clean:uom task, then run update-tsconfig and gen-def in parallel, then run _build
	gulp.task('dts', 'Compiles all TypeScript source files and updates module references',
		gulpSequence('clean:dist', '_build', 'npm-lint', 'build:readme', 'build:pkg'));
};

