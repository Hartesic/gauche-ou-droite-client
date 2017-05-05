import React from 'react'

import WelcomeMessage from './WelcomeMessage'
import StartButton from './StartButton'

const Welcome = ({ startGameFn }) => (
  <div className="container welcome-container">
    <WelcomeMessage />
    <StartButton onClickFn={startGameFn} />
  </div>
)

export default Welcome
