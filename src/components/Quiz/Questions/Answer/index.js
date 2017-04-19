import React from 'react'

const Answer = ({ answer, apiUrl, congressman, currentQuestionIndex, nextQuestionFn, questionCount }) => (
  <div>
    <div>{currentQuestionIndex} / {questionCount}</div>
    <div>{answer === congressman.side ? "Bien vu !" : "Et non !" }</div>
    <img src={apiUrl + congressman.path} alt="Photo d'un député (!)"/>
    <div>{congressman.name}</div>
    <div>{congressman.parti}</div>
    <button onClick={nextQuestionFn}>Ok, suivant !</button>
  </div>
)

export default Answer
