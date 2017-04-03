const gulp = require( "gulp" );
const jasmine = require( "gulp-jasmine" );
const webpack = require( "webpack-stream" );
const vueLoader = require( "vue-loader" );

gulp.task( "webpack", () =>
		gulp.src( "src/*.vue" )
			.pipe( webpack( {
				output: { filename: "calendar.vue.js" },

				module: { loaders: [ {
					test: /vue$/,
					loader: "vue-loader"
				} ] }
			} ) )

			.pipe( gulp.dest( "dist/" ) )
);

gulp.task( "test", () =>
	gulp.src( "test/**/*.test.js" ).pipe( jasmine() )
);
