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
		styles: {
			root: 'styles/',
			files: '**/*.scss'
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
		styles: {
			indexFile: 'app.css'
		},
		templates: {
			root: 'templates/'
		},
		vendor: {
			root: 'vendor/'
		}
	}
};
