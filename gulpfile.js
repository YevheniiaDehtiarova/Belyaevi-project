import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import watch from 'gulp-watch';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';
import gulpSass from 'gulp-sass';
import sass from 'sass';

// Set the compiler to Dart Sass
const sassCompiler = gulpSass(sass);

const fontName = 'icons';

// Styles (compressed, autoprefixer)
gulp.task('style', function () {
    return gulp.src('src/styles/style.scss')
        .pipe(sassCompiler({ outputStyle: 'compressed' }).on('error', sassCompiler.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    return gulp.watch('src/styles/**/*.scss', gulp.series('default'));
});

gulp.task('default', gulp.series('style'));

// Icon fonts
gulp.task('iconfont', function () {
    return gulp.src('src/assets/icons/*.svg')
        .pipe(iconfontCss({
            // Path where our scss file will be
            targetPath: '../../styles/common/_icons.scss',
            // Path to fonts in _icons.scss
            fontPath: 'src/assets/fonts/',
            fontName: fontName
        }))
        .pipe(iconfont({
            fontName: fontName,
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest('src/assets/fonts'));
});
