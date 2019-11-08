import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'
import Page from './components/Page'

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

  const { person } = data
  const {
    starships: { edges: personStarships },
  } = person

  return <Page character={person} starships={personStarships} />
}
