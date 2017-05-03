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
			}
		}
	};
</script>
