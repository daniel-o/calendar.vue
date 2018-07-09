<template>
	<month :date="date">
		<div class="cal-column" slot-scope="props">
			<day :date="props.date" :selectedDate="date"></day>
			<event-target :start="props.date" v-on="$listeners"></event-target>
		</div>
	</month>
</template>

<style>
	.cal-column {
		height: 100%;

		display: flex;
		flex-direction: column;
	}
</style>

<script>
	import Month from "../month.vue";
	import Day from "../day.vue";
	import EventTarget from "../eventTarget.vue";

	export default {
		props: [ "date" ],

		components: {
			Day,
			Month,
			EventTarget
		}
	}
</script>
