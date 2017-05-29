import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

const API_URL = 'http://localhost:5000'
const QUESTION_COUNT = 20

render(
  (
    <App apiUrl={API_URL} questionCount={QUESTION_COUNT} />
  ),
  document.getElementById('godContainer')
)
