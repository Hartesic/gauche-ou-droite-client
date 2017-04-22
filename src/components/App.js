import React from 'react'

import Footer from './Footer'
import Quiz from './Quiz'
import Header from './Header'

const App = ({ apiUrl, questionCount }) => (
  <div>
    <Header />
    <Quiz apiUrl={apiUrl} questionCount={questionCount} />
    <Footer />
  </div>
)

export default App
