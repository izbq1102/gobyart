var gulp   = require('gulp')
var del    = require('del')
var config = require('../config')

var cleanTask = function (cb) {
  del([config.root.dest]).then(function (paths) {
    del([config.root.frontenddest]).then(function (paths) {
      del([config.root.staticdest]).then(function (paths) {
        cb()
      })
    })
  });

}

gulp.task('clean', cleanTask)
module.exports = cleanTask
