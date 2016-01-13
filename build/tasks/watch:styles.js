var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');

module.exports = function () {
	gulp.watch(config.source.root + config.source.styles.root + config.source.styles.files, ['lint-build:styles']);
};
