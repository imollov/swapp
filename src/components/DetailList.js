import React from 'react'
import PropTypes from 'prop-types'

import { Box, Text } from 'rebass/styled-components'

const DetailList = ({ data }) =>
  data.map(({ field, value }) => (
    <Box pb={1} key={field}>
      <Text variant="body" color="detailLabel" as="a">{`${field}: `}</Text>
      <Text variant="body" color="detailValue" as="a">
        {value}
      </Text>
    </Box>
  ))

DetailList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
  ).isRequired,
}

export default DetailList
