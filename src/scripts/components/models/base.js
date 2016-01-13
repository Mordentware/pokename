define([
	'backbone',
	'underscore'
], function (Backbone, _) {

	var BaseModel = Backbone.Model.extend({

		className: 'BaseModel',

		initialize: function () {
			this.modelId = _.uniqueId('model');
		}

	});

	return BaseModel;

});
