import React from 'react'
import { shallow } from 'enzyme'

import DetailList from '../DetailList'

describe('DetailList Component', () => {
  it('should match snapshot', () => {
    const details = [
      { field: 'foo', value: 'bar' },
      { field: 'foo', value: 'bar' },
    ]
    const wrapper = shallow(<DetailList data={details} />)

    expect(wrapper).toMatchSnapshot()
  })
})
