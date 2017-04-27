const gulp = require( "gulp" );
const jasmine = require( "gulp-jasmine" );
const webpack = require( "webpack-stream" );
const vueLoader = require( "vue-loader" );

gulp.task( "dist", () =>
		gulp.src( "src/calendar.vue" )
			.pipe( webpack( {
				module: { loaders: [ {
					test: /vue$/,
					loader: "vue-loader"
				} ] },

				output: {
					filename: "calendar.vue.js",
					umdNamedDefine: false
				}
			} ) )

			.pipe( gulp.dest( "dist/" ) )
);

gulp.task( "test", () =>
	gulp.src( "test/**/*.test.js" )
		.pipe( jasmine( { config: { helpers: [ "test/helpers/load-dependencies.js" ] } } ) )
);

gulp.task( "default", [ "dist" ] );
