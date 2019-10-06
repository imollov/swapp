import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '../../LoginForm'

describe('LoginForm Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<LoginForm />)

    expect(wrapper).toExist()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(
      <LoginForm
        username="demo"
        password="qwerty"
        onInputChange={() => {}}
        onSubmit={() => {}}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with error message', () => {
    const wrapper = shallow(
      <LoginForm
        username="demo"
        password="qwerty"
        onInputChange={() => {}}
        onSubmit={() => {}}
        errorMessage="Invalid credentials!"
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should propagate input change', () => {
    const onInputChangeMock = jest.fn()
    const wrapper = shallow(
      <LoginForm
        username="demo"
        password="qwerty"
        onInputChange={onInputChangeMock}
        onSubmit={() => {}}
      />
    )

    expect(onInputChangeMock).not.toHaveBeenCalled()

    const usernameInput = wrapper.find('input[name="username"]')
    usernameInput.simulate('change', {
      target: { name: 'username', value: 'test' }
    })

    expect(onInputChangeMock).toHaveBeenCalledWith({
      username: 'test'
    })
  })

  it('should propagate submit', () => {
    const onSubmitMock = jest.fn()
    const wrapper = shallow(
      <LoginForm
        username="demo"
        password="qwerty"
        onInputChange={() => {}}
        onSubmit={onSubmitMock}
      />
    )

    expect(onSubmitMock).not.toHaveBeenCalled()

    const submitButton = wrapper.findWhere(
      el => el.text() === 'Login' && el.type() === 'button'
    )
    submitButton.simulate('click')

    expect(onSubmitMock).toHaveBeenCalled()
  })
})
