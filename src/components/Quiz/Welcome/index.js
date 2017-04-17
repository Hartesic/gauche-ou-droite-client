import React from 'react'

import WelcomeMessage from './WelcomeMessage'
import StartButton from './StartButton'

export default ({ startGameFn }) => (
  <div>
    <WelcomeMessage />
    <StartButton onClickFn={startGameFn} />
  </div>
)
