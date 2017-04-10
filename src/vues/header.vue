<template id="toolbar-vue">
<header>
	<span class="cal-month">{{ monthName }}</span>
	<span class="dates">{{ dateRange }}</span>,
	<span class="year">{{ new Date( this.selectedDate || Date.now() ).getFullYear() }}</span>
</header>
</template>
