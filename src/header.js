const HeaderTemplate = require( "./vues/header.vue" );
const DateLabel = require( "./date-range.vue.js" ).RangeLabel;

exports.Header = Vue.extend( {
	mixins: [ HeaderTemplate ],
	props: [ "date" ],

	components: {
		dateRange: DateLabel
	},

	methods: {
		startWeekDate: function() {
			const day = this.currentDate.getDate() - this.currentDate.getDay();
			console.log( this.currentDate );
			console.log( this.currentDate.setDate( day ) );
			return this.currentDate.setDate( day );
		},

		endWeekDate: function() {
			const day = 6 - this.currentDate.getDay() + this.currentDate.getDate();
			return this.currentDate.setDate( day );
		},

		monthLength: function() {
			return new Date( this.currentDate.setDate( 0 ) ).getDate();
		},

		splitMonth: function() {
			return ( this.rawStartWeekDate() < 0 ) || ( this.rawEndWeekDate() > this.monthLength() );
		}
	},

	computed: {
		currentDate: function() {
			return new Date( this.date );
		}
	}
} );
