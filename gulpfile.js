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
  return gulp.src("src/mobile/sass/**/*.+(scss|sass)")
    .pipe(sass({
			includePaths: bourbon.includePaths
		})
		 // .on('error', sass.logError)) //перехватываем ошибки
		)
		.pipe(autoprefixer({browsers: ['last 10 versions'], cascade: false}))
    .pipe(gulp.dest("src/mobile/css")) //нельзя писать файл. Нужно только папки
    .pipe(browserSync.reload({
			stream: true
		}));
});

// reload browser
gulp.task("browserSync", function(){
  browserSync({
    server: {
      baseDir: './src/mobile/' //папка с исходными файлами проекта
    },
    notify: false
  });
});

//compress and cached images
gulp.task('img', function(){
	return gulp.src("src/mobile/img/**/*")
			.pipe(cache(imagemin({
				interlaced:		true,
				progressive:	true,
				svgoPlugins:	[{removeViewBox: false}],
				une:					[pngquant()]
			})))
			.pipe(gulp.dest("dist/mobile/img"));
});

//очистка Cache
gulp.task("clearCache", function(){
	return cache.clearAll();
});

//concat and minification js libs
gulp.task("minJsLibs", function(){
	del.sync("src/mobile/js/libs.min.js"); // удаляем старую сборку
	return gulp.src([
				'src/mobile/libs/jquery/dist/jquery.min.js',
				'src/mobile/libs/arcticmodal/jquery.arcticmodal.js',
				'src/mobile/libs/jquery.maskedinput/dist/jquery.maskedinput.min.js',
				'src/mobile/libs/flexcroll/flexcroll.js',
				'src/mobile/libs/bxslider-4/dist/jquery.bxslider.min.js',
				'src/mobile/libs/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js'
	])
			.pipe(concat("libs.min.js")) // собираем все библиотеки в один файл
			.pipe(uglify()) // сжимаем
			.pipe(gulp.dest("src/mobile/js"));
});

//concat and minification js libs
gulp.task("minJsMain", function(){
	del.sync("src/mobile/js/main.min.js"); // удаляем старую сборку
	return gulp.src([
				'src/mobile/js/main.js'
	])
			.pipe(concat("main.min.js")) // собираем все библиотеки в один файл
			.pipe(uglify()) // сжимаем
			.pipe(gulp.dest("src/mobile/js"));
});

//concat and minification css libs
gulp.task("minCssLibs", ['sass'], function(){
	return gulp.src([
		'src/mobile/css/libs.css'
	])
			.pipe(cssnano()) // сжимаем
			.pipe(rename({
				suffix: '.min'
			})) // добавляет суффикс .min
			.pipe(gulp.dest("src/mobile/css"));
});

//concat and minification css STYLE
gulp.task("minCssStyle", ['sass'], function(){
	return gulp.src([
		'src/mobile/css/style.css'
	])
			.pipe(cssnano()) // сжимаем
			.pipe(rename({
				suffix: '.min'
			})) // добавляет суффикс .min
			.pipe(gulp.dest("src/mobile/css"));
});

//remove dist folder
gulp.task("remove", function(){
		return del.sync("dist"); // Удаляем папку dist перед сборкой
});

gulp.task("watch", ['browserSync', 'sass', 'minJsLibs', 'minCssLibs'], function(){
	gulp.watch("src/mobile/sass/**/*.+(scss|sass)", ['sass']); //массив запускаемых тасков
	gulp.watch("src/mobile/**/*.+(html|php)", browserSync.reload);
	gulp.watch("src/mobile/js/**/*.js", browserSync.reload);
});

//собираем проект в продакшн
gulp.task("build", ['remove', 'img', 'sass', 'minJsLibs', 'minJsMain', 'minCssStyle'], function(){
	var buildCss = gulp.src("src/mobile/css/*").pipe(gulp.dest("dist/mobile/css"));

	var buildFonts = gulp.src("src/mobile/fonts/**/*")
			.pipe(gulp.dest("dist/mobile/fonts"));

	var buildJs = gulp.src("src/mobile/js/**/*")
			.pipe(gulp.dest("dist/mobile/js"));

	var buildHtml = gulp.src("src/mobile/*.html")
			.pipe(gulp.dest("dist/mobile/"));
});

//default gulp task call watch
gulp.task('default', ['watch']);