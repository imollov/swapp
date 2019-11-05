import React from 'react'
import { shallow } from 'enzyme'

import EpisodeBanner from '../Banner'

describe('EpisodeBanner Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(
      <EpisodeBanner img="image.png" title="title" subtitle="subtitle" />,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
