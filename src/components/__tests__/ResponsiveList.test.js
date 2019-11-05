import React from 'react'
import { shallow } from 'enzyme'

import ResponsiveList from '../ResponsiveList'

describe('ResponsiveList Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(
      <ResponsiveList>
        <div></div>
        <div></div>
      </ResponsiveList>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when hasMore is on', () => {
    const wrapper = shallow(
      <ResponsiveList hasMore={true}>
        <div></div>
        <div></div>
      </ResponsiveList>,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
