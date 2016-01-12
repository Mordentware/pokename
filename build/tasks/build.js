var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('build:scripts', 'build:styles', 'build:templates', callback);
};
