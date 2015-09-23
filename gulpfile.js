var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

gulp.task('babel', function () {
  return gulp
      .src("./src/**/*.js")
      .pipe(babel({ optional: ["runtime"] }))
      .pipe(gulp.dest("dist"));
});

gulp.task('browserify', function() {
    return browserify('./dist/gip.js', {standalone: 'gip'})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('gip.bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});

gulp.task('compress', function() {
  return gulp.src('./build/gip.bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/min/'));
});

gulp.task('watch', function(){
    watch('src/**/*.js', function() {
        runSequence('babel', 'browserify', 'compress');
    });
});
