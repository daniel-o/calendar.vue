export function dateStamp( date ) {
	return date.toLocaleDateString();
}

export function timeStamp( date ) {
	return date.toLocaleTimeString( "UTC", { hour12: false }  );
}

export function toUTC( datetime ) {
	const date = new Date( datetime );
	return new Date(
		date.getUTCFullYear(),
		date.getUTCMonth(),
		date.getUTCDate(),

		date.getUTCHours(),
		date.getUTCMinutes()
	);
}

function startDifference( date ) {
	return date.getDate() - date.getDay();
}

/**
 * Wrapped in a new Date object so that set Date doesn't affect the
 * original passed date object.
 */
export function startWeekDate( date ) {
	return new Date( date ).setDate( startDifference( date ) );
}

export function endWeekDate( date ) {
	const weekLength = 6;
	const day = weekLength - date.getDay() + date.getDate();
	return new Date( date ).setDate( day );
}

export function monthLength( date ) {
	return new Date( date ).setDate( 0 ).getDate();
}

export function changeMonth( date, delta ) {
	const currentMonth = date.getMonth();
	return new Date( date ).setMonth( currentMonth + delta );
}

function getTimelessDate( date ) {
	return new Date( date ).toLocaleDateString();
}

export function dateEquals( one, two ) {
	return getTimelessDate( one ) === getTimelessDate( two );
}
