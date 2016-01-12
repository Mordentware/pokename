var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');
var gulpEslint = require('gulp-eslint');

module.exports = function () {
	return gulp.src([config.source.root + config.source.scripts.root + config.source.scripts.files])
		.pipe(gulpEslint())
		.pipe(gulpEslint.format())
		.pipe(gulpEslint.failAfterError());
};
