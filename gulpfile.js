"use strict"; 

const gulp = require("gulp"); 
const CONCAT = require("gulp-concat");
const uglify = require('gulp-uglify-es').default;
const karma = require('karma').Server;

gulp.task('default', () => {
    console.log("hello"); 
}); 

gulp.task("second", ["defualt"], () => {
    console.log("bye"); 
});

gulp.task('test', function(done){
    new karma({
      configFile: __dirname + '/karma.conf.js'
    }, done).start();
  });

gulp.task("concat", () => {
    return gulp
        .src(["public/app/module.js" , "public/services/api.js", "public/components/**/*.js"])
        .pipe(CONCAT("main.js"))
        .pipe(gulp.dest("public/app/dist/"));
});

gulp.task("minify", ["concat"], () => {
    return gulp.src("app/dist/main.js")
        .pipe(uglify())
        .pipe(gulp.dest("public/app/dist/"));
});