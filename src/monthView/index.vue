<template>
	<month :date="date">
		<div slot-scope="props">{{ new Date( props.date ).getDate() }}</div>
	</month>
</template>

<script>
	import Month from "../month.vue";

	export default {
		props: [ "date" ],

		components: {
			Month
		}
	}
</script>
