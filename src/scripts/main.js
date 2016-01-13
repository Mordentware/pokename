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
	'components/views/name-generator'
], function (AdjectiveRetriever, PokemonRetriever, Names, AppView, NameGenerator) {

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
		})
	});
	appView.render();

});
