import React from 'react'
import { Flex, Heading, Box } from 'rebass/styled-components'
import BackgroundImage from './BackgroundImage'

export default ({ variant, img, title, ...rest }) => {
  const imageWidth = variant === 'compact' ? 1 / 5 : 1 / 3
  return (
    <Flex {...rest} variant="card">
      <BackgroundImage src={img} width={imageWidth} />
      <Box margin="auto" p={2} textAlign="center">
        <Heading variant="h3">{title}</Heading>
      </Box>
    </Flex>
  )
}
