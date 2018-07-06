/**
 * Events object will store all events in 'day buckets'. Using the date without
 * timestamp as the key. Then each date will hold 'timestamp buckets' containing
 * an array of actual events. All Timestamps will be stored as UTC. Ex:
 * 	"02-04-2017" : {
 * 		"13:30:00" : [ { event: data } ]
 * 	}
 **/

<template>
	<div id="calendar">
		<nav id="cal-navbar">
			<span>...</span>
			<toolbar :date="selectedDate" @changeDate="changeDate"></toolbar>
		</nav>
		<main id="cal-content">
			<div>
				<month-navigator :date="selectedDate" @selectedDate="changeDate">
				</month-navigator>
			</div>

			<month id="cal-main" :date="selectedDate">
			<div slot-scope="props">{{ new Date( props.date ).getDate() }}</div>
			</month>
		</main>
	</div>
</template>

<style>
	html, body {
		padding: 0;
		margin: 0;
		height: 100%;
	}

	#calendar {
		display: flex;
		flex-direction: column;

		height: 100%;
	}

	#cal-navbar {
		display: flex;
		padding: 1em;

		font-size: 1.25rem;

		border-width: 0 0 1px 0;
		border-color: grey;
		border-style: solid;
	}

	#cal-content {
		display: flex;
		flex: 1;
		flex-basis: auto;
	}

	#cal-main .cal-day {
		border-width: 0 1px 1px 0;
		border-style: solid;
		border-color: grey;
	}
</style>

<script>
	import { dateStamp, timeStamp, toUTC } from "./date-util.js";
	import toolbar from "./header.vue";
	import Month from "./month.vue";
	import Navigator from "./navigator.vue";

	export default {
		props: {
			events: {
				type: Object,
				default: () => new Object()
			}
		},

		data: function() {
			return {
				selectedDate: new Date()
			}
		},

		components: {
			toolbar,
			Month,
			"month-navigator": Navigator
		},

		methods: {
			changeDate( date ) {
				this.selectedDate = new Date( date );
			}
		}
	}
</script>
