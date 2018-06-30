<template id="toolbar-vue">
	<header class="cal-toolbar">
		<dateRange :start="startWeekDate" :end="endWeekDate"></dateRange>

		<div class="cal-date-control">
			<input type="button" value="<" v-on:click="decrementDate" />
			<input type="button" value=">" v-on:click="incrementDate" />
		</div>

		<input type="button" value="Today" v-on:click="todayDate" />
	</header>
</template>

<style>
	header.cal-toolbar {
		grid-area: "cal-header";

		display: flex;

		margin: 0;
	}

	header.cal-toolbar > * {
		display: flex;
		margin-right: 1em;
	}

	header.cal-toolbar > .cal-date {
		flex-basis: 20em;
	}

	header.cal-toolbar > *:last {
		margin: 0;
	}

	.cal-date-control {
		word-spacing: -1em;
	}
</style>

<script>
	import RangeLabel from "./dateRange.vue";
	import { startWeekDate, endWeekDate, monthLength } from "./date-util.js";

	export default {
		props: [ "date" ],

		components: {
			dateRange: RangeLabel
		},

		methods: {
			startDifference: function() {
				return this.date.getDate() - this.date.getDay();
			},

			incrementDate: function() {
				this.$emit( "incrementDate" );
			},

			decrementDate: function() {
				this.$emit( "decrementDate" );
			},

			todayDate: function() {
				this.$emit( "todayDate" );
			}
		},

		computed: {
			startWeekDate() {
				return startWeekDate( this.date );
			},

			endWeekDate() {
				return endWeekDate( this.date );
			},

			monthLength() {
				return monthLength( this.date );
			}
		}
	}
</script>
