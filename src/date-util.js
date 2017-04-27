module.exports = {
	dateStamp: function( date ) {
		return date.toLocaleDateString();
	},

	timeStamp: function( date ) {
		return date.toLocaleTimeString( "UTC", { hour12: false }  );
	},

	toUTC: function( datetime ) {
		const date = new Date( datetime );
		return new Date(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),

				date.getUTCHours(),
				date.getUTCMinutes()
			);
	}
};
