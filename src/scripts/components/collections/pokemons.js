define([
	'backbone',
	'../models/pokemon'
], function (Backbone, Pokemon) {

	var Pokemons = Backbone.Collection.extend({

		model: Pokemon

	});

	return Pokemons;

});
