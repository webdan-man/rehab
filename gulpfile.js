"use strict";

//init package
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const browserSync  = require('browser-sync');
const cssnano			 = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
const rename 			 = require('gulp-rename');
const concat  		 = require('gulp-concat');
const uglify 			 = require('gulp-uglifyjs'); // Подключаем uglifyjs (для сжатия JS)
const pngquant		 = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
const cache				 = require('gulp-cache');				// кеширует изображения
const autoprefixer = require("gulp-autoprefixer");// Подключаем библи`отеку для автоматического добавления префиксов
const imagemin		 = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
const del		 			 = require('del'); // Подключаем библиотеку для удаления файлов и папок
const bourbon      = require('node-bourbon'); // Подключаем библиотеку миксинов для SASS
const bourbon2     = require('bourbon'); // Подключаем библиотеку миксинов для SASS

/*tasks*/

// sass to css
gulp.task("sass", function(){
  return gulp.src("src/desktop/sass/**/*.+(scss|sass)")
    .pipe(sass({
			includePaths: bourbon.includePaths
		})
		 // .on('error', sass.logError)) //перехватываем ошибки
		)
		.pipe(autoprefixer({browsers: ['last 10 versions'], cascade: false}))
    .pipe(gulp.dest("src/desktop/css")) //нельзя писать файл. Нужно только папки
    .pipe(browserSync.reload({
			stream: true
		}));
});

// reload browser
gulp.task("browserSync", function(){
  browserSync({
    server: {
      baseDir: './src/desktop/' //папка с исходными файлами проекта
    },
    notify: false
  });
});

//compress and cached images
gulp.task('img', function(){
	return gulp.src("src/desktop/img/**/*")
			.pipe(cache(imagemin({
				interlaced:		true,
				progressive:	true,
				svgoPlugins:	[{removeViewBox: false}],
				une:					[pngquant()]
			})))
			.pipe(gulp.dest("dist/desktop/img"));
});

//очистка Cache
gulp.task("clearCache", function(){
	return cache.clearAll();
});

//concat and minification js libs
gulp.task("minJsLibs", function(){
	del.sync("src/desktop/js/libs.min.js"); // удаляем старую сборку
	return gulp.src([
				'src/desktop/libs/jquery/dist/jquery.min.js',
				'src/desktop/libs/arcticmodal/jquery.arcticmodal.js',
				'src/desktop/libs/jquery.maskedinput/dist/jquery.maskedinput.min.js'
	])
			.pipe(concat("libs.min.js")) // собираем все библиотеки в один файл
			.pipe(uglify()) // сжимаем
			.pipe(gulp.dest("src/desktop/js"));
});

//concat and minification css libs
gulp.task("minCssLibs", ['sass'], function(){
	return gulp.src([
		'src/desktop/css/libs.css'
		// 'src/desktop/libs/owl-carousel/owl-carousel/owl.carousel.css'
	])
			.pipe(cssnano()) // сжимаем
			.pipe(rename({
				suffix: '.min'
			})) // добавляет суффикс .min
			.pipe(gulp.dest("src/desktop/css"));
});

//remove dist folder
gulp.task("remove", function(){
		return del.sync("dist"); // Удаляем папку dist перед сборкой
});

gulp.task("watch", ['browserSync', 'sass', 'minJsLibs', 'minCssLibs'], function(){
	gulp.watch("src/desktop/sass/**/*.+(scss|sass)", ['sass']); //массив запускаемых тасков
	gulp.watch("src/desktop/**/*.+(html|php)", browserSync.reload);
	gulp.watch("src/desktop/js/**/*.js", browserSync.reload);
});

//собираем проект в продакшн
gulp.task("build", ['remove', 'img', 'sass', 'minJsLibs'], function(){
	var buildCss = gulp.src("src/desktop/css/*").pipe(gulp.dest("dist/desktop/css"));

	var buildFonts = gulp.src("src/desktop/fonts/**/*")
			.pipe(gulp.dest("dist/desktop/fonts"));

	var buildJs = gulp.src("src/desktop/js/**/*")
			.pipe(gulp.dest("dist/desktop/js"));

	var buildHtml = gulp.src("src/desktop/*.html")
			.pipe(gulp.dest("dist/desktop/"));
});

//default gulp task call watch
gulp.task('default', ['watch']);