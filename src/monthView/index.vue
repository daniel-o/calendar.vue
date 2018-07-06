<template>
	<month :date="date">
		<div slot-scope="props">
			<day :date="props.date" :selectedDate="date"></day>
		</div>
	</month>
</template>

<script>
	import Month from "../month.vue";
	import Day from "../day.vue";

	export default {
		props: [ "date" ],

		components: {
			Day,
			Month
		}
	}
</script>
