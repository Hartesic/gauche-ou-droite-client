import React from 'react'

export default ({ tryAgainFn }) => (
  <div>
    <i>"Il s'est enrayé !"</i>
    <p>Oh non, ça a chié dans la colle ! Encore un coup des Illuminatis, ils veulent nous faire taire.</p>
    <button onClick={tryAgainFn}>Essaie encore pour voir...</button>
  </div>
)
