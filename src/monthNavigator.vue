<template>
	<nav id="cal-month-navigator">
		<toolbar
			:date="selectedDate"
			ref="toolbar"
			v-on:changeDate="changeDate"
		></toolbar>

		<month :date="selectedDate"></month>
	</nav>
</template>

<style>
	#cal-month-navigator {
		display: flex;
		flex-direction: column;

		padding: 1em;

		border-width: 0 1px 0 0;
		border-color: grey;
		border-style: solid;
	}

	#cal-month-navigator .cal-toolbar {
		flex-direction: row-reverse;
	}

	#cal-month-navigator .cal-toolbar > input {
		display: none;
	}
</style>

<script>
	import toolbar from "./header.vue";
	import MonthVue from "./month.vue";
	import { toUTC } from "./date-util.js";

	export default {
		props: {
			date: {
				type: Date,
				default: () => toUTC( Date.now() )
			}
		},

		components: {
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
