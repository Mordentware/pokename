var runSequence = require('run-sequence');

module.exports = function (callback) {
	runSequence('watch:scripts', 'watch:styles', 'watch:templates', callback);
};
