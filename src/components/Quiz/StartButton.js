import React from 'react'

const StartButton = ({ onClickFn }) => (
  <button className='button-start' onClick={e => onClickFn()}>Débuter</button>
)

export default StartButton
