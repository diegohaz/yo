import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

const run = () => helpers.run(__dirname)

describe('subgenerator', () => {
  it('creates files', async () => {
    await run().withPrompts({ name: 'foo' })
    assert.file([
      'src/foo/index.js',
      'src/foo/index.test.js',
      'src/foo/templates/dummyfile.txt'
    ])
  })
})
