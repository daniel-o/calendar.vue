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
			return this.currentDate.setDate( day );
		},

		endWeekDate: function() {
			const weekLength = 6;
			const day = weekLength - this.currentDate.getDay() + this.currentDate.getDate();
			return this.currentDate.setDate( day );
		},

		monthLength: function() {
			return new Date( this.currentDate.setDate( 0 ) ).getDate();
		}
	},

	computed: {
		currentDate: function() {
			return new Date( this.date );
		}
	}
} );
