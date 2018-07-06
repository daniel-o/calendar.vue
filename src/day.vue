<template>
	<div class="cal-day" :class="{ 'cal-current-date': isToday }">
		<a @click="selectDate">{{ this.date.getDate() }}</a>
	</div>
</template>

<style>
	.cal-day {
		width: 1em;
		height: 1em;
		padding: 0.2em;
		margin: 0.2em;
		border-radius: 9999px;
		text-align: center;
	}

	.cal-day.cal-current-date {
		background-color: #dbdde0;
	}
</style>

<script>
	import { isToday } from "./date-util.js";

	export default {
		props: [ "date", "state" ],

		computed: {
			isToday() {
				return isToday( this.date );
			}
		},

		methods: {
			selectDate: function() {
				this.$emit( "selectedDate", this.date );
			}
		}
	}
</script>
