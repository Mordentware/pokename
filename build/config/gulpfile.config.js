module.exports = {
	build: {
		root: 'build/',
		files: '**/*.js',
		tasks: {
			root: 'tasks/',
			files: '**/*.js'
		}
	},
	source: {
		root: 'src/',
		scripts: {
			root: 'scripts/',
			files: '**/*.js'
		}
	},
	target: {
		root: 'dist/',
		scripts: {
			root: 'scripts/'
		}
	}
};
