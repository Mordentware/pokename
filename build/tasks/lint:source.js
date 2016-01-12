var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('lint:source:scripts', callback);
};
