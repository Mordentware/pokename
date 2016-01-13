define([
	'./base',
	'templates/app'
//	'./name-list',
//	'./name-generator'
], function (BaseView, AppTemplate/*, NameList, NameGenerator*/) {

	var AppView = BaseView.extend({

		className: 'AppView',
		el: '#pokename-app',
		template: AppTemplate,

		initialize: function (options) {
			options = options || {};
			BaseView.prototype.initialize.apply(this);
			this.validate('nameGeneratorView', options.nameGeneratorView);
			this.validate('savedNamesListView', options.savedNamesListView);
			this.childViews = {
				nameGeneratorView: options.nameGeneratorView,
				savedNamesListView: options.savedNamesListView
			};
		},

		validate: function (option, value) {
			switch (option) {
				case 'nameGeneratorView':
					// TODO
					break;
				case 'savedNamesListView':
					// TODO
					break;
			}
		}

	});

	return AppView;

});
