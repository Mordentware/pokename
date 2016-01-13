var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');

module.exports = function () {
	gulp.watch(config.source.root + config.source.scripts.root + config.source.scripts.files, ['lint-build:scripts']);
};
