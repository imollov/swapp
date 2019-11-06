import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box, Text } from 'rebass/styled-components'

import Logo from '../Logo'
import Logout from './Logout'

export default props => {
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
        <Logout mr={3} />
      </Flex>
    </Flex>
  )
}
