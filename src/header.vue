<template id="toolbar-vue">
	<header class="cal-toolbar">
		<dateRange :start="startWeekDate" :end="endWeekDate"></dateRange>

		<div class="cal-date-control">
			<input type="button" value="<" v-on:click="decrementMonth" />
			<input type="button" value=">" v-on:click="incrementMonth" />
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
	import { startWeekDate, endWeekDate, monthLength, changeMonth } from "./date-util.js";

	export default {
		props: [ "date" ],

		components: {
			dateRange: RangeLabel
		},

		methods: {
			changeDate( date ) {
				this.$emit( "changeDate", date );
			},

			incrementMonth() {
				this.changeDate( changeMonth( this.date, 1 ) );
			},

			decrementMonth() {
				this.changeDate( changeMonth( this.date, -1 ) );
			},

			todayDate() {
				this.changeDate( Date.now() );
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
