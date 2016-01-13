var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('lint:templates', 'build:templates', callback);
};
