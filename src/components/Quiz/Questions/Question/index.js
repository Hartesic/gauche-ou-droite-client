import React from 'react'

const Question = ({ apiUrl, congressman, currentQuestionIndex, questionCount, selectAnswerFn }) => (
  <div>
    <div>{currentQuestionIndex} / {questionCount}</div>
    <img src={apiUrl + congressman.path} alt="Photo d'un député (!)" />
    <div>
      <button onClick={e => selectAnswerFn('gauche')}>Gauche</button>
      <button onClick={e => selectAnswerFn('droite')}>Droite</button>
    </div>
  </div>
)

export default Question
