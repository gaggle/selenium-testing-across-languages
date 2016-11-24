"use strict";
const gulp = require("gulp")
const selenium = require("selenium-standalone")
const mocha = require("gulp-mocha")

gulp.task("selenium", function (done) {
  selenium.install({
    logger: function (message) {
    }
  }, function (err) {
    if (err) return done(err)

    selenium.start(function (err, child) {
      if (err) return done(err)
      selenium.child = child
      done()
    })
  })
})

gulp.task("integration", ["selenium"], function () {
  return gulp.src("test/**/*.js", {read: false})
    .pipe(mocha())
})

gulp.task("test", ["integration"], function () {
  selenium.child.kill()
})
