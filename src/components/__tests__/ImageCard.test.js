import React from 'react'
import { shallow } from 'enzyme'

import ImageCard from '../ImageCard'

describe('ImageCard Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(
      <ImageCard img="image.png" title="title" linkTo="/" />,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with variant', () => {
    const wrapper = shallow(
      <ImageCard variant="compact" img="image.png" title="title" linkTo="/" />,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
