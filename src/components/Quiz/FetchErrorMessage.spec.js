import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import FetchErrorMessage from './FetchErrorMessage'

chai.use(chaiEnzyme())

describe('<FetchErrorMessage />', () => {
  it('Should render appropriately', () => {
    const wrapper = shallow(
      <FetchErrorMessage
        tryAgainFn={() => null}
      />
    )

    // <button />
    expect(wrapper.find('button'))
      .to.have.length(1, '<FetchErrorMessage /> does not display one button')
  })

  it('Should retry to fetch data on button click', () => {
    const tryAgainFn = sinon.spy()
    const wrapper = shallow(
      <FetchErrorMessage
        tryAgainFn={tryAgainFn}
      />
    )

    wrapper.find('button').simulate('click')
    expect(tryAgainFn.calledOnce)
      .to.equal(true, '<FetchErrorMessage /> does not call function to retry to fetch data')
  })
})
