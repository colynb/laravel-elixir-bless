var gulp = require('gulp')
var Elixir = require('laravel-elixir')
var bless = require('gulp-bless')
var config = Elixir.config
var Task = Elixir.Task

var gulpTask = function (src, output, options) {
  new Task('bless', function () {
    var paths = prepGulpPaths(src, output)
    return gulp.src(src).pipe(bless(options)).pipe(gulp.dest(paths.output.baseDir))
  }).watch('./resources/assets/**')
}

Elixir.extend('bless', function () {
  gulpTask.apply(this, arguments)
})

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function (src, output) {
  return new Elixir.GulpPaths()
    .src(src, config.get('assets.css.sass.folder'))
    .output(output || config.get('public.css.outputFolder'), 'app.css')
}
