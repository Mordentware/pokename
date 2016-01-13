define([
	'backbone',
	'./base'
], function (Backbone, BaseModel) {

	var Subset = BaseModel.extend({

		className: 'Subset',

		defaults: function () {
			return {
				fullSet: new Backbone.Collection(),
				selection: new Backbone.Collection()
			};
		},

		initialize: function (attributes) {
			// validate attributes
			this.validate('fullSet', this.get('fullSet'));
			this.validate('selection', this.get('selection'));
			// link via listeners
			this.listenTo('fullSet', 'remove', function (model, collection) {
				// remove from selection if present
				this.get('selection').remove(model);
			}, this);
			this.listenTo('fullSet', 'reset', function (collection) {
				// reset selection (TODO: improve?)
				this.get('selection').reset();
			}, this);
			this.listenTo('selection', 'add', function (model, collection) {
				// ensure new selected model is in full set
				this.get('fullSet').add(model);
			}, this);
		},

		validate: function (attribute, value) {
			switch (attribute) {
				case 'fullSet':
					if (!(value instanceof Backbone.Collection)) {
						throw new Error(this.className + ' "fullSet" attribute is not a Backbone.Collection.');
					}
					break;
				case 'selection':
					if (!(value instanceof Backbone.Collection)) {
						throw new Error(this.className + ' "selection" attribute is not a Backbone.Collection.');
					}
					break;
			}
		}

	});

	return Subset;

});
