import React from 'react'

const QuizProgress = ({ currentQuestionIndex, questionCount }) => (
  <div className="quiz-progress animated fadeInUp">{currentQuestionIndex} <span>/ {questionCount}</span></div>
)

export default QuizProgress
