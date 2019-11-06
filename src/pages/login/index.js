import React from 'react'
import { Flex, Box } from 'rebass/styled-components'

import LoginForm from './components/LoginForm'
import Logo from '../../components/Logo'

export default () => {
  return (
    <Flex variant="content" justifyContent="center">
      <Box p={2} mt={5} bg="black" width={600}>
        <Box textAlign="center">
          <Logo variant="logo.large" />
        </Box>
        <Box variant="card" p={4} px={[4, null, 5]}>
          <LoginForm onSubmit={() => {}} />
        </Box>
      </Box>
    </Flex>
  )
}
