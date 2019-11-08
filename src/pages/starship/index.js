import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'
import Page from './components/Page'

const STARSHIP_QUERY = gql`
  query StarshipQuery($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      image
      starshipClass
      cost
      maxAtmosphericSpeed
      maxMLPerHour
      hyperdriveRating
      crew
    }
  }
`

export default () => {
  const { starshipId } = useParams()
  const { data, loading, error } = useQuery(STARSHIP_QUERY, {
    variables: { id: starshipId },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error on getting starship</p>

  const { starship } = data

  return <Page starship={starship} />
}
