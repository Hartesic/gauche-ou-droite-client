import React from 'react'

export default ({ answer, congressman, currentQuestionIndex, nextQuestionFn, questionCount }) => (
  <div>
    <div>{currentQuestionIndex} / {questionCount}</div>
    <div>{answer === congressman.side ? "Bien vu !" : "Et non !" }</div>
    <img src={congressman.path} alt="Photo d'un député (!)"/>
    <div>{congressman.parti}</div>
    <button onClick={nextQuestionFn}>Ok, suivant !</button>
  </div>
)
