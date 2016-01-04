var config = require('../config/gulpfile.config.js');
var del = require('del');

module.exports = function () {
	return del([config.directories.target]);
};
