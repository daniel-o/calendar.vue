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

<script>
	const RangeLabel = require( "./dateRange.vue" );

	module.exports = {
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
