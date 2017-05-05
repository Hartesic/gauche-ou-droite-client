import React from 'react'

const CongressmanCard = ({ apiUrl, congressman, infosToDisplay=[] }) => (
  <div className="container congressman-container">
    {infosToDisplay.includes('photo') && <img className="congressman-photo" src={apiUrl + congressman.path} alt="Photo d'un député" />}
    {infosToDisplay.includes('name') && <span className="congressman-name">{congressman.name}</span>}
    {infosToDisplay.includes('party') && <span className="congressman-party">{congressman.parti}</span>}
    {infosToDisplay.includes('successRate') && <span className="congressman-successrate">{congressman.average_success * 100}%</span>}
  </div>
)

export default CongressmanCard
