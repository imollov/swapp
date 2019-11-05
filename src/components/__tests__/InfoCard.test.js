import React from 'react'
import { shallow } from 'enzyme'

import InfoCard from '../InfoCard'

describe('InfoCard Component', () => {
  it('should match snapshot', () => {
    const details = [{ field: 'foo', value: 'bar' }]
    const wrapper = shallow(
      <InfoCard img="test.png" title="title" data={details} />,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
