import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import RadarChart from '../../../components/RadarChart'
import compareStarship from '../../../utils/compareStarship'

const radarCaptions = {
  maxAtmosphericSpeed: 'Max Atm. Speed',
  cost: 'Cost',
  maxMLPerHour: 'Max ML/h',
  hyperdriveRating: 'HyperD Rat.',
  crew: 'Crew',
}

const ALL_STARSHIPS_QUERY = gql`
  query AllStarShipsQuery(
    $first: Int!
    $after: String
    $filter: StarshipFilter
  ) {
    allStarships(first: $first, after: $after, filter: $filter) {
      edges {
        node {
          cost
          crew
          maxAtmosphericSpeed
          maxMLPerHour
          hyperdriveRating
        }
      }
    }
  }
`

export default ({ starship }) => {
  const { data, loading, error } = useQuery(ALL_STARSHIPS_QUERY, {
    variables: { first: 10, filter: { starshipClass: starship.starshipClass } },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error on getting starship</p>

  const {
    allStarships: { edges: relatedStarships },
  } = data

  const chartData =
    relatedStarships.length > 1
      ? compareStarship(starship, relatedStarships)
      : []

  return <RadarChart data={chartData} captions={radarCaptions} />
}
