/**
 * Events object will store all events in 'day buckets'. Using the date without
 * timestamp as the key. Then each date will hold 'timestamp buckets' containing
 * an array of actual events. All Timestamps will be stored as UTC. Ex:
 * 	"02-04-2017" : {
 * 		"13:30:00" : [ { event: data } ]
 * 	}
 **/

<template id="calendar-vue">
	<div class="calendar">
		<toolbar :date="selectedDate" ref="toolbar"></toolbar>
		<div>{{ selectedDate }}</div>
	</div>
</template>

<script>
	const toolbar = require( "./header.vue" );
	const DateUtil = require( "./date-util.js" );

	function eventEntry( obj, property, value ) {
		return obj.hasOwnProperty( property ) ?
			obj[ property ] :
			obj[ property ] = value;
	}

	module.exports = Calendar = {
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
			toolbar
		},

		methods: {
			incrementDate: function() {
				this.changeMonth( 1 );
			},

			addEvent: function( date, event ) {
				const utcDate = UTCDateTime( date );
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
