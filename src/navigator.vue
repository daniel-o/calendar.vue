<template>
	<nav id="cal-navigator">
		<toolbar
			:date="selectedDate"
			ref="toolbar"
			v-on:changeDate="changeDate"
		></toolbar>

		<month :date="selectedDate">
			<day
				slot-scope="props"
				:date="props.date"
				:selectedDate="props.selectedDate"
				v-on="$listeners"
			></day>
		</month>
	</nav>
</template>

<style>
	#cal-navigator {
		display: flex;
		flex-direction: column;

		padding: 1em;
	}

	#cal-navigator .cal-toolbar {
		flex-direction: row-reverse;
	}

	#cal-navigator .cal-toolbar > input {
		display: none;
	}

	#cal-navigator > .cal-month {
		grid-gap: 0;
	}

	#cal-navigator .cal-day:not(.cal-current-date):hover {
		background: #d3dbe8;
	}
</style>

<script>
	import toolbar from "./header.vue";
	import MonthVue from "./month.vue";
	import Day from "./day.vue";
	import { toUTC } from "./date-util.js";

	export default {
		props: {
			date: {
				type: Date,
				default: () => toUTC( Date.now() )
			}
		},

		components: {
			Day,
			toolbar,
			"month": MonthVue
		},

		data: function() {
			return {
				selectedDate: this.date
			}
		},

		watch: {
			// This is to maintain function parity with google calendar.
			date( value, old ) {
				this.selectedDate = value;
			}
		},

		methods: {
			changeDate: function( date ) {
				this.selectedDate = new Date( date );
			}
		}
	}
</script>
