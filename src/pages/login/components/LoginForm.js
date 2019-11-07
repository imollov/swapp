import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Box, Button } from 'rebass/styled-components'
import StyledInput from './StyledInput'

const LoginForm = ({ onSubmit, ...rest }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = ({ target: { value, name } }) =>
    setState({ ...state, [name]: value })

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ variables: { ...state } })
  }

  return (
    <Box {...rest} as="form" onSubmit={handleSubmit}>
      <Box my={3}>
        <StyledInput
          id="email"
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleInputChange}
        />
      </Box>
      <Box my={3}>
        <StyledInput
          id="password"
          name="password"
          type="password"
          placeholder="password"
          value={state.password}
          onChange={handleInputChange}
        />
      </Box>
      <Box textAlign="right">
        <Button variant="primary">Login</Button>
      </Box>
    </Box>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

export default LoginForm
