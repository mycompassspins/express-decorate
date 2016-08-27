/**
 * Created by Justin on 8/27/16.
 */

module.exports = (gulp) =>
{
	let del = require('del'),
		runSequence = require('run-sequence');

	gulp.task('clean:build', () =>
	{
		return del(['build/**/*', '!build/tsconfig.json']);
	});

	gulp.task('clean:dist', () =>
	{
		return del(['dist/**/*', '!dist/tsconfig.json']);
	});

	gulp.task('clean', () => runSequence('clean:build', 'clean:dist'));
};
