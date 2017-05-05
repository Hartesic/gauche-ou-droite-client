import React from 'react'

import Quiz from './Quiz'

const App = ({ apiUrl, questionCount }) => (
  <div>
    <Quiz apiUrl={apiUrl} questionCount={questionCount} />
  </div>
)

export default App
