const path = require( "path" );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );

module.exports = {
	entry: "./src/calendar.vue",

	devtool: "source-map",
	output: {
		filename: "calendar.vue.js",
		path: path.resolve( __dirname, "dist" )
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true
				}
			},

			{
				test: [ /\.css$/ ],
				use: ExtractTextPlugin.extract( {
					use: [
						"style-loader",
						"css-loader"
					 ]
				} )
			}
		]
	},

	plugins: [
		new ExtractTextPlugin( "calendar.css" ),
	]
};
