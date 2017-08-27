<template>
	<div class="cal-day">
		<a v-on:click="selectDate">{{ this.date.getDate() }}</a>
	</div>
</template>

<script>
	module.exports = {
		props: [ "date", "state" ]
	},

	methods: {
		selectDate: function() {
			this.$emit( "change" );
		}
	}
</script>
