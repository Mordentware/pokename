var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('clean', 'lint', 'build', callback);
};
