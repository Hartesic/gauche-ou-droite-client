import React from 'react'

const StartButton = ({ onClickFn }) => (
  <button className='button-start' onClick={e => onClickFn()}>Test me, bro!</button>
)

export default StartButton
