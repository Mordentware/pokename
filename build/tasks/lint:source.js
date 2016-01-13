var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('lint:scripts', 'lint:styles', 'lint:templates', callback);
};
