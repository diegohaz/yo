import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

// eslint-disable-next-line no-undef
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

const run = () => helpers.run(__dirname)

describe('app', () => {
  it('creates files', async () => {
    await run()
    assert.file([
      'src/app/index.js',
      'src/app/index.test.js',
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc',
      '.flowconfig',
      '.gitignore',
      '.travis.yml',
      'LICENSE',
      'package.json',
      'README.md',
      'yarn.lock'
    ])
  })
})
