import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Answer from './Answer'

chai.use(chaiEnzyme())

describe('<Answer />', () => {
  const apiUrl = 'api-url'
  const congressman = {
    average_success: 0.69,
    name: 'congressman-name',
    parti: 'congressman-party',
    path: 'congressman-photo-path',
    side: 'gauche'
  }
  const currentQuestionIndex = 34
  const questionCount = 50

  it('Should render appropriately', () => {
    const wrapper = shallow(
      <Answer
        answer={null}
        apiUrl={apiUrl}
        congressman={congressman}
        currentQuestionIndex={currentQuestionIndex}
        nextQuestionFn={() => null}
        questionCount={questionCount}
      />
    )
    const infosToDisplay = ['photo', 'name', 'party', 'successRate']

    // <QuizProgress />
    const quizProgress = wrapper.find('QuizProgress')
    expect(quizProgress)
      .to.have.length(1, '<Answer /> does not display <QuizProgress />')
    expect(quizProgress.prop('currentQuestionIndex'))
      .to.equal(currentQuestionIndex, '<Answer /> does not pass correct current question index to <QuizProgress />')
    expect(quizProgress.prop('questionCount'))
      .to.equal(questionCount, '<Answer /> does not pass correct question count to <QuizProgress />')
    // <CongressmanCard />
    const congressmanCard = wrapper.find('CongressmanCard')
    expect(congressmanCard)
      .to.have.length(1, '<Answer /> does not display <CongressmanCard />')
    expect(congressmanCard.prop('congressman'))
      .to.deep.equal(congressman, '<Answer /> does not pass congressman correctly to <CongressmanCard />')
    expect(congressmanCard.prop('infosToDisplay'))
      .to.deep.equal(infosToDisplay, '<Answer /> does not display specified infos')
    // <button />
    const button = wrapper.find('.button-playagain')
    expect(button)
      .to.have.length(1, '<Answer /> does not display button to go to next question')
  })

  it('Should display correct answer status', () => {
    const answer = 'gauche'
    const wrapper = shallow(
      <Answer
        answer={answer}
        apiUrl={apiUrl}
        congressman={congressman}
        currentQuestionIndex={currentQuestionIndex}
        nextQuestionFn={() => null}
        questionCount={questionCount}
      />
    )

    expect(wrapper.find('.answer-status-correct'))
      .to.have.length(1, '<Answer /> display incorrect answer status')
  })

  it('Should play again on button click', () => {
    const nextQuestionFn = sinon.spy()
    const wrapper = shallow(
      <Answer
        apiUrl={apiUrl}
        congressman={congressman}
        currentQuestionIndex={currentQuestionIndex}
        nextQuestionFn={nextQuestionFn}
        questionCount={questionCount}
      />
    )

    // Replay button
    wrapper.find('.button-playagain').simulate('click')
    expect(nextQuestionFn.calledOnce)
      .to.equal(true, '.button-playagain not clicked once')
  })
})
