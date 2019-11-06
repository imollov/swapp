import React from 'react'
import { Box } from 'rebass/styled-components'

import ImageCard from '../../components/ImageCard'
import ResponsiveList from '../../components/ResponsiveList'

import personsData from '../../stories/data/persons'

const {
  data: {
    allPeople: { edges: persons },
  },
} = personsData

export default () => {
  return (
    <Box variant="content">
      <ResponsiveList hasMore={true} columns={[1, null, 3]}>
        {persons.map(({ node: p }) => {
          return (
            <ImageCard
              key={p.name}
              img={p.image}
              title={p.name}
              minHeight={100}
            />
          )
        })}
      </ResponsiveList>
    </Box>
  )
}
