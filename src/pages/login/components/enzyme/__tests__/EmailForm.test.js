import React from 'react'
import { shallow, mount } from 'enzyme'

import LoginForm from '../../LoginForm'
import ThemeProvider from '../../../../../components/ThemeProvider'

describe('LoginForm Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<LoginForm onSubmit={() => {}} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should propagate form submit', () => {
    const onSubmitMock = jest.fn()
    const wrapper = mount(
      <ThemeProvider>
        <LoginForm onSubmit={onSubmitMock} />
      </ThemeProvider>,
    )

    expect(onSubmitMock).not.toHaveBeenCalled()

    const emailInput = wrapper.find('input[name="email"]')
    emailInput.simulate('change', {
      target: { name: 'email', value: 'test' },
    })

    const passwordInput = wrapper.find('input[name="password"]')
    passwordInput.simulate('change', {
      target: { name: 'password', value: '1234' },
    })

    const form = wrapper.find('form')
    form.simulate('submit')

    expect(onSubmitMock).toHaveBeenCalledWith({
      email: 'test',
      password: '1234',
    })
  })

  it('should match snapshot with error message', () => {
    const wrapper = shallow(<LoginForm errorMsg="error" onSubmit={() => {}} />)

    expect(wrapper).toMatchSnapshot()
  })
})
