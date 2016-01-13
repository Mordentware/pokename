var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('lint:scripts', 'build:scripts', callback);
};
