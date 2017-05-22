import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Question = ({ apiUrl, congressman, currentQuestionIndex, questionCount, selectAnswerFn }) => (
  <div className="question-container">
    <div className="logo">
      <img src="images/logo.svg" />
    </div>
    <div className="question-choice">
      <CongressmanCard congressman={congressman} infosToDisplay={['photo']} />
      <button className='question-button button-left' onClick={e => selectAnswerFn('gauche')}>Gauche</button>
      <button className='question-button button-right' onClick={e => selectAnswerFn('droite')}>Droite</button>
    </div>
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
  </div>
)

export default Question
