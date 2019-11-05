import React from 'react'
import { shallow } from 'enzyme'

import BackgroundImage from '../../BackgroundImage'

describe('EpisodePreview Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<BackgroundImage src="test.png" />)

    expect(wrapper).toMatchSnapshot()
  })
})
