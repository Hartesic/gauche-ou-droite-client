import React from 'react'

const StartButton = ({ onClickFn }) => (
  <div>
    <button onClick={e => onClickFn()}>Test me, bro!</button>
  </div>
)

export default StartButton
