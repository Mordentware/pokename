require.config({
	paths: {
		backbone: '../vendor/backbone/backbone',
		jade: '../vendor/jade-runtime/jade-runtime',
		jquery: '../vendor/jquery/dist/jquery',
		underscore: '../vendor/underscore/underscore',
		templates: '../templates'
	}
});

require([
	'components/views/app'
], function (AppView) {});
