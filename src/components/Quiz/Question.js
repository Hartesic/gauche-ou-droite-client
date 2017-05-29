import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Question = ({ apiUrl, congressman, currentQuestionIndex, questionCount, selectAnswerFn }) => (
  <div className="question-container">
    <div className="logo animated fadeInUp">
      <img src="images/logo.svg" />
    </div>
    <div className="question-choice">
      <CongressmanCard congressman={congressman} infosToDisplay={['photo']} />
      <button className='question-button button-left animated fadeInLeftButton' onClick={e => selectAnswerFn('gauche')}>Gauche</button>
      <button className='question-button button-right animated fadeInRightButton' onClick={e => selectAnswerFn('droite')}>Droite</button>
    </div>
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
  </div>
)

export default Question
