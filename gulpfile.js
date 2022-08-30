var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");



// Js Task
gulp.task("scripts", function () {
    return gulp
      .src("./js/*.js")
      .pipe(concat("main.js"))
      .pipe(uglify())
      .pipe(gulp.dest("."))
  });
  