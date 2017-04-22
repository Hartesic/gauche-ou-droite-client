import React from 'react'

const CongressmanCard = ({ apiUrl, congressman, infosToDisplay=[] }) => (
  <div>
    {infosToDisplay.includes('photo') && <img src={apiUrl + congressman.path} alt="Photo d'un député" />}
    {infosToDisplay.includes('name') && <p>{congressman.name}</p>}
    {infosToDisplay.includes('party') && <p>{congressman.parti}</p>}
  </div>
)

export default CongressmanCard
