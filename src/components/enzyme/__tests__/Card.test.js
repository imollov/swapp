import React from 'react'
import { shallow } from 'enzyme'

import Card from '../../Card'

describe('Card Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper).toExist()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Card
        className="class"
        title="Title"
        subtitle="Subtitle"
        text="Text"
        img="img.png"
        onClick={() => {}}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
