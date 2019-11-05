import React from 'react'
import { shallow } from 'enzyme'

import AppBar from '../../AppBar'

describe('AppBar Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<AppBar />)

    expect(wrapper).toMatchSnapshot()
  })
})
