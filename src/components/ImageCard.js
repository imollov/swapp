import React from 'react'
import { Flex, Heading, Box, Image } from 'rebass/styled-components'

export default ({ variant, img, title, ...rest }) => {
  const imageWidth = variant === 'compact' ? 1 / 5 : 1 / 3
  return (
    <Flex {...rest} variant="card">
      <Image src={img} width={imageWidth} />
      <Box margin="auto" p={1} textAlign="center">
        <Heading variant="h3">{title}</Heading>
      </Box>
    </Flex>
  )
}
