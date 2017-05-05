import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'

import CongressmanCard from './CongressmanCard'

chai.use(chaiEnzyme())

describe('<CongressmanCard />', () => {
  const apiUrl = 'api-url'
  const congressman = {
    name: 'congressman-name',
    parti: 'congressman-party',
    path: 'congressman-photo-path'
  }

  it('Should display only photo', () => {
    const infosToDisplay = [
      'photo'
    ]
    const wrapper = shallow(
      <CongressmanCard
        apiUrl={apiUrl}
        congressman={congressman}
        infosToDisplay={infosToDisplay}
      />
    )
    const congressmanPhotoUrl = apiUrl + congressman.path

    // <img />
    expect(wrapper.find('img').prop('src'))
      .to.equal(congressmanPhotoUrl, '<CongressmanCard /> does not pass correct congressman photo url to <img />')
    // <p />
    expect(wrapper.find('p'))
      .to.have.length(0, '<CongressmanCard /> display to much infos')
  })

  it('Should display all infos', () => {
    const infosToDisplay = [
      'photo',
      'name',
      'party'
    ]
    const wrapper = shallow(
      <CongressmanCard
        apiUrl={apiUrl}
        congressman={congressman}
        infosToDisplay={infosToDisplay}
      />
    )
    const congressmanPhotoUrl = apiUrl + congressman.path

    // <img />
    expect(wrapper.find('img').prop('src'))
      .to.equal(congressmanPhotoUrl, '<CongressmanCard /> does not pass correct congressman photo url to <img />')
    expect(wrapper.containsAllMatchingElements([
      <span>{congressman.name}</span>,
      <span>{congressman.parti}</span>
    ])).to.equal(true, '<CongressmanCard /> does not display specified infos')
  })
})
