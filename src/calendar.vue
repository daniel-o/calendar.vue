/**
 * Events object will store all events in 'day buckets'. Using the date without
 * timestamp as the key. Then each date will hold 'timestamp buckets' containing
 * an array of actual events. All Timestamps will be stored as UTC. Ex:
 * 	"02-04-2017" : {
 * 		"13:30:00" : [ { event: data } ]
 * 	}
 **/

<template>
	<div class="calendar">
		<nav id="cal-navbar">
			<span>...</span>
			<toolbar :date="new Date()"></toolbar>
		</nav>
		<main id="cal-content">
			<month-navigator>
			</month-navigator>

			<month :date="new Date()"></month>
		</main>
	</div>
</template>

<style>
	.calendar {
		display: flex;
		flex-direction: column;
	}

	#cal-navbar {
		display: flex;
	}

	#cal-content {
		display: flex;
	}
</style>

<script>
	import DateUtil from "./date-util.js";
	import toolbar from "./header.vue";
	import Month from "./month.vue";
	import MonthNavigator from "./monthNavigator.vue";

	function eventEntry( obj, property, value ) {
		return obj.hasOwnProperty( property ) ?
			obj[ property ] :
			obj[ property ] = value;
	}

	export default {
		props: {
			events: {
				type: Object,
				default: () => new Object()
			}
		},

		components: {
			toolbar,
			Month,
			"month-navigator": MonthNavigator
		},

		methods: {
			addEvent: function( date, event ) {
				const utcDate = DateUtil.toUTC( date );
				const dateBucket = eventEntry( this.events, DateUtil.dateStamp( utcDate ), new Object() );
				const timeBucket = eventEntry( dateBucket, DateUtil.timeStamp( utcDate ), new Array() );

				return timeBucket.push( event );
			}
		}
	}
</script>
