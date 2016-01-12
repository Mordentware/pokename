var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');
var gulpBower = require('gulp-bower');

module.exports = function () {
	return gulpBower()
		.pipe(gulp.dest(config.target.root + config.target.vendor.root));
};
