import React from 'react'
import PropTypes from 'prop-types'
import { Card, Heading, Box, Image } from 'rebass/styled-components'
import DetailList from './DetailList'

const InfoCard = ({ img, title, data, ...rest }) => (
  <Card {...rest}>
    <Box p={3}>
      <Heading variant="h3" pb={2} textAlign="center">
        {title}
      </Heading>
      <Image src={img} width={1} pb={3} />
      <DetailList data={data} />
    </Box>
  </Card>
)

InfoCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default InfoCard
