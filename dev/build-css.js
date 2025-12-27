'use strict'

const path = require('path')
const fs = require('fs')
const { glob } = require('glob')
const sass = require('sass')

function scan_and_compile(pattern = "**/*.scss", watch = false) {
  glob(pattern, {
    ignore: "node_modules/**/*"
  }).then(matches => {
    matches.forEach(filename => {
      compile_sass(filename)

      if (watch) {
        // `watch` option is currently not supported by new SASS
        // https://github.com/sass/dart-sass/issues/264
        fs.watchFile(filename, () => { compile_sass(filename) })
      }
    })
  }, err => {
    console.error("Glob error:", err)
  })
}

function compile_sass(sourceFilename) {
  console.log("[SCSS] Compiling " + sourceFilename)
  var outputFilename = sourceFilename.replace(/\.s[ac]ss$/, ".css")

  try {
    const result = sass.compile(sourceFilename);
    fs.writeFile(outputFilename, result.css, function (err) {
      if (!err) {
        console.log("[SCSS] finished " + sourceFilename)
        if (exports.onChanged) exports.onChanged(sourceFilename, outputFilename)
      } else {
        console.error(err)
      }
    });
  } catch (err) {
    console.error(err)
  }
}

if (require.main === module) {
  process.chdir(path.join(__dirname, ".."))
  const watch = process.argv.includes("-w")

  scan_and_compile("**/*.scss", watch)
}

var exports = {
  compile_sass,
  scan_and_compile,
  onChanged: null,
}

module.exports = exports
