import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'

import Welcome from './Welcome'

chai.use(chaiEnzyme())

describe('<Welcome />', () => {
  const startGameFn = () => null
  const wrapper = shallow(
    <Welcome
      startGameFn={startGameFn}
    />
  )

  it('Should render appropriately', () => {
    // <WelcomeMessage />
    expect(wrapper.find('WelcomeMessage'))
      .to.have.length(1, '<Welcome /> does not display one <WelcomeMessage />')
    // <StartButton />
    const startButton = wrapper.find('StartButton')
    expect(startButton)
      .to.have.length(1, '<Welcome /> does not display one <StartButton />')
    expect(startButton.prop('onClickFn'))
      .to.equal(startGameFn, '<Welcome /> does not pass correct function to <StartButton />')
  })
})
