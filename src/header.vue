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
		grid-column: 1 / 11;

		display: flex;

		margin: 0;
		padding: 1em;
	}

	header.cal-toolbar > * {
		display: inline;
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
			startWeekDate: function() {
				return new Date( this.date ).setDate( this.startDifference() );
			},

			endWeekDate: function() {
				const weekLength = 6;
				const day = weekLength - this.currentDate.getDay() + this.currentDate.getDate();
				return this.currentDate.setDate( day );
			},

			monthLength: function() {
				return new Date( this.currentDate.setDate( 0 ) ).getDate();
			},

			currentDate: function() {
				return new Date( this.date );
			}
		}
	}
</script>
