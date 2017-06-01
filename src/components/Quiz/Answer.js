import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Answer = ({ answer, apiUrl, congressman, currentQuestionIndex, nextQuestionFn, questionCount }) => (
  <div className="answer-container">
    <div className="logo">
      <img src="images/logo.svg" />
    </div>
    <div className="answer-choice">
        <div className="answer-status">
            {answer === congressman.side ? (
                <div className="answer-status-correct pulse animated">
                    Bien vu !
                </div>
            ) : (
                <div className="answer-status-incorrect shake animated">
                    Et non !
                </div>
            )}
        </div>
        <CongressmanCard congressman={congressman} infosToDisplay={['photo', 'name', 'party', 'successRate']} answer={answer} />
    </div>
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
    <button className="answer-button button-playagain animated fadeInUp" onClick={nextQuestionFn}>Ok, suivant !</button>
  </div>
)

export default Answer
