const path = require( "path" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const VueLoaderPlugin = require( "vue-loader/lib/plugin" );

module.exports = {
	entry: "./src/calendar.vue",

	devtool: "source-map",
	output: {
		filename: "calendar.vue.js",
		path: path.resolve( __dirname, "dist" ),
		library: "Calendar"
	},

	plugins: [
		new VueLoaderPlugin(),

		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],

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
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			}
		]
	},

	// Might need to eventually replace server with ExpressJS server; instructions:
	// https://webpack.js.org/guides/development/#using-webpack-dev-middleware
	devServer: {
		contentBase: [ "dist", "test", "node_modules/vue/dist/" ]
	}
};
