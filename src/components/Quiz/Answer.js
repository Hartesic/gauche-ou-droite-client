import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Answer = ({ answer, apiUrl, congressman, currentQuestionIndex, nextQuestionFn, questionCount }) => (
  <div>
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
    <div>{answer === congressman.side ? "Bien vu !" : "Et non !" }</div>
    <CongressmanCard apiUrl={apiUrl} congressman={congressman} infosToDisplay={['photo', 'name', 'party']} />
    <button onClick={nextQuestionFn}>Ok, suivant !</button>
  </div>
)

export default Answer
