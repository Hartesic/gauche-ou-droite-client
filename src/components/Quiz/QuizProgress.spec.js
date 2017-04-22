import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'

import QuizProgress from './QuizProgress'

chai.use(chaiEnzyme())

describe('<QuizProgress />', () => {
  const currentQuestionIndex = 42
  const questionCount = 69

  it('Should display correct progress', () => {
    const wrapper = shallow(
      <QuizProgress
        currentQuestionIndex={currentQuestionIndex}
        questionCount={questionCount}
      />
    )
    const quizProgressText = currentQuestionIndex + ' / ' + questionCount

    expect(wrapper)
      .to.have.text(quizProgressText, '<QuizProgress /> does not display correct progress')
  })
})
