import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import StartButton from './StartButton'

chai.use(chaiEnzyme())

describe('<StartButton />', () => {
  const onClickFn = sinon.spy()
  const wrapper = shallow(<StartButton onClickFn={onClickFn} />)

  it('Should render appropriately', () => {
    expect(wrapper.find('.button-start'))
      .to.have.length(1, '<StartButton /> does not display one start button')
  })

  it('Should start quiz on button click', () => {
    wrapper.find('.button-start').simulate('click')
    expect(onClickFn.calledOnce)
      .to.equal(true, 'button.button-start not clicked once')
  })
})
