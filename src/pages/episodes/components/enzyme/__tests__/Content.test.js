import React from 'react'
import { shallow } from 'enzyme'

import EpisodeContent from '../../Content'

describe('EpisodeContent Component', () => {
  it('smoke test', () => {
    const data = [{ field: 'foo', value: 'bar' }]
    const wrapper = shallow(<EpisodeContent info="info" details={data} />)

    expect(wrapper).toMatchSnapshot()
  })
})
