const gulp = require("gulp");
const scss = require("gulp-sass");
const minCss = require("gulp-csso");
const minImg = require("gulp-imagemin");
const rename = require("gulp-rename");

function compiller () {
    return gulp.src("./app/scss/styles.scss")
    .pipe(scss())
    .pipe(gulp.dest("./app/css"))
}

function watch () {
    return gulp.watch("./app/scss/**/*.scss", compiller);

}

function imagemin () {
    return gulp.src("./app/img/**/*")
    .pipe(minImg())
    .pipe(gulp.dest("./app/img"))
}

function cssmin () {
    return gulp.src("./app/css/styles.css")
    .pipe(minCss())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("./app/css"))
}

exports.compiller   = compiller; 
exports.watch       = watch;        // компиляция scss в css
exports.imagemin    = imagemin;     // минимизацыя изображения
exports.cssmin      = cssmin;       // минимизацыя css 
