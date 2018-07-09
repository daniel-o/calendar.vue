function roundToFifth( value ) {
	return Math.ceil( value / 5 ) * 5;
}

export default {
	props: {
		start: {
			type: Date,
			default() {
				const minutes = roundToFifth( new Date().getMinutes() );
				return new Date( new Date().setMinutes( minutes ) );
			}
		},

		end: {
			type: Date,
			default() {
				const baseDate = new Date( this.start );
				const minutes = baseDate.getMinutes() + 30;
				return new Date( baseDate.setMinutes( minutes ) );
			}
		}
	},

	methods: {
		createEvent() {
			const eventTimes = { start: this.start, end: this.end }; 
			console.log( eventTimes );
			this.$emit( "createEvent", eventTimes );
		}
	}
}
