import React from 'react'
import { Flex, Box, Text } from 'rebass/styled-components'

import Logo from './Logo'
import Logout from './Logout'

export default props => {
  return (
    <Flex {...props} bg="appBar" height={60}>
      <Box width={1 / 2} pl={4} alignSelf="center">
        <Logo variant="logo.small" />
      </Box>
      <Flex width={1 / 2} justifyContent="flex-end" alignSelf="center">
        <Text variant="link" mr={3} alignSelf="center">
          Episodes
        </Text>
        <Text variant="link" mr={3} alignSelf="center">
          Characters
        </Text>
        <Logout mr={3} />
      </Flex>
    </Flex>
  )
}
