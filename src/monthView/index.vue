<template>
	<month :date="date">
		<div class="cal-column" slot-scope="props">
			<day :date="props.date" :selectedDate="date"></day>
			<div class="cal-event-target" @click="createEvent()"></div>
		</div>
	</month>
</template>

<style>
	.cal-column {
		height: 100%;

		display: flex;
		flex-direction: column;
	}

	.cal-event-target {
		grow: 1;
	}
</style>

<script>
	import Month from "../month.vue";
	import Day from "../day.vue";
	import EventTarget from "../eventTarget.mixin.js";

	export default {
		props: [ "date" ],
		mixins: [ EventTarget ],

		components: {
			Day,
			Month
		}
	}
</script>
