// @flow
import Generator from 'yeoman-generator'

type Answers = {
  name: string
}

export default class extends Generator {
  answers: Answers

  constructor(...args: Array<any>) {
    super(...args)
    this.argument('name', { type: String, required: false })
  }

  async prompting() {
    const { name = this.options.name } = await this.prompt([{
      name: 'name',
      message: 'What do you want to name your subgenerator?',
      when: !this.options.name
    }])
    this.answers = { name }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`src/${this.answers.name}`),
      this.answers
    )
  }
}
