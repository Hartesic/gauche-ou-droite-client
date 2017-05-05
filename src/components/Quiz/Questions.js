import autobind from 'autobind-decorator'
import React, { Component } from 'react'

import Question from './Question'
import Answer from './Answer'

const DEFAULT_STATE = {
  answers: [],
  currentCongressmanIndex: 0
}

class Questions extends Component {
  constructor () {
    super()
    this.state = DEFAULT_STATE
  }

  @autobind
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
    const { apiUrl, congressmen } = this.props
    const congressman = congressmen[currentCongressmanIndex]
    return answers.length > currentCongressmanIndex ? (
      <Answer
        answer={answers[currentCongressmanIndex]}
        apiUrl={apiUrl}
        congressman={congressman}
        currentQuestionIndex={currentCongressmanIndex + 1}
        nextQuestionFn={this.goToNextQuestion}
        questionCount={congressmen.length}
      />
    ) : (
      <Question
        apiUrl={apiUrl}
        congressman={congressman}
        currentQuestionIndex={currentCongressmanIndex + 1}
        questionCount={congressmen.length}
        selectAnswerFn={this.selectAnswer}
      />
    )
  }

  @autobind
  selectAnswer (answer) {
    const answers = [ ...this.state.answers, answer ]
    this.setState({ answers })
  }
}

export default Questions
