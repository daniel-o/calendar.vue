/**
 * Events object will store all events in 'day buckets'. Using the date without
 * timestamp as the key. Then each date will hold 'timestamp buckets' containing
 * an array of actual events. All Timestamps will be stored as UTC. Ex:
 * 	"02-04-2017" : {
 * 		"13:30:00" : [ { event: data } ]
 * 	}
 **/
function calendar() {
	var currentDate = UTCDateTime( Date.now() );
	const events = {};

	function addEvent( date, event ) {
		const utcDate = UTCDateTime( date );
		const dateBucket = eventEntry( events, dateStamp( utcDate ), new Object() );
		const timeBucket = eventEntry( dateBucket, timeStamp( utcDate ), new Array() );
		
		return timeBucket.push( event );
	}

	function eventEntry( obj, property, value ) {
		return obj.hasOwnProperty( property ) ?
			obj[ property ] :
			obj[ property ] = value;
	}

	function dateStamp( date ) {
		return date.toLocaleDateString();
	}

	function timeStamp( date ) {
		return date.toLocaleTimeString( "UTC", { hour12: false }  );
	}

	/**
	 * Because there's not a `toUTCDate()` function.
	 * I'm dropping the second values.
	 **/
	function UTCDateTime( datetime ) {
		const date = new Date( datetime );
		return new Date(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),

				date.getUTCHours(),
				date.getUTCMinutes()
			);
	}

	return { 
		events,
		addEvent
	}
}

module.exports = calendar;
