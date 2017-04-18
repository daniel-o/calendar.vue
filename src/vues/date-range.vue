<template>
<span class="cal-date label">
	<dateLabel
		:date="start"
		:displayyear="splitYear()"></dateLabel>
		-
		<dateLabel
			:date="end"
			:displaymonth="splitMonth()"></dateLabel>
</span>
</template>
