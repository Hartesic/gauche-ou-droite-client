import React from 'react'

const WelcomeMessage = () => (
  <div className="welcome-message-container">
    <div className="logo">
      <img src="images/logo.svg" />
    </div>
    <div className="welcome-message-text text">Avez-vous déjà entendu des réflexions de ce genre :</div>
    <div className="welcome-message-text text">"Il a bien une tête de gaucho, lui !"</div>
    <div className="welcome-message-text text">"Il a pas une dégaine à voter Mitterand..."</div>
    <div className="welcome-message-text text"><i>Gauche ou Droite ?</i> a pour objectif de tester cette afirmation.</div>
    <div className="welcome-message-text text">Le bord politique d'un député se reconnaît-il au premier coup d'oeil ?</div>
    <div className="welcome-message-text text">Nos amis de l'assemblée sont-ils victimes de délit de faciès ?</div>
    <div className="welcome-message-text text">À vous de nous le dire !</div>
  </div>
)

export default WelcomeMessage
