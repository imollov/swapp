import React from 'react'
import { shallow } from 'enzyme'

import StyledInput from '../StyledInput'

describe('StyledInput Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<StyledInput />)

    expect(wrapper).toMatchSnapshot()
  })
})
