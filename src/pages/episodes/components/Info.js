import React from 'react'
import { Card, Box, Text } from 'rebass/styled-components'

export default ({ info, details, ...rest }) => (
  <Card {...rest} variant="card">
    <Box p={3}>
      <Text variant="body" pb={2}>
        {info}
      </Text>
      {details.map(([label, value]) => (
        <Box pb={1}>
          <Text variant="body" color="detailLabel" as="a">{`${label}: `}</Text>
          <Text variant="body" color="detailValue" as="a">
            {value}
          </Text>
        </Box>
      ))}
    </Box>
  </Card>
)
