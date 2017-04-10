const HeaderTemplate = require( "./vues/header.vue" );

exports.Header = Vue.extend( {
	mixins: [ HeaderTemplate ],
	props: [ "selectedDate" ],
	computed: {
		monthName: function() {
			return new Date( this.selectedDate || Date.now() )
				.toLocaleString( "en-us", { month: "long" } );
		},
		dateRange: function() {
			// daysInWeek is a base 0 range.
			const daysInWeek = 6;
			const date = new Date( this.selectedDate || Date.now() );
			const current = date.getDate();
			const day = date.getDay();

			const start = current - day;
			console.log( start );
			const end = daysInWeek - day + current;
			
			return start + " - " + end;
		}
	}
} );
