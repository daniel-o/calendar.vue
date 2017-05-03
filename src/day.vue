<template>
	<div class="cal-day" v-bind:class="state">
		{{ this.date.getDate() }}
	</div>
</template>
