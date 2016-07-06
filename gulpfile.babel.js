import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';

gulp.task('sass', () => {
    return gulp.src('scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('sass:watch', () => {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('clean', () => {
    return del.sync('dist/css');
});

gulp.task('build', ['clean', 'sass']);
gulp.task('default', ['build']);
