//1引入gulp
const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const open = require('open');
//2声明地址
const app = {
    srcPath:'src/',//源码目录
    buildPath:'build/',//搭建目录
    distPath:'dist/'//发布目录
};
//定义任务
//11 将bower下载的js插件引入到build和dist中
gulp.task('lib',function(){
    gulp.src('bower_components/**/*.js')
        .pipe(gulp.dest(app.buildPath+'lib/'))
        .pipe(gulp.dest(app.distPath+'lib/'))
        .pipe(connect.reload());//自动刷新
});
//3将所有html文件移动到另一个位置
gulp.task('html',function () {
    gulp.src(app.srcPath+'**/*.html')
        .pipe(gulp.dest(app.buildPath))//目标地址
        .pipe(gulp.dest(app.distPath))
        .pipe(connect.reload())
});
//4 less
gulp.task('less',function () {
    gulp.src(app.srcPath+'style/index.less')
        .pipe(less())
        .pipe(gulp.dest(app.buildPath+'style/'))
        .pipe(cssmin())
        .pipe(gulp.dest(app.distPath+'style/'))
        .pipe(connect.reload())
});
//5合并js
gulp.task('js',function () {
    gulp.src(app.srcPath+'**/*.js')
        .pipe(concat('index.js'))//将所有js合并到index.js文件中
        .pipe(gulp.dest(app.buildPath+'js/'))
        .pipe(uglify())
        .pipe(gulp.dest(app.distPath+'js/'))
        .pipe(connect.reload())
});
//6 压缩图片
gulp.task('image',function () {
    gulp.src(app.srcPath+'images/**/*')
        .pipe(gulp.dest(app.buildPath+'images/'))
        .pipe(imagemin())
        .pipe(gulp.dest(app.distPath+'images/'))
        .pipe(connect.reload())
});
//7 压缩图片
gulp.task('php',function () {
    gulp.src(app.srcPath+'data/**/*')
        .pipe(gulp.dest(app.buildPath+'data/'))
        .pipe(gulp.dest(app.distPath+'data/'))
        .pipe(connect.reload())
});
//8同时执行多个任务
gulp.task('build',['html','less','js','image','lib','php']);
//9设置服务器
gulp.task('server',['build'],function () {
    //设置服务器
    connect.server({
        root:[app.buildPath],//服务器启动目录
        livereload:true,//自动检测文件的变化
        port:8089//端口号
    });
    //监听文件的变化
    gulp.watch('bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath+'**/*.html',['html']);
    gulp.watch(app.srcPath+'js/**/*.js',['js']);
    gulp.watch(app.srcPath+'images/**/*',['image']);
    gulp.watch(app.srcPath+'style/**/*.less',['less']);
    gulp.watch(app.srcPath+'data/**/*.php',['php']);
    open('http://localhost:8089')
});
//10定义默认任务
gulp.task('default',['server']);