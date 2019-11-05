import React from 'react'
import { shallow, mount } from 'enzyme'

import Logo from '../../Logo'
import ThemeProvider from '../../ThemeProvider'

describe('Logo Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<Logo />)

    expect(wrapper).toExist()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<Logo variant="logo.small" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when clicked', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Logo variant="logo.small" />
      </ThemeProvider>,
    )

    const logo = wrapper.find('span')
    logo.simulate('click')

    expect(wrapper).toMatchSnapshot()
  })
})
