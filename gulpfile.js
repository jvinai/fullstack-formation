'use strict';

var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  nodemon = require('gulp-nodemon');

var testSrc = './test/*';

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js'
  })
});

gulp.task('mocha', function () {
  return gulp.src(testSrc)
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['nodemon']);