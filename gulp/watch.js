/*
  watch.js
  ===========
  watches sass/js/images
*/

var gulp = require('gulp')
var config = require('./config.json')

gulp.task('watch-sass', function () {
  return gulp.watch(config.paths.assets + 'sass/**', {cwd: './'}, ['sass']);
})

gulp.task('watch-assets', function () {
  return gulp.watch([config.paths.assets + 'images/**',
    config.paths.assets + 'javascripts/**'], {cwd: './'}, ['copy-assets']);
})

