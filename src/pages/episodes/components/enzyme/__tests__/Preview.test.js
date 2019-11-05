import React from 'react'
import { shallow } from 'enzyme'

import EpisodePreview from '../../Preview'

describe('EpisodePreview Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(
      <EpisodePreview img="image.png" title="title" text="text" />,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
