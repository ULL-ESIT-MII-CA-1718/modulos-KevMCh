var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task("run", shell.task('node ./examples/main.js'));

/*
En versiones v8.*  chrome://inspect en el navegador
https://nodejs.org/en/docs/inspector/
*/
gulp.task('debugger', shell.task('node --inspect-brk src/main.js'));

gulp.task("test", shell.task("./node_modules/mocha/bin/mocha --require should"));

gulp.task("documentation", shell.task("./node_modules/documentation/bin/documentation.js build src/** -f html -o documentation"));
gulp.task("jsdoc", shell.task("./node_modules/jsdoc/jsdoc.js src/* -d jsdoc"));
gulp.task("docco", shell.task("./node_modules/docco/bin/docco src/* -o docco"));
