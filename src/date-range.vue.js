const DateLabelVue = require( "./vues/date-label.vue" );
const RangeLabelVue = require( "./vues/date-range.vue" );

const DateLabel = Vue.extend( {
	mixins: [ RangeLabelVue ],
	props: [ "date", "displaymonth", "displayyear" ],

	computed: {
		monthName: function() {
			return new Date( this.date )
				.toLocaleString( "en-us", { month: "long" } );
		},

		day: function() {
			return new Date( this.date ).getDate();
		},

		fullYear: function() {
			return new Date( this.date ).getFullYear();
		}
	},

	methods: {
		displayMonth: function() {
			return this.displaymonth === undefined || ! this.displaymonth;
		},

		displayYear: function() {
			return this.displayyear === undefined || ! this.displayyear;
		}
	}
} );

exports.RangeLabel = Vue.extend( {
	mixins: [ DateLabelVue ],
	props: [ "start", "end" ],

	components: {
		dateLabel: DateLabel
	},

	methods: {
		splitMonth: function() {
			return new Date( this.start ).getMonth() == new Date( this.end ).getMonth();
		},

		splitYear: function() {
			return new Date( this.start ).getFullYear() == new Date( this.end ).getFullYear();
		}
	}
} );
