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
		<toolbar
			:date="selectedDate"
			ref="toolbar"
			v-on:incrementDate="incrementDate"
			v-on:decrementDate="decrementDate"
			v-on:todayDate="setToday"
		></toolbar>

		<month :date="selectedDate"></month>
	</div>
</template>

<style>
	.calendar {
		display: grid;
		grid-template-columns: repeat( 10, 1fr );
	}
</style>

<script>
	import toolbar from "./header.vue";
	import DateUtil from "./date-util.js";
	import MonthVue from "./month.vue";

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
			},

			selectedDate: {
				type: Date,
				default: () => DateUtil.toUTC( Date.now() )
			}
		},

		components: {
			toolbar,
			month: MonthVue
		},

		methods: {
			// TODO: This will eventually send contextual events like,
			// "incrementMonth" and "incrementDay"
			incrementDate: function() {
				this.changeMonth( 1 );
			},

			decrementDate: function() {
				this.changeMonth( -1 );
			},

			setToday: function() {
				this.selectedDate = DateUtil.toUTC( Date.now() );
			},

			addEvent: function( date, event ) {
				const utcDate = DateUtil.toUTC( date );
				const dateBucket = eventEntry( this.events, DateUtil.dateStamp( utcDate ), new Object() );
				const timeBucket = eventEntry( dateBucket, DateUtil.timeStamp( utcDate ), new Array() );

				return timeBucket.push( event );
			},

			changeMonth: function( delta ) {
			 const date = new DateUtil.toUTC( this.selectedDate );
			 const currentMonth = date.getMonth();
			 this.selectedDate = DateUtil.toUTC( date.setMonth( currentMonth + delta ) );
			}
		}
	}
</script>
