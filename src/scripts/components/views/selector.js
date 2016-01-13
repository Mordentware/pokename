define([
	'jquery',
	'./base',
	'templates/selector',
	'../models/labelled-value',
	'../models/subset',
	'../collections/labelled-values'
], function ($, BaseView, SelectorTemplate, LabelledValue, Subset, LabelledValues) {

	var Selector = BaseView.extend({

		className: 'Selector',
		template: SelectorTemplate,

		initialize: function () {
			BaseView.prototype.initialize.apply(this);
			// validate options
			this.validate('model', this.model);
			// add relevant listeners
			this.listenTo(this.model.get('fullSet'), 'update reset', this.render);
			this.listenTo(this.model.get('selection'), 'update reset', this.render);
		},

		events: {
			'change select[name="selector"]': 'updateSelection'
		},

		getRenderContext: function () {
			var context = BaseView.prototype.getRenderContext.apply(this);
			var self = this;
			context.options = this.model.get('fullSet').map(function (labelledValue) {
				return {
					label: labelledValue.get('label'),
					value: labelledValue.get('value'),
					selected: self.model.get('selection').contains(labelledValue)
				};
			});
			return context;
		},

		updateSelection: function (e) {
			var value = e.target.value;
			// find relevant model in full set
			var newSelection = this.model.get('fullSet').findWhere({
				value: value
			});
			this.model.get('selection').reset(newSelection);
		},

		validate: function (option, value) {
			switch (option) {
				case 'model':
					if (!(value instanceof Subset)) {
						throw new Error(this.className + ' "model" option is not a Subset instance.');
					}
					if (!(value.get('fullSet') instanceof LabelledValues)) {
						throw new Error(this.className + ' "model" option is not a Subset instance with a "fullSet" attribute that is a LabelledValues instance.');
					}
					if (!(value.get('selection') instanceof LabelledValues)) {
						throw new Error(this.className + ' "model" option is not a Subset instance with a "selection" attribute that is a LabelledValues instance.');
					}
					break;
			}
		}

	});

	return Selector;

});
