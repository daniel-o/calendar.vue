<template>
	<nav id="cal-month-navigator">
		<toolbar
			:date="selectedDate"
			ref="toolbar"
			v-on:incrementDate="incrementDate"
			v-on:decrementDate="decrementDate"
			v-on:todayDate="setToday"
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
</style>

<script>
	import toolbar from "./header.vue";
	import MonthVue from "./month.vue";
	import { toUTC } from "./date-util.js";

	export default {
		props: {
			selectedDate: {
				type: Date,
				default: () => toUTC( Date.now() )
			}
		},

		components: {
			toolbar,
			"month": MonthVue
		},

		methods: {
			changeMonth: function( delta ) {
				const date = toUTC( this.selectedDate );
				const currentMonth = date.getMonth();
				this.selectedDate = toUTC( date.setMonth( currentMonth + delta ) );
			},

			incrementDate: function() {
				this.changeMonth( 1 );
			},

			decrementDate: function() {
				this.changeMonth( -1 );
			},

			setToday: function() {
				this.selectedDate = toUTC( Date.now() );
			}
		}
	}
</script>
