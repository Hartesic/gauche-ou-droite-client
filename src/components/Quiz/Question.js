import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Question = ({ apiUrl, congressman, currentQuestionIndex, questionCount, selectAnswerFn }) => (
  <div>
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
    <CongressmanCard apiUrl={apiUrl} congressman={congressman} infosToDisplay={['photo']} />
    <div>
      <button className='button-left' onClick={e => selectAnswerFn('gauche')}>Gauche</button>
      <button className='button-right' onClick={e => selectAnswerFn('droite')}>Droite</button>
    </div>
  </div>
)

export default Question
