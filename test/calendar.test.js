const Vue = require( "vue" );
const Calendar = require( "../dist/calendar.vue.js" );

/*
 * NOTE: When constructing a Date object all month values are 0 based.
 * So when comparing output values increment the number by one.
 */
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


		it( "will create multiple date and time buckets", () => {
			const one = new Date( 2017, 3, 5, 9, 30 );
			const two = new Date( 2017, 3, 5, 4, 15 );
			const three = new Date( 2019, 6, 6, 6, 00 );

			const cal = new Calendar();
			cal.addEvent( one, { one: 1 } );
			cal.addEvent( two, { two : 2 } );
			cal.addEvent( three, { three: 3 } );

			// NOTE: The date will be converted to UTC timezone after being passed
			// to the Calendar object.
			const expected = {
				"4/5/2017" : {
					"14:30:00" : [ { one: 1 } ],
					"09:15:00" : [ { two: 2 } ]
				},
				"7/6/2019" : {
					"11:00:00" : [ { three: 3 } ]
				}
			};

			expect( cal.events ).toEqual( expected );
		} );
	} );
} );
