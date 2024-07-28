const fs = require('fs')
const path = require('path')
const UglifyJS = require('uglify-js')

const dirPath = path.join(__dirname, './dist') // Change this to your directory path

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err)
    return
  }

  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (!file.endsWith('js')) return

      if (err) {
        console.error('Error reading file:', err)
        return
      }

      const result = UglifyJS.minify(data, {
        mangle: { toplevel: true },
        compress: true,
      })
      if (result.error) {
        console.error('Error minifying file:', result.error)
        return
      }

      fs.writeFile(filePath, result.code, (err) => {
        if (err) {
          console.error('Error writing minified file:', err)
        } else {
          console.log(`Minified ${file}`)
        }
      })
    })
  })
})
