import React from 'react'

const WelcomeMessage = () => (
  <div className="welcome-message-container">
    <div className="logo">
      <img src="images/logo.svg" />
    </div>
    <div className='welcome-message-text text'>Bienvenue dans <i>Gauche ou Droite ?</i></div>
    <div className='welcome-message-text text'>Le quiz qui vous fera réviser votre culture électorale.</div>
    <div className='welcome-message-text text'>Saurez-vous reconnaître le bord politique d'un député au premier coup d'oeil ?</div>
    <div className='welcome-message-text text'>Parce que les députés aussi ont droit au délit de faciès !</div>
  </div>
)

export default WelcomeMessage
