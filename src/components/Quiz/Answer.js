import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Answer = ({ answer, apiUrl, congressman, currentQuestionIndex, nextQuestionFn, questionCount }) => (
  <div className="container answer-container">
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
    <div className="answer-status">
      {answer === congressman.side ? (
        <span className="answer-status-correct">Bien vu !</span>
      ) : (
        <span className="answer-status-incorrect">Et non !</span>
      )}
    </div>
    <CongressmanCard apiUrl={apiUrl} congressman={congressman} infosToDisplay={['photo', 'name', 'party', 'successRate']} />
    <button className="answer-button button-playagain" onClick={nextQuestionFn}>Ok, suivant !</button>
  </div>
)

export default Answer
