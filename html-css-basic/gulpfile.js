'use strict';
let gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    gulp.watch(['./app/*.html'], ['html']);
    connect.server({
        root: 'app',
        livereload: true,
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .on('data', () => {})
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('./app/js/*.js')
        .on('data', () => {})
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('./app/styles/*.css')
        .on('data', () => {})
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html', './app/**/*.html'], ['html']);
    gulp.watch(['./app/js/*.js'], ['js']);
    gulp.watch(['./app/styles/*.css', './app/framework/**/*.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);
