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
