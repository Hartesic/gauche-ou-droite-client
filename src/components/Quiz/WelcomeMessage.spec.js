import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'

import WelcomeMessage from './WelcomeMessage'

chai.use(chaiEnzyme())

describe('<WelcomeMessage />', () => {
  const wrapper = shallow(
    <WelcomeMessage />
  )

  it('Should render appropriately', () => {
    // .message-error
    expect(wrapper.find('.message-welcome'))
      .to.have.length.to.be.at.least(1, '<WelcomeMessage /> does not display any message')
  })
})
