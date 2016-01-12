var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');

module.exports = function () {
	return gulp.src([config.source.root + config.source.scripts.root + config.source.scripts.files])
		.pipe(gulp.dest(config.target.root + config.target.scripts.root));
};
