import React from 'react'

import Preview from './components/Preview'
import ResponsiveList from '../../components/ResponsiveList'
import PageLayout from '../../components/PageLayout'

import episodesData from '../../stories/data/episodes'

const {
  data: {
    allEpisodes: { edges: episodes },
  },
} = episodesData

const stripCrawl = text => `${text.slice(0, 200)}...`

export default () => {
  return (
    <PageLayout>
      <ResponsiveList columns={[1, null, 3]}>
        {episodes.map(({ node: e }) => {
          return (
            <Preview
              key={e.id}
              img={e.image}
              title={e.title}
              text={stripCrawl(e.openingCrawl)}
              linkTo={`/episode/${e.id}`}
              m={4}
            />
          )
        })}
      </ResponsiveList>
    </PageLayout>
  )
}
