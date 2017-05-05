import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Question = ({ apiUrl, congressman, currentQuestionIndex, questionCount, selectAnswerFn }) => (
  <div className="container question-container">
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
    <div className="question-choice">
      <CongressmanCard apiUrl={apiUrl} congressman={congressman} infosToDisplay={['photo']} />
      <button className='question-button button-left' onClick={e => selectAnswerFn('gauche')}>Gauche</button>
      <button className='question-button button-right' onClick={e => selectAnswerFn('droite')}>Droite</button>
    </div>
  </div>
)

export default Question
