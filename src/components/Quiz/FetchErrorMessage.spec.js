import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import FetchErrorMessage from './FetchErrorMessage'

chai.use(chaiEnzyme())

describe('<FetchErrorMessage />', () => {
  const tryAgainFn = sinon.spy()
  const wrapper = shallow(
    <FetchErrorMessage
      tryAgainFn={tryAgainFn}
    />
  )

  it('Should render appropriately', () => {
    // .message-error
    expect(wrapper.find('.fetch-error-message-text'))
      .to.have.length.to.be.at.least(1, '<FetchErrorMessage /> does not display any message')
    // .button-retry_fetch
    expect(wrapper.find('.button-fetchagain'))
      .to.have.length(1, '<FetchErrorMessage /> does not display one button')
  })

  it('Should retry to fetch data on button click', () => {
    wrapper.find('.button-fetchagain').simulate('click')
    expect(tryAgainFn.calledOnce)
      .to.equal(true, '<FetchErrorMessage /> does not call function to retry to fetch data')
  })
})
