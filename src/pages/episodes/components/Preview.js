import React from 'react'
import { Flex, Heading, Box, Text } from 'rebass/styled-components'
import BackgroundImage from '../../../components/BackgroundImage'

export default ({ img, title, text, ...rest }) => (
  <Flex {...rest} variant="card" flexDirection="column">
    <BackgroundImage src={img} height={256} />
    <Box p={3}>
      <Heading variant="h2" py={3}>
        {title}
      </Heading>
      <Text variant="body">{text}</Text>
    </Box>
  </Flex>
)
