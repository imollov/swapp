import React from 'react'
import { Box } from 'rebass/styled-components'

import Preview from './components/Preview'
import ResponsiveList from '../../components/ResponsiveList'

import episodesData from '../../stories/data/episodes'

const {
  data: {
    allEpisodes: { edges: episodes },
  },
} = episodesData

const stripCrawl = text => `${text.slice(0, 200)}...`

export default () => {
  return (
    <Box variant="content">
      <ResponsiveList columns={[1, null, 3]}>
        {episodes.map(({ node: e }) => {
          return (
            <Preview
              key={e.id}
              img={e.image}
              title={e.title}
              text={stripCrawl(e.openingCrawl)}
              m={4}
            />
          )
        })}
      </ResponsiveList>
    </Box>
  )
}
