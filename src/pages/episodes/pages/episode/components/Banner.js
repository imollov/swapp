import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Heading, Box, Image } from 'rebass/styled-components'

const Banner = ({ img, title, subtitle, ...rest }) => (
  <Flex {...rest} variant="card" flexDirection={['column', 'row', 'row']}>
    <Image src={img} width={[1, null, 1 / 3]} />
    <Box width={[1, null, 2 / 3]} p={4} m="auto" textAlign="center">
      <Heading variant="h1">{subtitle}</Heading>
      <Heading variant="sub" pt={[3, null, 0]}>
        {title}
      </Heading>
    </Box>
  </Flex>
)

const requiredStr = PropTypes.string.isRequired
Banner.propTypes = {
  img: requiredStr,
  title: requiredStr,
  subtitle: requiredStr,
}

export default Banner
