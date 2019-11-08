import React from 'react'
import PropTypes from 'prop-types'
import { Tiles } from '@rebass/layout'
import { Box, Heading } from 'rebass/styled-components'

import InfoCard from '../../../../../components/InfoCard'
import ImageCard from '../../../../../components/ImageCard'
import Divider from '../../../../../components/Divider'
import PageLayout from '../../../../../components/PageLayout'

const Page = ({ character, starships }) => {
  const characterDetails = [
    { field: 'Height', value: character.height },
    { field: 'Weight', value: character.mass },
    { field: 'Species', value: character.species.name },
    { field: 'Home World', value: character.homeworld.name },
  ]
  return (
    <PageLayout variant="fitContent">
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
          <Tiles columns={1}>
            {starships.map(({ node: s }) => (
              <ImageCard
                key={s.id}
                img={s.image}
                title={s.name}
                linkTo={`/starship/${s.id}`}
                variant="compact"
                minHeight={60}
              />
            ))}
          </Tiles>
        </Box>
      </Tiles>
    </PageLayout>
  )
}

Page.propTypes = {
  character: PropTypes.object.isRequired,
  starships: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Page
