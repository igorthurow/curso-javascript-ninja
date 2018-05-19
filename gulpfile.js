var gulp = require('gulp'),
    less = require('gulp-less'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename');

gulp.task('watch', function () {
  gulp.watch('challenge-21/*.less', ['less']);
});

gulp.task('less', function () {

  return gulp.src('challenge-21/*.less')
    .pipe(less().on('error', function (err) {
      console.log(err);
    }))
    .pipe(cssmin().on('error', function(err) {
      console.log(err);
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['less', 'watch']);