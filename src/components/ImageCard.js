import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Flex, Heading, Box } from 'rebass/styled-components'
import BackgroundImage from './BackgroundImage'

const ImageCard = ({ variant, img, title, linkTo, ...rest }) => {
  const imageWidth = variant === 'compact' ? 1 / 5 : 1 / 3
  return (
    <Flex {...rest} variant="card">
      <BackgroundImage src={img} width={imageWidth} />
      <Box margin="auto" p={2} textAlign="center">
        <Link to={linkTo}>
          <Heading variant="h3">{title}</Heading>
        </Link>
      </Box>
    </Flex>
  )
}

const requiredStr = PropTypes.string.isRequired

ImageCard.propTypes = {
  variant: PropTypes.oneOf(['compact', undefined]),
  img: requiredStr,
  title: requiredStr,
  linkTo: requiredStr,
}

export default ImageCard
