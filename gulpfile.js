var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

gulp.task('modules', function () {
    browserify({
      entries: './src/app.js',
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
  return gulp
      .src("./src/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));
});

gulp.task('browserify', function() {
    return browserify('./dist/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function(){
    watch('src/**/*.js', function() {
        gulp.start('default');
    });
    watch('./dist/app.js', function () {
        gulp.start('browserify');
    });
});
