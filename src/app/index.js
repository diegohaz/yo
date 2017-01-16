// @flow
import _ from 'lodash'
import Generator from 'yeoman-generator'
import askName from 'inquirer-npm-name'

type Answers = {
  name: string
}

const makeGeneratorName = (name: string): string => {
  const kebab = _.kebabCase(name)
  if (kebab.indexOf('generator-') !== 0) {
    return `generator-${kebab}`
  }
  return kebab
}

export default class extends Generator {
  async prompting() {
    const { name }: Answers = await askName({
      name: 'name',
      message: 'What do you want to name your generator?',
      default: makeGeneratorName(this.appname),
      filter: makeGeneratorName
    }, this)

    this.composeWith(require.resolve('generator-nod/generators/app'), { name })
    this.composeWith(require.resolve('./boilerplate'))
    this.composeWith(require.resolve('../subgenerator'), { name: 'app' })
  }
}
