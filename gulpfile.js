'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js'
  })
});

gulp.task('default', ['nodemon']);