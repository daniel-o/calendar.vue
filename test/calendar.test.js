const Calendar = require( "../src/calendar.js" );

describe( "Calendar", function() {
	describe( "addEvent", function() {
		it( "will construct the date and time buckets", () => {
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

		it( "will append and event to previously added time buckets", () => {
			const date = new Date( 2017, 3, 5, 9, 30 );
			const cal = new Calendar();
			cal.addEvent( date, { one: 1 } );
			cal.addEvent( date, { two : 2 } );

			// NOTE: The date will be converted to UTC timezone after being passed
			// to the Calendar object.
			const expected = {
				"4/5/2017" : {
					"14:30:00" : [ { one: 1 }, { two: 2 } ]
				}
			};

			expect( cal.events ).toEqual( expected );
		} );
	} );
} );
