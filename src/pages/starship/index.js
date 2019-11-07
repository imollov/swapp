import React from 'react'
import { Tiles } from '@rebass/layout'
import { Flex, Box, Heading } from 'rebass/styled-components'

import InfoCard from '../../components/InfoCard'
import RadarChart from '../../components/RadarChart'
import Divider from '../../components/Divider'
import PageLayout from '../../components/PageLayout'

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

const data = [
  {
    data: {
      maxAtmSpeed: 0.9,
      cost: 0.5,
      maxMlh: 0.3,
      hyperDRat: 0.45,
      crew: 0.2,
    },
    meta: { color: 'red' },
  },
]

const captions = {
  maxAtmSpeed: 'Max Atm. Speed',
  cost: 'Cost',
  maxMlh: 'Max ML/h',
  hyperDRat: 'HyperD Rat.',
  crew: 'Crew',
}

export default () => {
  return (
    <PageLayout variant="fitContent">
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
          <Flex bg="black" justifyContent="center" py={4}>
            <RadarChart data={data} captions={captions} />
          </Flex>
        </Box>
      </Tiles>
    </PageLayout>
  )
}