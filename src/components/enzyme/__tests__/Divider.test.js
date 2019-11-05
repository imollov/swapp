import React from 'react'
import { shallow } from 'enzyme'

import Divider from '../../Divider'

describe('Logo Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<Divider />)

    expect(wrapper).toExist()
  })
})
