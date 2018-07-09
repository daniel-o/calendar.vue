<template>
	<md-dialog :md-active.sync="opened" :md-backdrop=false class="cal-event-dialog" :md-click-outside-to-close=true>
		<input type="text" placeholder="Event Title" class="cal-event-title" autofocus />

		<md-dialog-actions>
			<md-button @click="close()">Save</md-button>
		</md-dialog-actions>
	</md-dialog>
</template>

<style>
	.cal-event-dialog{
		padding: 1em 1em 0 1em;
		background-color: white;
	}

	.cal-event-title {
		font-size: 1.25em;
		font-weight: bold;
		border-width: 0;
	}
</style>

<script>
	import { MdDialog, MdButton } from "vue-material/dist/components";
	Vue.use( MdDialog );
	Vue.use( MdButton );

	export default {
		data() {
			return {
				opened: false
			}
		},

		methods: {
			open() {
				this.opened = true;
			},

			close() {
				this.opened = false;
			}
		}
	}
</script>
