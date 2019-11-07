import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import RadarChart from '../../../components/RadarChart'

const radarChartData = [
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
          maxAtmosphericSpeed
          maxMLPerHour
          hyperdriveRating
          crew
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

  console.log(data)

  // const { allStarships: { edges: relatedStarships }}

  return <RadarChart data={radarChartData} captions={captions} />
}
