define([
	'backbone',
	'../models/labelled-value'
], function (Backbone, LabelledValue) {

	var LabelledValues = Backbone.Collection.extend({

		model: LabelledValue

	});

	return LabelledValues;

});
