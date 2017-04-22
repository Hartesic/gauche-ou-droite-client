import React from 'react'

const FetchErrorMessage = ({ tryAgainFn }) => (
  <div>
    <i>"Il s'est enrayé !"</i>
    <p>Oh non, ça a chié dans la colle ! Encore un coup des Illuminatis, ils veulent nous faire taire.</p>
    <button onClick={e => tryAgainFn()}>Essaie encore pour voir...</button>
  </div>
)

export default FetchErrorMessage
