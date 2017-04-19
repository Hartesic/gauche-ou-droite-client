import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

const API_URL = 'http://localhost:5000'

render(
  (
    <App apiUrl={API_URL} />
  ),
  document.getElementById('godContainer')
)
