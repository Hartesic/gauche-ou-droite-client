import React from 'react'

import WelcomeMessage from './WelcomeMessage'
import StartButton from './StartButton'

const Welcome = ({ startGameFn }) => (
  <div>
    <WelcomeMessage />
    <StartButton onClickFn={startGameFn} />
  </div>
)

export default Welcome
