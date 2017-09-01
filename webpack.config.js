const path = require( "path" );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );

module.exports = {
	entry: "./src/calendar.vue",

	devtool: "source-map",
	output: {
		filename: "calendar.vue.js",
		path: path.resolve( __dirname, "dist" ),
		library: "Calendar",
		libraryTarget: "window"
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

	// Might need to eventually replace server with ExpressJS server; instructions:
	// https://webpack.js.org/guides/development/#using-webpack-dev-middleware
	devServer: {
		contentBase: [ "dist", "test", "node_modules/vue/dist/" ]
	},

	plugins: [
		new ExtractTextPlugin( "calendar.vue.css" ),
	]
};
