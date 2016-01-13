define([
	'jquery',
	'./base',
	'templates/name-generator',
	'../models/labelled-value',
	'../models/name',
	'../models/subset',
	'../collections/labelled-values',
	'../collections/names',
	'../views/selector',
	'../controllers/adjective-retriever',
	'../controllers/pokemon-retriever'
], function ($, BaseView, NameGeneratorTemplate, LabelledValue, Name, Subset, LabelledValues, Names, Selector, AdjectiveRetriever, PokemonRetriever) {

	var NameGenerator = BaseView.extend({

		className: 'NameGenerator',
		template: NameGeneratorTemplate,

		initialize: function (options) {
			options = options || {};
			BaseView.prototype.initialize.apply(this);
			// validate options
			options.savedNames = options.savedNames || new Names();
			this.validate('adjectiveRetriever', options.adjectiveRetriever);
			this.validate('pokemonRetriever', options.pokemonRetriever);
			this.validate('savedNames', options.savedNames);

			this.adjectiveRetriever = options.adjectiveRetriever;
			this.pokemonRetriever = options.pokemonRetriever;
			this.generatedName = new Name();
			this.savedNames = options.savedNames;
			this.listenTo(this.generatedName, 'change', this.render);

			var alphabet = 'abcdefghijklmnopqrstuvwxyz';
			var letters = [];
			for (var i = 0; i < alphabet.length; i++) {
				letters[i] = new LabelledValue({
					label: alphabet[i].toUpperCase(),
					value: alphabet[i]
				});
			}
			letters = new LabelledValues(letters);
			var selection = new LabelledValues(letters.at(0));
			this.childViews.letterSelectorView = new Selector({
				model: new Subset({
					fullSet: letters,
					selection: selection
				})
			});
			this.listenTo(selection, 'change reset', this.generatePokename);
			this.generatePokename();
		},

		getRenderContext: function () {
			var context = BaseView.prototype.getRenderContext.apply(this);
			context.adjective = this.generatedName.get('adjective');
			context.pokemon = this.generatedName.get('pokemon');
			return context;
		},

		events: {
			'click button[name="generate"]': 'generatePokename',
			'click button[name="save"]': 'savePokename'
		},

		generatePokename: function () {
			var self = this;
			var letter = this.childViews.letterSelectorView.model.get('selection').at(0).get('value');
			// adjective
			var adjectivePromise = this.adjectiveRetriever.getWordByFirstLetter(letter);
			// pokemon
			var pokemonPromise = this.pokemonRetriever.getWordByFirstLetter(letter);

			$.when(adjectivePromise, pokemonPromise).then(function (adjectiveResponse, pokemonResponse) {
				self.generatedName.set('adjective', adjectiveResponse);
				self.generatedName.set('pokemon', pokemonResponse);
			}, function (adjectiveResponse, pokemonResponse) {
				self.generatedName.set('adjective', null);
				self.generatedName.set('pokemon', null);
			});
		},

		savePokename: function () {
			if (this.generatedName.get('adjective').length > 0 && this.generatedName.get('pokemon').length > 0) {
				var generatedName = this.generatedName.clone();
				// check if an identical name is already saved
				if (!this.savedNames.findWhere({
					adjective: generatedName.get('adjective'),
					pokemon: generatedName.get('pokemon')
				})) {
					this.savedNames.add(generatedName);
					this.incrementLetter();
				}
			}
		},

		incrementLetter: function () {
			var subset = this.childViews.letterSelectorView.model;
			var currentLetter = subset.get('selection').at(0).get('value');
			var i = currentLetter.charCodeAt(0) - 'a'.charCodeAt(0);
			i = ++i % 26;
			var newLetterModel = subset.get('fullSet').findWhere({
				value: String.fromCharCode(i + 'a'.charCodeAt(0))
			});
			subset.get('selection').reset(newLetterModel);
		},

		validate: function (option, value) {
			switch (option) {
				case 'adjectiveRetriever':
					if (!(value instanceof AdjectiveRetriever)) {
						throw new Error(this.className + ' "adjectiveRetriever" option is not an AdjectiveRetriever instance.');
					}
					break;
				case 'pokemonRetriever':
					if (!(value instanceof PokemonRetriever)) {
						throw new Error(this.className + ' "pokemonRetriever" option is not a PokemonRetriever instance.');
					}
					break;
				case 'savedNames':
					if (!(value instanceof Names)) {
						throw new Error(this.className + ' "savedNames" option is not a Names instance.');
					}
					break;
			}
		}

	});

	return NameGenerator;

});
