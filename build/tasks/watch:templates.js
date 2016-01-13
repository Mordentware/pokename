var config = require('../config/gulpfile.config.js');
var gulp = require('gulp');

module.exports = function () {
	gulp.watch(config.source.root + config.source.templates.root + config.source.templates.files, ['lint-build:templates']);
};
