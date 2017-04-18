<template>
	<span class="cal-date label">
		<dateLabel
			:date="start"
			:displayyear="splitYear()"></dateLabel>
			-
			<dateLabel
				:date="end"
				:displaymonth="splitMonth()"></dateLabel>
	</span>
</template>

<script>
	const DateLabel = require( "./dateLabel.vue" );
	
	module.exports = {
		props: [ "start", "end" ],

		components: {
			dateLabel: DateLabel
		},

		methods: {
			splitMonth: function() {
				return new Date( this.start ).getMonth() == new Date( this.end ).getMonth();
			},

			splitYear: function() {
				return new Date( this.start ).getFullYear() == new Date( this.end ).getFullYear();
			}
		}
	}
</script>
