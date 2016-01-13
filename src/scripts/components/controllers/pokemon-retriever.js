define([
	'jquery',
	'./word-retriever',
	'../models/pokemon',
	'../collections/pokemons',
	'config',
	'../../mock/pokedex'
], function ($, WordRetriever, Pokemon, Pokemons, config, mockPokedex) {

	var PokemonRetriever = WordRetriever.extend({

		initialize: function () {
			WordRetriever.prototype.initialize.apply(this);
			// create empty map
			this.pokemonMap = {};
			var alphabet = 'abcdefghijklmnopqrstuvwxyz';
			for (var i = 0; i < alphabet.length; i++) {
				this.pokemonMap[alphabet[i]] = new Pokemons();
			}
			// load pokedex
			var self = this;
			var promise;
			if (!config.mockData) {
				// request
				promise = $.ajax({
					url: config.pokemonApi.root + config.pokemonApi.pokedex
				});
			}
			else {
				// use mock data
				var deferred = $.Deferred();
				setTimeout(function () {
					deferred.resolve(mockPokedex);
				}, 0);
				promise = deferred.promise();
			}
			promise.then(function (response) {
				// process returned data
				for (var i = 0; i < response.pokemon.length; i++) {
					var pokemon = response.pokemon[i];
					// get first letter of name to determine which collection to place in
					var firstLetter = pokemon.name.charAt(0);
					if (firstLetter != null) {
						self.pokemonMap[firstLetter].add(new Pokemon({
							uri: pokemon.resource_uri,
							pokedexName: pokemon.name
						}));
					}
				}
			}, function (response) {
				// error
				throw new Error('Unable to populate Pokemon map in Pokemon retriever.');
			});
		},

		getWordByFirstLetter: function (firstLetter) {
			var self = this;
			var deferred = $.Deferred();
			setTimeout(function () {
				// randomly select pokemon from map
				var pokemon = self.pokemonMap[firstLetter].sample();
				if (pokemon != null) {
					pokemon.getFullName().then(function (response) {
						deferred.resolve(response);
					}, function (response) {
						// error
						deferred.reject(response);
					});
				}
				else {
					deferred.reject('No Pokemon with given name found.');
				}
			}, 0);
			return deferred.promise();
		}

	});

	return PokemonRetriever;

});
