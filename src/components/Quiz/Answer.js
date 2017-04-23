import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Answer = ({ answer, apiUrl, congressman, currentQuestionIndex, nextQuestionFn, questionCount }) => (
  <div>
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
    <div>
      {
        answer === congressman.side ? (
          <p className='answer-correct'>"Bien vu !"</p>
        ) : (
          <p className='answer-incorrect'>"Et non !"</p>
        )
      }
    </div>
    <CongressmanCard apiUrl={apiUrl} congressman={congressman} infosToDisplay={['photo', 'name', 'party']} />
    <button className='button-replay' onClick={nextQuestionFn}>Ok, suivant !</button>
  </div>
)

export default Answer
