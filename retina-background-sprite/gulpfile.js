/**
 * @file gulp
 * @author hushicai(bluthcy@gmail.com)
 */
var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

var gulpif = require('gulp-if');
var sprite = require('css-sprite').stream;

gulp.task('sprites', function () {
    return gulp.src('./src/img/*.png')
        .pipe(sprite({
            src: ['./src/img/*.png'],
            out: './dist/img',
            retina: true,
            name: 'sprites',
            style: './dist/css/test.css',
            cssPath: '../img'
        }))
        .pipe(gulpif('*.png', gulp.dest('./dist/img/'), gulp.dest('./dist/css/')));
});

gulp.task('default', ['minify', 'sprites']);
