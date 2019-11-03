import React from 'react'
import { Card, Heading, Box, Image } from 'rebass/styled-components'
import Details from './Details'

export default ({ img, title, data, ...rest }) => (
  <Card {...rest}>
    <Box p={3}>
      <Heading variant="h3" pb={2} textAlign="center">
        {title}
      </Heading>
      <Image src={img} width={1} pb={3} />
      <Details data={data} />
    </Box>
  </Card>
)
