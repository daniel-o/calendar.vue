<template>
	<div class="cal-event-target" @click="createEvent()">
	</div>
</template>

<style>
	.cal-event-target {
		flex-grow: 1;
	}
</style>

<script>
	import EventTarget from "./eventTarget.mixin.js";

	export default {
		mixins: [ EventTarget ]
	}
</script>
