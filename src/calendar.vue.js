const Header = require( "./header.js" ).Header;

module.export = Calendar = Vue.extend( {
	template: "<div class='calendar'><cal-header></cal-header></div>",
	components: {
		"cal-header": Header
	}
} );
