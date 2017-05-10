import React from 'react'

const StartButton = ({ onClickFn }) => (
  <button className='button-start' onClick={e => onClickFn()}>Commencer</button>
)

export default StartButton
