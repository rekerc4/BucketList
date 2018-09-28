"use strict"; 

const gulp = require("gulp"); 
const CONCAT = require("gulp-concat");
const uglify = require('gulp-uglify-es').default;


gulp.task("defualt", () => {
    console.log("hello"); 
}); 

gulp.task("second", ["defualt"], () => {
    console.log("bye"); 
});

gulp.task("concat", () => {
    return gulp
        .src(["app/module.js" , "services/api.js", "components/**/*.js"])
        .pipe(CONCAT("main.js"))
        .pipe(gulp.dest("app/dist/"));
});


 
gulp.task("minify", ["concat"], () => {
    return gulp.src("app/dist/main.js")
        .pipe(uglify())
        .pipe(gulp.dest("app/dist/"));
});