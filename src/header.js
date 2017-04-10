const HeaderTemplate = require( "./vues/header.vue" );

exports.Header = Vue.extend( {
	mixins: [ HeaderTemplate ],
	props: [ "selectedDate" ],
	computed: {
		monthName: function() {
			return new Date( this.selectedDate || Date.now() )
				.toLocaleString( "en-us", { month: "long" } );
		}
	}
} );
