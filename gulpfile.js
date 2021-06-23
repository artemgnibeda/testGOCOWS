/**
 * Created by SKYNET on 11.08.2017.
 */
'use strict';
var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var sourcemaps   = require('gulp-sourcemaps');
var minifycss    = require('gulp-minify-css');
var rigger       = require('gulp-rigger');
var watch        = require('gulp-watch');
var reload = browserSync.reload;



var path = {
    build: {//куда складывать
        html: 'web/',
        js: 'web/js/',
        css: 'web/css/',
        fonts: 'web/fonts/'
    },
    src: {//откуда
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/scss/main.scss',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {//за какими изменениями наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/scss/**/*.scss',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './web'
};
var config = {
    server: {
        baseDir: "web"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Skynet"
};
gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:builddev', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));

});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));


});

gulp.task('style:builddev', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));

});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest(path.build.css));

});
gulp.task('webserver', function () {
   browserSync(config);
});

gulp.task('builddev', ['js:builddev' ,'html:build', 'style:builddev']);
gulp.task('buildprod', ['js:build' , 'style:build']);

gulp.task('watch', function () {
    watch([path.watch.style], function (event, cb) {
        gulp.start('style:builddev');
    });
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:builddev');
    });
});



gulp.task('dev', ['builddev','webserver', 'watch']);

gulp.task('build', ['buildprod']);
