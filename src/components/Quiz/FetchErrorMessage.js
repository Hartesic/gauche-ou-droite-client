import React from 'react'

const FetchErrorMessage = ({ tryAgainFn }) => (
  <div className="fetch-error-message-container">
    <div className="logo">
      <img src="images/logo.svg" />
    </div>
    <div className="fetch-error-message-text">"Il s'est enrayé !"</div>
    <div className="fetch-error-message-text">Oh non, ça a chié dans la colle ! Encore un coup des Illuminatis, ils veulent nous faire taire.</div>
    <button className="fetch-error-message-button button-fetchagain" onClick={e => tryAgainFn()}>Essaie encore pour voir...</button>
  </div>
)

export default FetchErrorMessage
