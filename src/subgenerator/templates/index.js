// @flow
import Generator from 'yeoman-generator'

type Answers = {
  name: string
}

export default class extends Generator {
  answers: Answers

  async prompting() {
    this.answers = await this.prompt([{
      name: 'name',
      message: 'What is the name?'
    }])
  }

  writing() {
    this.fs.copyTpl(this.templatePath(), this.destinationPath(), this.answers)
  }
}
