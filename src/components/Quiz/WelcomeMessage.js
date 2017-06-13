import React from 'react'

const WelcomeMessage = () => (
  <div className="welcome-message-container">
    <div className="logo">
      <img src="images/logo.svg" />
    </div>
    <div className="welcome-message-text text">Peut-être avez-vous déjà entendu ce type de réflexions :</div>
    <div className="welcome-message-text text">"Il a bien une tête de gaucho, lui !" ou "Il a pas une dégaine à voter Mitterand..."</div>
    <div className="welcome-message-text text hidden-mini-devices"><i>Gauche ou Droite ?</i> a pour objectif de vérifier ces affirmations.</div>
    <div className="welcome-message-text text">Le bord politique d'un député se reconnaît-il au premier coup d'oeil ? Faites le test avant qu'ils ne soient remplacés !</div>
  </div>
)

export default WelcomeMessage
