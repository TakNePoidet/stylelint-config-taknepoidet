'use strict';

module.exports = {
	plugins: ['stylelint-scss', 'stylelint-order'],
	extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-prettier/recommended'],
	rules: {
		indentation: 'tab'
	}
};
