var gulp = require('gulp'),
    exec =  require('gulp-exec'),
    templateCache = require('gulp-angular-templatecache'),
    coffeelint = require('gulp-coffeelint'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat-sourcemap'),
    nodemon = require('gulp-nodemon'),
    clean = require('gulp-clean'),
    streamqueue = require('streamqueue');

var paths = {
    posts: ['app/**/**', '!app/**/.#*.*'],
    templates: ['app/templates/**/*.html'],
    scripts: ['app/js/**/*.coffee'],
    sass: ['app/css/**/*.scss']
};

var vendor = [
    "vendor/js/underscore.js",
    "vendor/js/mediaelement-and-player.min.js",
    "vendor/bower/angular/angular.js",
    "vendor/bower/angular-strap/dist/angular-strap.js",
    "vendor/bower/angular-strap/dist/angular-strap.tpl.js",
    "vendor/bower/angular-cookies/angular-cookies.js",
    "vendor/bower/masonry/dist/masonry.pkgd.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js",
    "vendor/bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js"
];

gulp.task('jekyll', function(){
    var options = {
	continueOnError: true
    };
    gulp.src('')
	.pipe(exec('bundle exec jekyll build', options))
	.pipe(exec('mkdir -p ./generated/js'))
	.pipe(exec('mkdir -p ./generated/css'));
});

gulp.task('coffee', function() {
    streamqueue({ objectMode: true },
	gulp.src(vendor),
	gulp.src(paths.scripts)
            .pipe(coffeelint())
            .pipe(coffeelint.reporter())
	    .pipe(coffee().on('error', gutil.log)),
	gulp.src(paths.templates)
            .pipe(templateCache({standalone: true}))
    )
	.pipe(concat('app.js'))
	.pipe(gulp.dest('generated/js'));
});

gulp.task('sass', function() {
    gulp.src(paths.sass)
	.pipe(sass({errLogToConsole: true}))
    	.pipe(concat('app.css'))
	.pipe(gulp.dest('generated/css'));
});

gulp.task('copy', function() {
    gulp.src('app/index.html')
	.pipe(gulp.dest('generated/'));
});

gulp.task('server', function() {
    nodemon({
	script: './server/server.js',
	ignore: ['app/','_site/','config/','generated/','spec/','tmp/','vendor/']
    })
	.on('restart', function () {
	    console.log('restarted!');
	});
});

gulp.task('watch', function() {
    gulp.watch(paths.posts, ['jekyll']);
    gulp.watch(paths.scripts, ['coffee']);
    gulp.watch(paths.templates, ['ngtemplate']);
    gulp.watch(paths.sass, ['sass']);
});


gulp.task('dev', ['jekyll', 'coffee', 'sass', 'server', 'watch']);
gulp.task('default', ['dev']);
