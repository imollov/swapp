import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Heading, Box, Text } from 'rebass/styled-components'
import BackgroundImage from '../../../components/BackgroundImage'

const Preview = ({ img, title, text, ...rest }) => (
  <Flex {...rest} variant="card" flexDirection="column">
    <BackgroundImage src={img} height={256} />
    <Box p={3}>
      <Heading variant="h2" py={3}>
        {title}
      </Heading>
      <Text variant="body">{text}</Text>
    </Box>
  </Flex>
)

const requiredStr = PropTypes.string.isRequired
Preview.propTypes = {
  img: requiredStr,
  title: requiredStr,
  text: requiredStr,
}

export default Preview
