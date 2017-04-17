import React from 'react'

export default ({ answer, congressman, currentQuestionIndex, nextQuestionFn, questionCount }) => (
  <div>
    <span>{currentQuestionIndex} / {questionCount}</span>
    <span>{answer === congressman.side ? "Bien vu !" : "Et non !" }</span>
    <img src={congressman.path} alt="Photo d'un député (!)"/>
    <span>{congressman.parti}</span>
    <button onClick={nextQuestionFn}>Ok, suivant !</button>
  </div>
)
