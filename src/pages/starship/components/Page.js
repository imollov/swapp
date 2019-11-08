import React from 'react'
import PropTypes from 'prop-types'
import { Tiles } from '@rebass/layout'
import { Flex, Box, Heading } from 'rebass/styled-components'

import ComparisonChart from './ComparisonChart'
import InfoCard from '../../../components/InfoCard'
import Divider from '../../../components/Divider'
import PageLayout from '../../../components/PageLayout'

const Page = ({ starship }) => {
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

Page.propTypes = {
  starship: PropTypes.object.isRequired,
}

export default Page
