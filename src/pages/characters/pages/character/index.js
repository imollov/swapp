import React from 'react'
import { Tiles } from '@rebass/layout'
import { Box, Heading } from 'rebass/styled-components'

import InfoCard from '../../../../components/InfoCard'
import ImageCard from '../../../../components/ImageCard'
import ResponsiveList from '../../../../components/ResponsiveList'
import Divider from '../../../../components/Divider'

import personsData from '../../../../stories/data/persons'
import starshipsData from '../../../../stories/data/starships'

const {
  data: {
    allPeople: {
      edges: {
        1: { node: character },
      },
    },
  },
} = personsData

const {
  data: {
    allStarships: { edges },
  },
} = starshipsData
const starships = edges.slice(0, 4)

export default () => {
  const characterDetails = [
    { field: 'Height', value: character.height },
    { field: 'Weight', value: character.mass },
    { field: 'Species', value: character.species.name },
    { field: 'Home World', value: character.homeworld.name },
  ]
  return (
    <Box variant="fitContent">
      <Heading variant="h1" textAlign="center" mb={4}>
        {character.name}
      </Heading>
      <Divider mb={4} />
      <Tiles columns={[1, 2, 2]} gap={4}>
        <Box>
          <InfoCard
            img={character.image}
            title={character.name}
            data={characterDetails}
          />
        </Box>
        <Box>
          <Heading variant="sub" textAlign="center" my={3}>
            Piloted Starships
          </Heading>
          <Divider mb={3} />
          <ResponsiveList columns={1}>
            {starships.map(({ node: s }) => (
              <ImageCard
                variant="compact"
                img={s.image}
                title={s.name}
                minHeight={60}
              />
            ))}
          </ResponsiveList>
        </Box>
      </Tiles>
    </Box>
  )
}
