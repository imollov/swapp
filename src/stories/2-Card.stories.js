import React from 'react'

import EpisodePreview from '../pages/episodes/components/Preview'
import EpisodeBanner from '../pages/episodes/pages/episode/components/Banner'
import EpisodeContent from '../pages/episodes/pages/episode/components/Content'
import InfoCard from '../components/InfoCard'

import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

import episodesData from './data/episodes.json'
import personsData from './data/persons'

export default {
  title: 'Card',
}

const {
  data: {
    allEpisodes: {
      edges: {
        3: { node: episode1 },
      },
    },
  },
} = episodesData

export const Preview = () => {
  return (
    <ThemeProvider>
      <ThemedBox>
        <EpisodePreview
          title={episode1.title}
          text={episode1.openingCrawl}
          img={episode1.image}
          linkTo={'/'}
          maxWidth={256}
          m="auto"
        />
      </ThemedBox>
    </ThemeProvider>
  )
}

export const Banner = () => {
  const title = `Star Wars: Episode ${episode1.episodeId}`
  return (
    <ThemeProvider>
      <ThemedBox maxWidth={940}>
        <EpisodeBanner
          title={episode1.title}
          subtitle={title}
          img={episode1.image}
        />
      </ThemedBox>
    </ThemeProvider>
  )
}

export const Info = () => {
  const details = [
    { field: 'Director', value: episode1.director },
    { field: 'Release Date', value: episode1.releaseDate },
  ]
  return (
    <ThemeProvider>
      <ThemedBox maxWidth={940}>
        <EpisodeContent info={episode1.openingCrawl} details={details} />
      </ThemedBox>
    </ThemeProvider>
  )
}

const {
  data: {
    allPeople: { edges: persons },
  },
} = personsData

export const InfoWithImage = () => {
  const {
    5: { node: person },
  } = persons
  const personDetails = [
    { field: 'Height', value: person.height },
    { field: 'Weight', value: person.mass },
    { field: 'Home world', value: person.homeworld.name },
    { field: 'Species', value: person.species.name },
  ]
  return (
    <ThemeProvider>
      <ThemedBox maxWidth={470}>
        <InfoCard title={person.name} img={person.image} data={personDetails} />
      </ThemedBox>
    </ThemeProvider>
  )
}
