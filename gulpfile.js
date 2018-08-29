const gulp = require('gulp');
const browserSync = require('browser-sync').create();


/* 
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Point to files to use
	gulp.dest - Pooints to folder to outpu
	gulp.watch - Watch files and folders for changes
*/


gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	browserSync.watch("*.html").on("change", browserSync.reload);
	browserSync.watch("css/*.css", (e, file) => {
		if(e === 'change') {
			browserSync.reload('*.css');
		}
	});
});

gulp.task('default', ['browser-sync']);