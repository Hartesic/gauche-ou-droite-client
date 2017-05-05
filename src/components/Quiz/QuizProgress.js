import React from 'react'

const QuizProgress = ({ currentQuestionIndex, questionCount }) => (
  <div className="quiz-progress">{currentQuestionIndex} / {questionCount}</div>
)

export default QuizProgress
