import React from 'react'
import { mount } from 'enzyme'

import Logout from '../Logout'
import ThemeProvider from '../../ThemeProvider'

describe('EpisodeBanner Component', () => {
  it('smoke test', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Logout />
      </ThemeProvider>,
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Logout p={3} />
      </ThemeProvider>,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
