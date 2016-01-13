var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');
var gulpJade = require('gulp-jade');

module.exports = function () {
	return gulp.src([config.source.root + config.source.templates.root + config.source.templates.indexFile])
		.pipe(gulpJade({
			locals: {
				// source mainFile as structure is maintained between source and target
				mainScript: config.target.scripts.root + config.source.scripts.mainFile,
				requireJs: config.target.vendor.root + 'requirejs/require.js',
				stylesheet: config.target.styles.indexFile
			}
		}))
		.pipe(gulp.dest(config.target.root));
};
