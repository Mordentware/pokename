define([
	'jquery',
	'underscore',
	'./word-retriever',
	'config',
	'../../mock/adjectives'
], function ($, _, WordRetriever, config, mockAdjectives) {

	var AdjectiveRetriever = WordRetriever.extend({

		getWordByFirstLetter: function (firstLetter) {
			var deferred = new $.Deferred();
			if (!config.mockData) {
				// request
				$.ajax({
					url: config.adjectiveApi.root + config.adjectiveApi.adjective + firstLetter
				}).then(function (response) {
					// process returned data
					if (response.adjective != null) {
						deferred.resolve(response.adjective);
					}
					else {
						deferred.reject(response);
					}
				}, function (response) {
					// error
					deferred.reject(response);
				});
			}
			else {
				// use mock data
				var adjectives = mockAdjectives[firstLetter.toLowerCase()];
				var adjective = _.sample(adjectives);
				deferred.resolve(adjective);
			}
			return deferred.promise();
		}

	});

	return AdjectiveRetriever;

});
