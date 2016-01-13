define([
	'backboneController'
], function (BackboneController) {

	var WordRetriever = BackboneController.extend({

		initialize: function () {},

		getWordByFirstLetter: function (firstLetter) {
			throw new Error('Method getWordByFirstLetter has not been implemented for a child of the abstract class WordRetriever.');
		}

	});

	return WordRetriever;

});
