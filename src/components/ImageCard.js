import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Heading, Box } from 'rebass/styled-components'
import BackgroundImage from './BackgroundImage'

const ImageCard = ({ variant, img, title, ...rest }) => {
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

ImageCard.propTypes = {
  variant: PropTypes.oneOf(['compact', undefined]),
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ImageCard
