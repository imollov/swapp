import React from 'react'
import { mount } from 'enzyme'

import ThemeProvider from '../ThemeProvider'
import RadarChart from '../RadarChart'

describe('RadarChart Component', () => {
  it('should match snapshot', () => {
    const wrapper = mount(
      <ThemeProvider>
        <RadarChart data={[{ data: { foo: 0.2 } }]} captions={{ foo: 'Foo' }} />
      </ThemeProvider>,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
