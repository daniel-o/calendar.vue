<template>
	<div class="cal-day">
		<a v-on:click="selectDate">{{ this.date.getDate() }}</a>
	</div>
</template>

<style>
	.cal-day {
		padding: 0.5em;
	}
</style>

<script>
	export default {
		props: [ "date", "state" ],

		methods: {
			selectDate: function() {
				this.$emit( "change" );
			}
		}
	}
</script>
