<template id="toolbar-vue">
	<header >
		<dateRange :start="startWeekDate()" :end="endWeekDate()"></dateRange>
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
			startWeekDate: function() {
				const day = this.currentDate.getDate() - this.currentDate.getDay();
				return this.currentDate.setDate( day );
			},

			endWeekDate: function() {
				const weekLength = 6;
				const day = weekLength - this.currentDate.getDay() + this.currentDate.getDate();
				return this.currentDate.setDate( day );
			},

			monthLength: function() {
				return new Date( this.currentDate.setDate( 0 ) ).getDate();
			}
		},

		computed: {
			currentDate: function() {
				return new Date( this.date );
			}
		}
	}
</script>
