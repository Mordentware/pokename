var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpSass = require('gulp-sass');

module.exports = function () {
	gulp.src([config.source.root + config.source.styles.root + config.source.styles.files])
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(gulpConcat(config.target.styles.indexFile))
		.pipe(gulp.dest(config.target.root));
};
