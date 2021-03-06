var config  = require('../config')
var changed = require('gulp-changed')
var gulp    = require('gulp')
var path    = require('path')

var paths = {
    src: path.join(config.root.frontendsrc, config.tasks.frontendimage.src, '/**'),
    dest: path.join(config.root.frontenddest, config.tasks.frontendimage.dest)
}

var staticTask = function() {
    return gulp.src(paths.src)
        .pipe(changed(paths.dest)) // Ignore unchanged files
        .pipe(gulp.dest(paths.dest))
}

gulp.task('frontend-static-copy-image', staticTask)
module.exports = staticTask
