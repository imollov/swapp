import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'

import { Tiles } from '@rebass/layout'
import { Flex, Box, Heading } from 'rebass/styled-components'
import ComparisonChart from './components/ComparisonChart'
import InfoCard from '../../components/InfoCard'
import Divider from '../../components/Divider'
import PageLayout from '../../components/PageLayout'

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

  const stats = [
    { field: 'Class', value: starship.starshipClass },
    { field: 'Cost', value: starship.cost },
    { field: 'Crew', value: starship.crew },
    { field: 'Max Atmospheric Speed', value: starship.maxAtmosphericSpeed },
    { field: 'Hyperdrive Rating', value: starship.hyperdriveRating },
  ]

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
          <InfoCard img={starship.image} title={starship.name} data={stats} />
        </Box>
        <Box>
          <Heading variant="h3" color="subHeading" textAlign="center" my={3}>
            Compared to Starship Class Max
          </Heading>
          <Flex bg="black" justifyContent="center" py={4}>
            <ComparisonChart starship={starship} />
          </Flex>
        </Box>
      </Tiles>
    </PageLayout>
  )
}
