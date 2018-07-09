<template>
	<div id="calendar">
		<nav id="cal-navbar">
			<span>...</span>
			<toolbar :date="selectedDate" @changeDate="changeDate"></toolbar>
		</nav>
		<main id="cal-content">
			<div id="cal-sidebar">
				<navigator id="cal-navigator" :date="selectedDate" @selectedDate="changeDate">
				</navigator>
			</div>

			<component
			id="cal-main"
			:is="'month'"
			:date="selectedDate"
	 		:events.sync="events"
			@createEvent="createEvent">
			</component>
		</main>

		<event-dialog ref="event"></event-dialog>
	</div>
</template>

<style>
	html, body {
		padding: 0;
		margin: 0;
		height: 100%;
	}

	*, ::after, ::before {
		box-sizing: initial;
	}

	#calendar {
		display: flex;
		flex-direction: column;

		height: 100%;
	}

	#cal-navbar {
		display: flex;
		padding: 1em;

		font-size: 1.25rem;

		border-width: 0 0 1px 0;
		border-color: grey;
		border-style: solid;
	}

	#cal-sidebar {
		flex-shrink: 0;
	}

	#cal-content {
		display: flex;
		flex: 1;
		flex-basis: auto;
	}
</style>

<script>
	import "vue-material/dist/vue-material.min.css";

	import toolbar from "./header.vue";
	import Month from "./monthView/index.vue";
	import Navigator from "./navigator.vue";
	import EventDialog from "./eventDialog.vue";
	import { monthLength, startWeekDate, endWeekDate } from "./date-util.js";

	export default {
		props: {
			events: {
				type: Object,
				default: () => new Object()
			}
		},

		data: function() {
			return {
				events: new Array(),
				selectedDate: new Date()
			}
		},

		components: {
			toolbar,
			Month,
			Navigator,
			EventDialog
		},

		created() {
			this.changeDate( new Date() );
		},

		methods: {
			changeDate( date ) {
				this.selectedDate = new Date( date );

				const firstDateOfMonth = new Date( this.selectedDate ).setDate( 1 );
				const firstDate = startWeekDate( firstDateOfMonth );
				const lastDate = endWeekDate( new Date( this.selectedDate ).setDate( monthLength( this.selectedDate ) ) );

				this.fetchEvents( new Date( firstDate ), new Date( lastDate ) );
			},

			createEvent( event ) {
				this.$refs.event.open();
			},

			fetchEvents( start, end ) {
				const url = `/events?start=${ start }&end=${ end }`;
				fetch( url ).then( response => 
					response.json().then( events => this.events = events ) );
			}
		}
	}
</script>
