import React from 'react'

const FetchErrorMessage = ({ tryAgainFn }) => (
  <div>
    <i className='message-error'>"Il s'est enrayé !"</i>
    <p className='message-error'>Oh non, ça a chié dans la colle ! Encore un coup des Illuminatis, ils veulent nous faire taire.</p>
    <button className='button-retry_fetch' onClick={e => tryAgainFn()}>Essaie encore pour voir...</button>
  </div>
)

export default FetchErrorMessage
