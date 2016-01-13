var config = require('../config/gulpfile.config.js');
var gulpConnect = require('gulp-connect');

module.exports = function () {
	gulpConnect.server({
		root: config.target.root
	});
};
