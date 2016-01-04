module.exports = {
	directories: {
		build: 'build/',  // if changed, also update ../tasks.js
		source: 'src/',
		target: 'dist/'   // if changed, also update ../../.gitignore
	},
	scripts: {
		build: {
			files: '**/*.js'
		},
		source: {
			files: '**/*.js',
			rootFile: 'root.js'
		},
		target: {
			rootFile: 'pokename.js'
		}
	}
};
