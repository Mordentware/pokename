define([
	'./base',
	'templates/name-item'
], function (BaseView, NameItemTemplate) {

	var NameItem = BaseView.extend({

		className: 'NameItem',
		template: NameItemTemplate,

		initialize: function () {
			BaseView.prototype.initialize.apply(this);
		},

		events: {
			'click i[name="remove"]': 'removeSelf'
		},

		getRenderContext: function () {
			var context = BaseView.prototype.getRenderContext.apply(this);
			context.adjective = this.model.get('adjective');
			context.pokemon = this.model.get('pokemon');
			return context;
		},

		removeSelf: function () {
			this.model.destroy();
		}

	});

	return NameItem;

});
