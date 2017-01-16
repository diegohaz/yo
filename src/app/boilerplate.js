// @flow
import path from 'path'
import Generator from 'yeoman-generator'

export default class extends Generator {
  writing() {
    const rootPath = (...args): string => path.join(__dirname, '../../', ...args)
    const rootPkg = this.fs.readJSON(rootPath('package.json'), {})
    const generatedPkg = this.fs.readJSON(this.destinationPath('package.json'))

    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
      ...generatedPkg,
      yoName: generatedPkg.name.replace('generator-', '')
    })

    this.fs.copy(rootPath('.babelrc'), this.destinationPath('.babelrc'))
    this.fs.copy(rootPath('.eslintignore'), this.destinationPath('.eslintignore'))
    this.fs.copy(rootPath('yarn.lock'), this.destinationPath('yarn.lock'))
    this.fs.delete(this.destinationPath('src/index.js'))
    this.fs.delete(this.destinationPath('test/index.js'))
    this.fs.delete(this.destinationPath('index.js'))

    this.fs.writeJSON(this.destinationPath('package.json'), {
      ...generatedPkg,
      main: rootPkg.main,
      files: rootPkg.files,
      scripts: rootPkg.scripts,
      watch: rootPkg.watch,
      jest: rootPkg.jest,
      keywords: rootPkg.keywords,
      dependencies: {
        'yeoman-generator': rootPkg.dependencies['yeoman-generator']
      },
      devDependencies: rootPkg.devDependencies
    })
  }
}
