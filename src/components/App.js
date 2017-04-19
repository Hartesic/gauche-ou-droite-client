import React from 'react'

import Footer from './Footer'
import Quiz from './Quiz'
import Header from './Header'

const App = ({ apiUrl }) => (
  <div>
    <Header />
    <Quiz apiUrl={apiUrl} />
    <Footer />
  </div>
)

export default App
