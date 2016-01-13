var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('lint:styles', 'build:styles', callback);
};
