var config = require('./config/gulpfile.config.js');
var fs = require('fs');
var gulp = require('gulp');
var scriptFilter = require('./util/script-filter.js');

// Synchronous, as tasks must be defined by end of script execution.
// Filtered, to remove any accidental or hidden files in the directory.
// Note that path is relative to root directory.
var taskFilenames = fs.readdirSync(config.build.root + config.build.tasks.root).filter(scriptFilter);

taskFilenames.forEach(function (taskFilename) {
	// remove last 3 characters (".js")
	var taskName = taskFilename.slice(0, -3);
	var task = require('./' + config.build.tasks.root + taskFilename);
	gulp.task(taskName, task);
});
