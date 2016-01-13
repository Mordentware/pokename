define([
	'./base'
], function (BaseModel) {

	var Name = BaseModel.extend({

		defaults: function () {
			return {
				adjective: '',
				pokemon: ''
			};
		}

	});

	return Name;

});
