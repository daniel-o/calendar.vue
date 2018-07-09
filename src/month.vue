<template>
	<div class="cal-month">
		<div
			class="cal-date"
			v-for="day in dateRange"
			:key="day.valueOf()"
		>
			<slot :date="getDay( day )" :selectedDate="date" :events="getEvents( getDay( day ) )"></slot>
		</div>
	</div>
</template>

<style>
	.cal-month {
		grid-area: "cal-month";
		grid-column: minmax( 2fr, auto );

		display: grid;
		grid-template-columns: repeat( 7, 1fr );

		/* Using grid-gap and bg-color to create "grid lines" */
		grid-gap: 1px;
		background-color: grey;

		flex-grow: 1;

	}

	.cal-month > * {
		background-color: white;
	}
</style>

<script>
	import { dateEquals } from "./date-util.js";

	export default {
		props: {
			"date": Date,
			"events": {
				type: Array,
				default: []
			}
		},

		methods: {
			getDay: function( date ) {
				const delta = date - this.firstDate.getDay();
				const day =  new Date( this.date ).setDate( delta );
				return new Date( day );
			},

			getEvents( date ) {
				return this.events.filter( event => dateEquals( event.start, date ) ); 
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
