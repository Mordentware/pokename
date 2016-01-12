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
		},
		templates: {
			root: 'templates/',
			indexFile: 'index.jade',
			components: {
				root: 'components/',
				files: '**/*.jade'
			}
		}
	},
	target: {
		root: 'dist/',
		scripts: {
			root: 'scripts/'
		},
		templates: {
			root: 'templates/'
		}
	}
};
