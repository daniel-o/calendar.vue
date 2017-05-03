<template>
	<div class="cal-month">
		<span class="cal-date" v-for="date in dateRange">{{ getDay( date ).getDate() }},</span>
	</div>
</template>

<script>
	module.exports = {
		props: [ "date" ],

		methods: {
			getDay: function( date ) {
				const delta = date - this.firstDate.getDay();
				const day =  new Date( this.date ).setDate( delta );
				return new Date( day );
			}
		},

		computed: {
			currentMonth: function() {
				return this.date.getMonth();
			},

			firstDate: function() {
				const date = new Date( this.date );
				return new Date( date.getFullYear(), date.getMonth(), 1 );
			},

			lastDate: function() {
				const date = new Date( this.date );
				return new Date( date.getFullYear(), date.getMonth() + 1, 0 );
			},

			dateRange: function() {
				const weekLength = 6;
				const end = weekLength - this.lastDate.getDay();
				return this.lastDate.getDate() + this.firstDate.getDay() + end;
			}
		}
	};
</script>
