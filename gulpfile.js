const gulp = require("gulp"),
    concat = require('gulp-concat'), //将多个文件合并成一个文件
    uglifycss = require('gulp-uglifycss'), //css代码压缩
    sass = require("gulp-sass"), //sass 转 css
    autoprefixer = require('gulp-autoprefixer'), //浏览器兼容性自动补齐前缀
    cssmin = require('gulp-clean-css'), // css代码压缩 -- 配合 gulp-make-css-url-version完成url后面添加MD5版本，很好避免缓存
    cssver = require('gulp-make-css-url-version'), //添加版本号，与 gulp-clean-css 配合使用
    rename = require('gulp-rename'), //重新命名文件或者文件夹
    del = require('del'); //删除文件或者文件夹


// 样式文件打包成一个.min.css?v=HJi9y08JBKGH392IHKJFH98UHO9DFDSO 
var sassFiles = "./src/scss/index.scss";

// 编译 sass
// gulp.task("sass", () => {});
function compile() {
    return gulp.src(sassFiles)
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
        .pipe(concat('css3-utilities.css'))
        .pipe(gulp.dest("./dist/scss/"))
        .pipe(rename('style.min.css'))
        .pipe(cssver())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('css3-utilities.min.css'))
        .pipe(gulp.dest('./'));
}

// 监控 sass 文件
// gulp.task("watch", () => 　{});
function watch() {
    return gulp.watch(sassFiles, ["compile"]);
}

//删除生成的
// gulp.task('clean', () => {});
function clean() {
    return del(['dist']);
}

// gulp.task("default", ['clean', 'sass']);
exports.default = gulp.series(clean, compile)