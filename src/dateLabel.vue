<template>
	<span class="cal-date label">
		<span v-if="isDisplay( 'year' )">
			{{ fullYear( this.date ) }}
		</span>

		<span v-if="isDisplay( 'month' )">
			{{ monthLabel( this.date ) }}
		</span>
	</span>
</template>

<script>
	export default {
		props: {
			"date": Date,
			"display": {
				type: String,
				default: "month",
				validator: ( value ) =>
					[ "week", "month", "year" ]
						.includes( value.trim().toLowerCase() )
			}
		},

		methods: {
			monthName: function( date ) {
				return new Date( date )
					.toLocaleString( "en-us", { month: "long" } );
			},

			fullYear: function( date ) {
				return date.getFullYear();
			},

			isDisplay( value ) {
				return this.display === value;
			},

			monthLabel( date, showYear = true ) {
				// yearLabel is defined in preperation for calling multiple monthLabel
				// instances within weekLabel when the week includes days from both Dec & Jan
				const yearLabel = showYear ? " " + this.fullYear( date ) : ""; 
				return this.monthName( date ) + yearLabel;
			}
		}
	}
</script>
