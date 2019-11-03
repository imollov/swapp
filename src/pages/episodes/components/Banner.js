import React from 'react'
import { Flex, Heading, Box, Image } from 'rebass/styled-components'

export default ({ img, title, subtitle, ...rest }) => (
  <Flex {...rest} variant="card">
    <Image src={img} width={1 / 3} />
    <Box width={2 / 3} margin="auto" textAlign="center">
      <Heading variant="heading">{subtitle}</Heading>
      <Heading variant="subtitle">{title}</Heading>
    </Box>
  </Flex>
)
