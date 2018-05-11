'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
    return gulp.src('./src/*.scss')
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function() {
    return gulp.src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);


// const gulp = require('gulp')
// const postcss = require('gulp-postcss')
// const cssmin = require('gulp-cssmin')
// var sass = require('gulp-sass');
// const salad = require('postcss-salad')(require('../../salad.config.json'))

// gulp.task('compile', function() {
//     return gulp.src('./src/*.css')
//         // 使用postcss-salad
//         .pipe(postcss([salad]))
//         // 进行css压缩
//         .pipe(cssmin())
//         // 输出到 './lib' 目录下
//         .pipe(gulp.dest('./lib'))
// })

// gulp.task('build', ['compile'])