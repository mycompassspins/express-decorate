/**
 * Created by Justin on 8/19/16.
 */

let gulpMain = require('gulp'),
	gulp = require('gulp-help')(gulpMain),
	fs = require('fs');

/**
 * @description
 * Load all tasks from the tasks directory, passing the gulp object to each one
 */
loadTasks();
function loadTasks()
{
	// Read /tasks directory
	fs.readdirSync('./tasks').forEach((file) => require(`./tasks/${file}`)(gulp));
}
