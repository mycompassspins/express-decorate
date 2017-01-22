/**
 * Created by Justin on 8/27/16.
 */

module.exports = (gulp) =>
{
	let del = require('del'),
		runSequence = require('run-sequence');

	gulp.task('clean:build', () =>
	{
		return del(['build/**/*']);
	});

	gulp.task('clean:dist', () =>
	{
		return del(['dist/**/*']);
	});

	gulp.task('clean', () => runSequence('clean:build', 'clean:dist'));
};
