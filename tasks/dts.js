/**
 * Created by justin on 1/22/17.
 */


module.exports = (gulp) => {
	let dtsGenerator = require('dts-generator'),
		exec = require('child_process').exec,
		gulpSequence = require('gulp-sequence'),
		del = require('del');

	let appName = 'express-decorate';

	gulp.task('gen-def', 'Generate a single .d.ts bundle containing external module declarations', (cb) => {
		return dtsGenerator.default({
			name: appName,
			baseDir: 'src',
			files: ['index.ts'],
			out: `dist/${appName}.d.ts`,
			exclude: ['node_modules']
		});
	});

	gulp.task('_build', 'INTERNAL TASK - Compiles all TypeScript source files', (cb) => {
		exec('tsc --version', (err, stdout, stderr) => {
			console.log('TypeScript ', stdout);
			if (stderr) {
				console.log(stderr);
			}
		});

		return exec('tsc -p npm.tsconfig.json', (err, stdout, stderr) => {
			console.log(stdout);
			if (stderr) {
				console.log(stderr);
			}
			cb(err);
		});
	});

	gulp.task('npm-lint', 'INTERNAL TASK - Remove triple slashes from compiled .d.ts files', (cb) => {
		return exec('ts-npm-lint --fix-typings', (err, stdout, stderr) => {
			console.log(stdout);
			if (stderr) {
				console.log(stderr);
			}
			cb(err);
		});
	});

	gulp.task('dts', 'Compiles all TypeScript source files and updates module references',
		gulpSequence('clean:dist', '_build', 'npm-lint', 'gen-def'));
};
