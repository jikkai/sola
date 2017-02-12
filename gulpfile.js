const gulp = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')

const pkg = require('./package.json')

gulp.task('bundle', () => {
  return gulp.src('./src/index.ts')
    .pipe(webpackStream(require('./webpack.config'), webpack))
    .pipe(gulp.dest(pkg.config.OUTPUT_PATH))
})

gulp.task('move', () => {
  return gulp.src('./lib/**/**')
    .pipe(gulp.dest(pkg.config.OUTPUT_PATH))
})

gulp.task('watch', () => {
  const watcher = gulp.watch(['./src/**/*', './lib/**/*'], ['bundle', 'move'])

  watcher.on('change', (event) => {
    console.log(`File ${event.path} was ${event.type}, running tasks...`)
  })
})
