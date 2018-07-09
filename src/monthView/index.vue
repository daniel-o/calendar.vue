<template>
	<month :date="date" :events="events">
		<div class="cal-column" slot-scope="props">
			<day :date="props.date" :selectedDate="date"></day>
			<div
				class="cal-event-tag"
				v-for="event in props.events"
				:title="event.title">{{ event.title }}</div>
			<event-target :start="props.date" v-on="$listeners"></event-target>
		</div>
	</month>
</template>

<style>
	.cal-column {
		flex-grow: 1;
		height: 100%;

		display: flex;
		flex-direction: column;
	}

	.cal-event-tag {
		font-size: 0.8em;
		box-sizing: border-box;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

		padding: 0.2em;
		margin: 0.2em;
		background-color: #a3bbe2;
		border-radius: 3px;
		cursor: default;
	}
</style>

<script>
	import Month from "../month.vue";
	import Day from "../day.vue";
	import EventTarget from "../eventTarget.vue";

	export default {
		props: [ "date", "events" ],

		components: {
			Day,
			Month,
			EventTarget
		}
	}
</script>
