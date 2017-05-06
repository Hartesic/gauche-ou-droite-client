import React from 'react'

const QuizProgress = ({ currentQuestionIndex, questionCount }) => (
  <div className="quiz-progress">{currentQuestionIndex} <span>/ {questionCount}</span></div>
)

export default QuizProgress
