import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text } from 'rebass/styled-components'

import LoginForm from './LoginForm'
import Logo from '../../../components/Logo'

const Page = ({ signIn, errorMsg }) => {
  return (
    <Flex variant="content" justifyContent="center">
      <Box p={2} mt={5} bg="black" width={600}>
        <Box textAlign="center">
          <Logo variant="logo.large" />
        </Box>
        <Box variant="card" p={4} px={[4, null, 5]}>
          {errorMsg && (
            <Box>
              <Text variant="error">{errorMsg}</Text>
            </Box>
          )}
          <LoginForm onSubmit={signIn} />
        </Box>
      </Box>
    </Flex>
  )
}

Page.propTypes = {
  signIn: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

Page.defaultProps = {
  errorMsg: '',
}

export default Page
