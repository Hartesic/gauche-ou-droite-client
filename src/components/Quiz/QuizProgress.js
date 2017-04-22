import React from 'react'

const QuizProgress = ({ currentQuestionIndex, questionCount }) => (
  <p>{currentQuestionIndex} / {questionCount}</p>
)

export default QuizProgress
