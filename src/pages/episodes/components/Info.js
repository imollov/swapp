import React from 'react'
import { Card, Box, Text } from 'rebass/styled-components'
import Details from '../../../components/Details'

export default ({ info, details, ...rest }) => (
  <Card {...rest} variant="card">
    <Box p={3}>
      <Text variant="body" pb={2}>
        {info}
      </Text>
      <Details data={details} />
    </Box>
  </Card>
)
