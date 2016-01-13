define([
	'backbone',
	'underscore'
], function (Backbone, _) {

	var BaseView = Backbone.View.extend({

		className: 'BaseView',
		template: null,

		initialize: function () {
			this.childViews = {};
			this.viewId = _.uniqueId('view');
		},

		getRenderContext: function () {
			return {
				childViews: this.childViews
			};
		},

		render: function () {
			this.$el.addClass(this.className);
			this.$el.html(typeof this.template === 'function' ? this.template(this.getRenderContext()) : null);
			// render child views
			var ref = this.childViews;
			for (var key in ref) {
				var view = ref[key];
				view.$el = this.$('#' + view.viewId);
				view.render();
				view.delegateEvents();
			}
			return this;
		}
	});

	return BaseView;

});
