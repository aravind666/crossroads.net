  config =
    className: ".icon-%f"
    defs: true
    generatePreview: true

  module.exports = (gulp, $) ->
    gulp.task "icons", ->
      svg = $.svgSprites.svg
      replace = $.replace
      rename = $.rename

      gulp.src("app/icons/*.svg")
      .pipe(svg(config))
      .pipe(gulp.dest("app/_includes/icons"))

      gulp.src('app/_includes/icons/css/sprites.css')
      .pipe(rename("sprites.scss"))
      .pipe(gulp.dest('app/css'))

      gulp.src('app/_includes/icons/preview-svg.html')
      .pipe(replace('background: black;', 'background: black;fill:white;'))
      .pipe(replace('css/sprites.css', '/css/app.css'))
      .pipe(replace('class="icon ', 'class="icon icon-large '))
      .pipe(gulp.dest('app/icons'))