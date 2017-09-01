<template>
	<div class="cal-month">
		<day
			class="cal-date"
			v-for="day in dateRange"
			:date="getDay( day )">
		</day>
	</div>
</template>

<style>
	.cal-month {
		grid-area: "cal-month";
		grid-column: minmax( 2fr, auto );

		display: grid;
		grid-template-columns: repeat( 7, 1fr );
	}
</style>

<script>
	const DayVue = require( "./day.vue" );

	module.exports = {
		props: [ "date" ],

		components: {
			day: DayVue
		},

		methods: {
			getDay: function( date ) {
				const delta = date - this.firstDate.getDay();
				const day =  new Date( this.date ).setDate( delta );
				return new Date( day );
			}
		},

		computed: {
			currentMonth: function() {
				return this.date.getMonth();
			},

			firstDate: function() {
				const date = new Date( this.date );
				return new Date( date.getFullYear(), date.getMonth(), 1 );
			},

			lastDate: function() {
				const date = new Date( this.date );
				return new Date( date.getFullYear(), date.getMonth() + 1, 0 );
			},

			dateRange: function() {
				const weekLength = 6;
				const end = weekLength - this.lastDate.getDay();
				return this.lastDate.getDate() + this.firstDate.getDay() + end;
			}
		}
	};
</script>
