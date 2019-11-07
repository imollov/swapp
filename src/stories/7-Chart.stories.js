import React from 'react'
import { Box } from 'rebass/styled-components'
import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

import RadarChart from '../components/RadarChart'

export default {
  title: 'Chart',
}

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

export const Radar = () => {
  return (
    <ThemeProvider>
      <ThemedBox textAlign="center">
        <Box width={400} bg="#000" mx="auto">
          <RadarChart data={data} captions={captions} />
        </Box>
      </ThemedBox>
    </ThemeProvider>
  )
}
