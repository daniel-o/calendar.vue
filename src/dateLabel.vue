<template>
	<span class="cal-date label">
		<span class="cal-month" v-if="displayMonth() === true">{{ monthName }}</span>
		<span class="cal-date">{{ day }}</span>
		<span class="cal-year" v-if="displayYear() === true">, {{ fullYear }}</span>
	</span>
</template>

<script>
	module.exports = Vue.extend( {
		props: [ "date", "displaymonth", "displayyear" ],

		computed: {
			monthName: function() {
				return new Date( this.date )
					.toLocaleString( "en-us", { month: "long" } );
			},

			day: function() {
				return new Date( this.date ).getDate();
			},

			fullYear: function() {
				return new Date( this.date ).getFullYear();
			}
		},

		methods: {
			displayMonth: function() {
				return this.displaymonth === undefined || ! this.displaymonth;
			},

			displayYear: function() {
				return this.displayyear === undefined || ! this.displayyear;
			}
		}
	} );
</script>
