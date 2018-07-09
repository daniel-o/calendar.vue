<template>
	<div
		class="cal-day"
		:class="{ 'cal-current-date': isToday, 'cal-selected-date': isSelected && !isToday }">
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
		line-height: 100%;

		cursor: pointer;
	}

	.cal-day.cal-current-date {
		color: #d3dbe8;
		background-color: #4286f4;
	}

	.cal-day.cal-selected-date {
		background-color: #d3dbe8;
	}
</style>

<script>
	import { dateEquals } from "./date-util.js";

	export default {
		props: [ "date", "selectedDate" ],

		computed: {
			isToday() {
				return dateEquals( this.date, Date.now() );
			},

			isSelected() {
				return dateEquals( this.date, this.selectedDate );
			}
		},

		methods: {
			selectDate: function() {
				this.$emit( "selectedDate", this.date );
			}
		}
	}
</script>
