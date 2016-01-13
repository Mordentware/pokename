module.exports = {
	build: {
		root: 'build/',
		files: '**/*.js',
		tasks: {
			root: 'tasks/',
			files: '**/*.js'
		}
	},
	root: {
		bowerFile: 'bower.json'
	},
	source: {
		root: 'src/',
		scripts: {
			root: 'scripts/',
			files: '**/*.js',
			mainFile: 'main.js'
		},
		styles: {
			root: 'styles/',
			files: '**/*.scss'
		},
		templates: {
			root: 'templates/',
			files: '**/*.jade',
			indexFile: 'index.jade',
			components: {
				root: 'components/',
				files: '**/*.jade'
			}
		},
		vendor: {
			root: 'vendor/',
			files: '**/**'
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
