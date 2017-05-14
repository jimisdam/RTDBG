var gulp 		= require('gulp');
var coffee 	= require('gulp-coffee');
var less 		= require('gulp-less');
var uglify 	= require('gulp-uglify');
var concat 	= require('gulp-concat');
var watch 	= require('gulp-watch');
var merge2 	= require('merge2');

var options = {
	COFFEE_SOURCE	: "./assets/src/coffee/*.coffee",
	COFFEE_DEST		: "./assets/dist/js/",

	CLASSES_SRC	  : "./classes/*.coffee",
	CLASSES_DEST	: "./assets/dist/js/classes/",

	LESS_SOURCE		: "./assets/src/less/*.less",
	LESS_DEST			: "./assets/dist/css/"
};

// CoffeeScript
gulp.task('coffee', function() {
	console.log("Compiling CoffeeScript");
  gulp.src(options.COFFEE_SOURCE)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(options.COFFEE_DEST));

	gulp.src(options.CLASSES_SRC)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(options.CLASSES_DEST));
});

gulp.task('coffee:watch', function() {
	gulp.watch(options.COFFEE_SOURCE, ['coffee']);
	gulp.watch(options.CLASSES_SRC, ['coffee']);
});

// LESS
gulp.task('less', function() {
	console.log("Compiling LESS");
  return gulp.src(options.LESS_SOURCE)
    .pipe(less())
    .pipe(gulp.dest(options.LESS_DEST));
});

gulp.task('less:watch', function() {
	gulp.watch(options.LESS_SOURCE, ['less']);
});

// Other Tasks
gulp.task('build', ['coffee', 'less']);

gulp.task('watch', ['coffee:watch', 'less:watch']);
