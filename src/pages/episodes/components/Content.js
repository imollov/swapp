import React from 'react'
import PropTypes from 'prop-types'

import { Card, Box, Text } from 'rebass/styled-components'
import DetailList from '../../../components/DetailList'

const Content = ({ info, details, ...rest }) => (
  <Card {...rest} variant="card">
    <Box p={3}>
      <Text variant="body" pb={2}>
        {info}
      </Text>
      <DetailList data={details} />
    </Box>
  </Card>
)

Content.propTypes = {
  info: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
}

export default Content
