function DateUtil() {
	/**
	 * Because there's not a `toUTCDate()` function.
	 * I'm dropping the second values.
	 **/
	function toUTC( datetime ) {
		const date = new Date( datetime );
		return new Date(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),

				date.getUTCHours(),
				date.getUTCMinutes()
			);
	}

	return {
		toUTC
	}
}

module.exports = DateUtil;
