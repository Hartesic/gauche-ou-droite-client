import React, { Component } from 'react'

import Question from './Question'
import Answer from './Answer'

const DEFAULT_STATE = {
  answers: [],
  currentCongressmanIndex: 0
}

export default class Questions extends Component {
  constructor () {
    super()
    this.state = DEFAULT_STATE

    this.goToNextQuestion = this.goToNextQuestion.bind(this)
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  goToNextQuestion () {
    const { answers } = this.state
    const { congressmen, storeAnswersFn } = this.props
    if (answers.length >= congressmen.length) {
      storeAnswersFn(answers)
    } else {
      this.setState({ currentCongressmanIndex: answers.length })
    }
  }

  render () {
    const { answers, currentCongressmanIndex } = this.state
    const { congressmen } = this.props
    const congressman = congressmen[currentCongressmanIndex]
    return answers.length > currentCongressmanIndex ? (
      <Answer
        answer={answers[currentCongressmanIndex]}
        congressman={congressman}
        currentQuestionIndex={currentCongressmanIndex + 1}
        nextQuestionFn={this.goToNextQuestion}
        questionCount={congressmen.length}
      />
    ) : (
      <Question
        congressman={congressman}
        currentQuestionIndex={currentCongressmanIndex + 1}
        questionCount={congressmen.length}
        selectAnswerFn={this.selectAnswer}
      />
    )
  }

  selectAnswer (answer) {
    const answers = [ ...this.state.answers, answer ]
    this.setState({ answers })
  }
}
