import React from 'react'

const CongressmanCard = ({ apiUrl, congressman, infosToDisplay=[] }) => (
  <div className="congressman-container-infos">
    <div className="congressman-container">
        {infosToDisplay.includes('photo') && <img className="congressman-photo" src={apiUrl + congressman.path} alt="Photo d'un député" />}
    </div>
    <div className="candidat-infos">
        {infosToDisplay.includes('name') && <span className="congressman-name">{congressman.name}</span>}
        {infosToDisplay.includes('party') && <span className="congressman-party">{congressman.parti}</span>}
        <i className="success-pourcent">
            {infosToDisplay.includes('successRate') && <span className="congressman-successrate">{congressman.average_success * 100}% ont trouvé</span>}
        </i>
    </div>
  </div>
)

export default CongressmanCard
