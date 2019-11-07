import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'

import { Tiles } from '@rebass/layout'
import { Box, Heading } from 'rebass/styled-components'
import InfoCard from '../../../../components/InfoCard'
import ImageCard from '../../../../components/ImageCard'
import Divider from '../../../../components/Divider'
import PageLayout from '../../../../components/PageLayout'

const CHARACTER_QUERY = gql`
  query CharacterQuery($id: ID!, $first: Int!, $after: String) {
    person(id: $id) {
      id
      name
      birthYear
      height
      mass
      image
      homeworld {
        name
      }
      species {
        name
      }
      starships(first: $first, after: $after) {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`

export default () => {
  const { characterId } = useParams()
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { id: characterId, first: 5 },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error on getting episodes</p>

  const { person: character } = data
  const {
    starships: { edges: characterStarships },
  } = character

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
            {characterStarships.map(({ node: s }) => (
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
