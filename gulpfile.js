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
      .pipe(gulp.dest("./build/gipp-transpiled/lib/"));
});

gulp.task('browserify', function() {
    return browserify('./build/gipp-transpiled/lib/gipp.js', {standalone: 'gipp'})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('gipp.bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/gipp-bundle/'));
});

gulp.task('compress', function() {
  return gulp.src('./build/gipp-bundle/gipp.bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/gipp-min-bundle/'));
});

gulp.task('copy-src-dir', function () {
    gulp.src('./src/**/*.js')
      .pipe(gulp.dest('./build/gipp/lib/'));
});

gulp.task('watch', function(){
    watch('src/**/*.js', function() {
        runSequence('babel', 'browserify', 'compress', 'copy-src-dir');
    });
});
