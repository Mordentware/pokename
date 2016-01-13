define([
	'./base'
], function (BaseModel) {

	var LabelledValue = BaseModel.extend({

		className: 'LabelledValue',

		defaults: function () {
			return {
				label: '',
				value: null
			};
		},

		initialize: function (attributes) {
			// validate attributes
			this.validate('label', this.get('label'));
			this.on('change:label', function (model, value) {
				this.validate('label', value);
			});
		},

		validate: function (attribute, value) {
			switch (attribute) {
				case 'label':
					if (!(typeof value === 'string')) {
						throw new Error(this.className + ' "label" attribute is not a string.');
					}
					break;
			}
		}

	});

	return LabelledValue;

});
