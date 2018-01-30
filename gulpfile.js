var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync').create();
// var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

// gulp.task('lint', function() {
//     return gulp.src('./src/app/**/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

gulp.task('scripts', function(){
    return gulp.src('./src/assets/**/*.js')
    .pipe(uglify())
    // .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('images', function(){
    return gulp.src('./src/assets/img/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('./public/assets/images/'))
});

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify({entries: './src/app/app.es6', extensions: ['.es6']})
        .transform(babelify)
        // bundles it and creates a file called main.js
        .bundle()
        .on("error", function (err) { console.log("Error: " + err.message); })
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/'))
        .pipe(buffer());
});

gulp.task('copy', ['browserify', 'scss'], function() {
    gulp.src(['./src/**/*.html','./src/**/*.css'])
        .pipe(gulp.dest('./public/'))
        .pipe(browserSync.stream())
});

gulp.task('scss', function() {
    gulp.src('./src/assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/stylesheets/'));
});

gulp.task('build',['scss', 'copy', 'scripts', 'images']);

gulp.task('browser-sync', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: "./public/",
            // The key is the url to match
            // The value is which folder to serve (relative to your current working directory)
            routes: {
                "/bower_components": "bower_components",
                "/node_modules": "node_modules"
            }
        },
        serveStatic: [{
            route: '/public',
            dir: 'public'
        }],
        browser: "google chrome"
    });
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch("./src/**/*.*", ["build"]);
    gulp.watch("./public/**/*.*").on('change', browserSync.reload);
});