import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Flex, Heading, Box, Text } from 'rebass/styled-components'
import BackgroundImage from '../../../components/BackgroundImage'

const Preview = ({ img, title, text, linkTo, ...rest }) => (
  <Flex {...rest} variant="card" flexDirection="column">
    <BackgroundImage src={img} height={256} />
    <Box p={3}>
      <Link to={linkTo}>
        <Heading variant="h2" py={3}>
          {title}
        </Heading>
      </Link>
      <Text variant="body">{text}</Text>
    </Box>
  </Flex>
)

const requiredStr = PropTypes.string.isRequired
Preview.propTypes = {
  img: requiredStr,
  title: requiredStr,
  text: requiredStr,
  linkTo: requiredStr,
}

export default Preview
