var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');
var gulpMainBowerFiles = require('gulp-main-bower-files');
var mergeStream = require('merge-stream');

module.exports = function () {

	var standardFiles = gulp.src(config.root.bowerFile)
		.pipe(gulpMainBowerFiles({
			checkExistance: true
		}))
		.pipe(gulp.dest(config.target.root + config.target.vendor.root));

	// deal with included vendor files (do not play nicely with Bower)
	var customFiles = gulp.src(config.source.root + config.source.vendor.root + config.source.vendor.files)
		.pipe(gulp.dest(config.target.root + config.target.vendor.root));

	return mergeStream(standardFiles, customFiles);

};
