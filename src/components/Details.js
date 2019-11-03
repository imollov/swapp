import React from 'react'
import { Box, Text } from 'rebass/styled-components'

export default ({ data }) =>
  data.map(([label, value]) => (
    <Box pb={1}>
      <Text variant="body" color="detailLabel" as="a">{`${label}: `}</Text>
      <Text variant="body" color="detailValue" as="a">
        {value}
      </Text>
    </Box>
  ))
