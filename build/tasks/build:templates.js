var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('build:templates:components', 'build:templates:index', callback);
};
