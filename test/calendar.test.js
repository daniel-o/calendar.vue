const Calendar = require( "../src/calendar.js" );

describe( "Calendar", function() {
	it( "will add an event", function() {
		const date = new Date( 2017, 3, 5, 9, 30 );
		const cal = new Calendar();
		cal.addEvent( date, { one: 1 } );

		// NOTE: The date will be converted to UTC timezone after being passed
		// to the Calendar object.
		const expected = {
			"4/5/2017" : {
				"14:30:00" : [ { one: 1 } ]
			}
		};

		expect( cal.events ).toEqual( expected );
	} );
} );
