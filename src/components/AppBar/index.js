import React from 'react'
import { Link } from 'react-router-dom'
import { useApolloClient } from '@apollo/react-hooks'
import { Flex, Box, Text } from 'rebass/styled-components'

import Logo from '../Logo'
import Logout from './Logout'

export default props => {
  const client = useApolloClient()

  const logout = () => {
    localStorage.removeItem('token')
    client.writeData({ data: { authenticated: false } })
  }

  return (
    <Flex {...props} bg="appBar" height={60}>
      <Box width={1 / 2} pl={4} alignSelf="center">
        <Logo variant="logo.small" />
      </Box>
      <Flex width={1 / 2} justifyContent="flex-end" alignSelf="center">
        <Box mr={3} alignSelf="center">
          <Link to="/episodes">
            <Text variant="link">Episodes</Text>
          </Link>
        </Box>
        <Box mr={3} alignSelf="center">
          <Link to="/characters">
            <Text variant="link">Characters</Text>
          </Link>
        </Box>
        <Logout mr={3} onClick={logout} />
      </Flex>
    </Flex>
  )
}
