define([
	'jquery',
	'./base'
], function ($, BaseModel) {

	var Pokemon = BaseModel.extend({

		defaults: function () {
			return {
				uri: null,
				fullName: null,
				pokedexName: null
			};
		},

		getFullName: function () {
			var deferred = $.Deferred();
			var self = this;
			setTimeout(function () {
				if (self.has('fullName')) {
					deferred.resolve(self.get('fullName'));
				}
				else {
					if (self.has('uri')) {
						// request full name
						// TODO
						self.set('fullName', 'Pikachu');
						deferred.resolve(self.get('fullName'));
					}
					else {
						deferred.reject('No URI available for Pokemon.');
					}
				}
			}, 0);
			return deferred.promise();
		}

	});

	return Pokemon;

});
