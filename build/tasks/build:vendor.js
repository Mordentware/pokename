var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');
var gulpMainBowerFiles = require('gulp-main-bower-files');

module.exports = function () {
	return gulp.src('bower.json')
		.pipe(gulpMainBowerFiles())
		.pipe(gulp.dest(config.target.root + config.target.vendor.root));
};
