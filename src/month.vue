/*const DayVue = require( "./day.vue" );

const DayVue = Vue.extend( {
	props: [ "date", "status" ],
	template: "<div :class='status + ' date''> {{ date }} </div>"
} );*/

<template>
<div class='calendar month'>
	<header>
		<div class='month'>{{ monthName() }}</div>
		<div class='year'>{{ year }}</div>
	</header>
	<day></day>
</div>
</template>

<script>
module.exports = MonthVue = Vue.extend( {
	props: [ "year", "month" ]
} );
</script>
