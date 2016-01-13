var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('clean', 'build', 'serve', callback);
};
