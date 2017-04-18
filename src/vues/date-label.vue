<template>
<span class="cal-date label">
	<span class="cal-month" v-if="displayMonth() === true">{{ monthName }}</span>
	<span class="cal-date">{{ day }}</span>
	<span class="cal-year" v-if="displayYear() === true">, {{ fullYear }}</span>
</span>
</template>
