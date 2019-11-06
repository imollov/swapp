import React from 'react'

import Banner from './components/Banner'
import Content from './components/Content'
import ResponsiveList from '../../../../components/ResponsiveList'
import ImageCard from '../../../../components/ImageCard'
import PageLayout from '../../../../components/PageLayout'

import episodesData from '../../../../stories/data/episodes'
import personsData from '../../../../stories/data/persons'

const {
  data: {
    allEpisodes: {
      edges: {
        3: { node: episode1 },
      },
    },
  },
} = episodesData

let {
  data: {
    allPeople: { edges: persons },
  },
} = personsData
persons = persons.slice(0, 5)

export default () => {
  const title = `Star Wars: Episode ${episode1.episodeId}`
  const details = [
    { field: 'Director', value: episode1.director },
    { field: 'Release Date', value: episode1.releaseDate },
  ]
  return (
    <PageLayout variant="fitContent">
      <Banner img={episode1.image} title={episode1.title} subtitle={title} />
      <Content info={episode1.openingCrawl} details={details} mt={4} />
      <ResponsiveList columns={[1, null, 3]} hasMore={true} mt={4}>
        {persons.map(({ node: p }) => (
          <ImageCard
            key={p.name}
            img={p.image}
            title={p.name}
            linkTo={`/character/${p.id}`}
            height={100}
          />
        ))}
      </ResponsiveList>
    </PageLayout>
  )
}
