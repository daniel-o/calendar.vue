<template>
	<div class="cal-month">
		<span class="cal-date" v-for="date in dateRange">{{ getDay( date ).getDate() }},</span>
	</div>
</template>

<script>
	module.exports = {
		props: [ "date" ],

		computed: {
			currentMonth: function() {
				return this.date.getMonth();
			},

			firstDate: function() {
				const date = new Date( this.date );
				return new Date( date.getFullYear(), date.getMonth(), 1 );
			}
		}
	};
</script>
