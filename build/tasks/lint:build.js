var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');
var gulpEslint = require('gulp-eslint');

module.exports = function () {
	return gulp.src([config.build.root + config.build.files])
		.pipe(gulpEslint())
		.pipe(gulpEslint.format())
		.pipe(gulpEslint.failAfterError());
};
