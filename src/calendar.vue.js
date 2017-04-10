const CalendarTemplate = require( "./vues/calendar.vue" );
const toolbar = require( "./header.js" ).Header;

module.export = Calendar = Vue.extend( {
	mixins: [ CalendarTemplate ],
	components: {
		toolbar
	}
} );
