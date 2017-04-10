const HeaderTemplate = require( "./vues/header.vue" );

exports.Header = Vue.extend( {
	mixins: [ HeaderTemplate ]
} );
