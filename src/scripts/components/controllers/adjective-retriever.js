define([
	'jquery',
	'./word-retriever'
], function ($, WordRetriever) {

	var AdjectiveRetriever = WordRetriever.extend({

		getWordByFirstLetter: function (firstLetter) {
			var deferred = new $.Deferred();
			setTimeout(function () {
				deferred.resolve('Angsty');
			}, 0);
			return deferred.promise();
		}

	});

	return AdjectiveRetriever;

});
