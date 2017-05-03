<template>
	<div class="cal-day">
		{{ this.date.getDate() }}
	</div>
</template>

<script>
	module.exports = {
		props: [ "date", "state" ]
	}
</script>
