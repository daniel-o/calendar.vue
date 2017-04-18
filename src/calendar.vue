<template id="calendar-vue">
	<div class="calendar">
		<toolbar :date="selectedDate"></toolbar>
	</div>
</template>

<script>
	const toolbar = require( "./header.vue" );
	const CalendarSource = require( "./calendar.js" );

	module.exports = Calendar = {
		mixins: [ CalendarSource ],
		components: {
			toolbar
		}
	}
</script>
