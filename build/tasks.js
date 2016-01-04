var fs = require('fs');
var gulp  = require('gulp');
var scriptFilter = require('./util/script-filter.js');

// Synchronous, as tasks must be defined by end of script execution.
// Filtered, to remove any accidental or hidden files in the directory.
// Note that path is relative to root directory.
var taskFilenames = fs.readdirSync('./build/tasks/').filter(scriptFilter);

taskFilenames.forEach(function (taskFilename) {
	// remove last 3 characters (".js")
	var taskName = taskFilename.slice(0, -3);
	var task = require('./tasks/' + taskFilename);
	gulp.task(taskName, task);
});
