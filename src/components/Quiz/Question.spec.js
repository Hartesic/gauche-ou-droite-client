import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Question from './Question'

chai.use(chaiEnzyme())

describe('<Question />', () => {
  const apiUrl = 'api-url'
  const congressman = {
    name: 'congressman-name',
    parti: 'congressman-party',
    path: 'congressman-photo-path'
  }
  const currentQuestionIndex = 34
  const questionCount = 50

  it('Should render appropriately', () => {
    const wrapper = shallow(
      <Question
        apiUrl={apiUrl}
        congressman={congressman}
        currentQuestionIndex={currentQuestionIndex}
        questionCount={questionCount}
        selectAnswerFn={() => null}
      />
    )
    const infosToDisplay = ['photo']

    // <QuizProgress />
    const quizProgress = wrapper.find('QuizProgress')
    expect(quizProgress)
      .to.have.length(1, '<Question /> does not display <QuizProgress />')
    expect(quizProgress.prop('currentQuestionIndex'))
      .to.equal(currentQuestionIndex, '<Question /> does not pass correct current question index to <QuizProgress />')
    expect(quizProgress.prop('questionCount'))
      .to.equal(questionCount, '<Question /> does not pass correct question count to <QuizProgress />')
    // <CongressmanCard />
    const congressmanCard = wrapper.find('CongressmanCard')
    expect(congressmanCard)
      .to.have.length(1, '<Question /> does not display <CongressmanCard />')
    expect(congressmanCard.prop('apiUrl'))
      .to.equal(apiUrl, '<Question /> does not pass apiUrl correctly to <CongressmanCard />')
    expect(congressmanCard.prop('congressman'))
      .to.deep.equal(congressman, '<Question /> does not pass congressman correctly to <CongressmanCard />')
    expect(congressmanCard.prop('infosToDisplay'))
      .to.deep.equal(infosToDisplay, '<Question /> does not just display congressman photo')
    // <button />
    const button = wrapper.find('button')
    expect(button)
      .to.have.length(2, '<Question /> does not display both buttons')
  })

  it('Should select correct answer on button click', () => {
    const selectAnswerFn = sinon.spy()
    const wrapper = shallow(
      <Question
        apiUrl={apiUrl}
        congressman={congressman}
        currentQuestionIndex={currentQuestionIndex}
        questionCount={questionCount}
        selectAnswerFn={selectAnswerFn}
      />
    )
    const leftButton = wrapper.find('button.button-left')
    const rightButton = wrapper.find('button.button-right')

    // Left button
    leftButton.simulate('click')
    expect(selectAnswerFn.calledOnce)
      .to.equal(true, 'button.button-left clicked more than once')
    expect(selectAnswerFn.calledWith('gauche'))
      .to.equal(true, 'button.button-left does not select correct answer')
    // Right button
    rightButton.simulate('click')
    expect(selectAnswerFn.calledTwice)
      .to.equal(true, 'button.button-right clicked more than once')
    expect(selectAnswerFn.calledWith('droite'))
      .to.equal(true, 'button.button-right does not select correct answer')
  })
})
