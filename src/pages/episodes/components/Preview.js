import React from 'react'
import { Card, Heading, Box, Text, Image } from 'rebass/styled-components'

export default ({ img, title, text, ...rest }) => (
  <Card {...rest}>
    <Image src={img} width={1} />
    <Box p={3}>
      <Heading variant="h2">{title}</Heading>
      <Text variant="body">{text}</Text>
    </Box>
  </Card>
)
