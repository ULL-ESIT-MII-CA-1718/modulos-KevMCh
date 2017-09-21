var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task("run", shell.task('NODE_PATH=./src node ./src/main.js'));

/*
En versiones v8.*  chrome://inspect en el navegador
https://nodejs.org/en/docs/inspector/
*/
gulp.task('debugger', shell.task('node --inspect-brk src/main.js'));

gulp.task("test", shell.task("NODE_PATH=./src ./node_modules/mocha/bin/mocha --require should"));

gulp.task("documentation", shell.task("NODE_PATH=./src ./node_modules/documentation/bin/documentation.js build src/** -f html -o docs"));
