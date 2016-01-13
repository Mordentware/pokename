var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var gulpWrapAmd = require('gulp-wrap-amd');

module.exports = function () {
	return gulp.src(config.source.root + config.source.templates.root + config.source.templates.components.root + config.source.templates.components.files)
		.pipe(gulpJade({
			client: true
		}))
		.pipe(gulpWrapAmd({
			deps: ['jade'],
			params: ['jade']
		}))
		.pipe(gulp.dest(config.target.root + config.target.templates.root));
};
