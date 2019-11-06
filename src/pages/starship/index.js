import React from 'react'
import { Tiles } from '@rebass/layout'
import { Box, Heading } from 'rebass/styled-components'

import InfoCard from '../../components/InfoCard'
import Divider from '../../components/Divider'

import starshipsData from '../../stories/data/starships'

const {
  data: {
    allStarships: {
      edges: {
        0: { node: starship },
      },
    },
  },
} = starshipsData

export default () => {
  return (
    <Box variant="fitContent">
      <Heading variant="h1" textAlign="center">
        {starship.name}
      </Heading>
      <Heading variant="h2" color="subHeading" textAlign="center" mb={3}>
        {`(${starship.model})`}
      </Heading>
      <Divider mb={4} />
      <Tiles columns={[1, 2, 2]} gap={4}>
        <Box>
          <InfoCard
            img={starship.image}
            title={starship.name}
            data={[{ field: 'foo', value: 'bar' }]}
          />
        </Box>
        <Box>
          <Heading variant="h3" color="subHeading" textAlign="center" my={3}>
            Compared to Starship Class Max
          </Heading>
          {/* Radar chart goes here... */}
        </Box>
      </Tiles>
    </Box>
  )
}
