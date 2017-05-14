var gulp 		= require('gulp');
var coffee 	= require('gulp-coffee');
var less 		= require('gulp-less');
var uglify 	= require('gulp-uglify');
var concat 	= require('gulp-concat');
var watch 	= require('gulp-watch');
var bump		= require('gulp-bump');
var git			= require('gulp-git');
var seq			= require('gulp-run-sequence');
var merge2 	= require('merge2');

var fs 			= require('fs');

var options = {
	COFFEE_SRC		: "./assets/src/coffee/*.coffee",
	COFFEE_DEST		: "./assets/dist/js/",

	CLASSES_SRC	  : "./classes/*.coffee",
	CLASSES_DEST	: "./assets/dist/js/classes/",

	HELPERS_SRC		: "./helpers/*.coffee",
	HELPERS_DEST	: "./assets/dist/js/helpers/",

	LESS_SRC			: "./assets/src/less/*.less",
	LESS_DEST			: "./assets/dist/css/",

	GIT_SOURCE		: "./",

	PACKAGE_FILE	: "./package.json"
};

// CoffeeScript
gulp.task('coffee', function() {
	console.log("Compiling CoffeeScript");
  gulp.src(options.COFFEE_SRC)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(options.COFFEE_DEST));

	gulp.src(options.CLASSES_SRC)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(options.CLASSES_DEST));

	gulp.src(options.HELPERS_SRC)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(options.HELPERS_DEST));
});

gulp.task('coffee:watch', function() {
	gulp.watch(options.COFFEE_SRC, ['coffee']);
	gulp.watch(options.CLASSES_SRC, ['coffee']);
	gulp.watch(options.HELPERS_SRC, ['coffee']);
});

// LESS
gulp.task('less', function() {
	console.log("Compiling LESS");
  return gulp.src(options.LESS_SRC)
    .pipe(less())
    .pipe(gulp.dest(options.LESS_DEST));
});

gulp.task('less:watch', function() {
	gulp.watch(options.LESS_SRC, ['less']);
});

// GIT
gulp.task('github', function() {
	seq('vup', 'commit', 'push');
});

gulp.task('commit', function() {
	var pkg = fs.readFileSync(options.PACKAGE_FILE, "utf-8");
	var obj = JSON.parse(pkg);

	return gulp.src(options.GIT_SOURCE)
		.pipe(git.add())
		.pipe(git.commit('Updating ' + obj.name + " -> " + obj.version));
});

gulp.task('push', function() {
	git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

// Other Tasks

gulp.task('vup', function() {
	return gulp.src(options.PACKAGE_FILE)
		.pipe(bump({type: "prerelease"}))
		.pipe(gulp.dest('./'));
});

gulp.task('build', ['coffee', 'less']);

gulp.task('watch', ['coffee:watch', 'less:watch']);
