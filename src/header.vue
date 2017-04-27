<template id="toolbar-vue">
	<header >
		<dateRange :start="startWeekDate" :end="endWeekDate"></dateRange>

		<div class="date-control">
			<input type="button" value=">" v-on:click="incrementDate" />
		</div>
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

			// TODO: This will eventually send contextual events like,
			// "incrementMonth" and "incrementDay"
			incrementDate: function() {
				this.$emit( "incrementDate" );
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
