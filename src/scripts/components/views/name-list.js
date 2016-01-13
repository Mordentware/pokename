define([
	'underscore',
	'./base',
	'templates/name-list',
	'./name-item'
], function (_, BaseView, NameListTemplate, NameItem) {

	var NameList = BaseView.extend({

		className: 'NameList',
		template: NameListTemplate,

		initialize: function () {
			BaseView.prototype.initialize.apply(this);
			// validate options
			// TODO
			// add relevant listeners
			this.listenTo(this.collection, 'add', this.generateNameItemView);
			this.listenTo(this.collection, 'remove', this.removeNameItemView);
			this.listenTo(this.collection, 'all', this.render);
			this.collection.each(this.generateNameItemView, this);
		},

		getRenderContext: function () {
			var context = BaseView.prototype.getRenderContext.apply(this);
			context.items = _.map(this.childViews, function (item) {
				return {
					viewId: item.viewId
				};
			});
			return context;
		},

		generateNameItemView: function (name) {
			var newItem = new NameItem({
				model: name,
				collection: this.collection
			});
			// add to child views
			this.childViews[name.modelId] = newItem;
			return newItem;
		},

		removeNameItemView: function (name) {
			delete this.childViews[name.modelId];
		}

	});

	return NameList;

});
