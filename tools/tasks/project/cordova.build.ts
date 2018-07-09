import * as gulp from 'gulp';
import Config from '../../config';

export = () => {
  return gulp.src(`${Config.PROD_DEST}/**/*`)
    .pipe(gulp.dest('www'));
};
