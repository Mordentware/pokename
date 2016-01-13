require.config({
	paths: {
		backbone: '../vendor/backbone/backbone',
		backboneController: '../vendor/backbone.controller/backbone.controller',
		jade: '../vendor/jade-runtime/jade-runtime',
		jquery: '../vendor/jquery/dist/jquery',
		underscore: '../vendor/underscore/underscore',
		templates: '../templates',
		config: 'config'
	}
});

require([
	'components/controllers/adjective-retriever',
	'components/controllers/pokemon-retriever',
	'components/collections/names',
	'components/views/app',
	'components/views/name-generator',
	'components/views/name-list'
], function (AdjectiveRetriever, PokemonRetriever, Names, AppView, NameGenerator, NameList) {

	// create core controllers
	var adjectiveRetriever = new AdjectiveRetriever();
	var pokemonRetriever = new PokemonRetriever();

	// create core collections
	var savedNames = new Names();

	var appView = new AppView({
		nameGeneratorView: new NameGenerator({
			savedNames: savedNames,
			adjectiveRetriever: adjectiveRetriever,
			pokemonRetriever: pokemonRetriever
		}),
		savedNamesListView: new NameList({
			collection: savedNames
		})
	});
	appView.render();

});
