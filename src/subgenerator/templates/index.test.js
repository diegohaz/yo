import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

const run = () => helpers.run(__dirname)

describe('<%= name %>', () => {
  it('creates files', async () => {
    await run()
    assert.file(['dummyfile.txt'])
  })
})
