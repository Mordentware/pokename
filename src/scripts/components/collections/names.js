define([
	'backbone',
	'../models/name'
], function (Backbone, Name) {

	var Names = Backbone.Collection.extend({

		model: Name

	});

	return Names;

});
