import React from 'react'

import EpisodePreview from '../pages/episodes/components/Preview'
import EpisodeBanner from '../pages/episodes/components/Banner'
import EpisodeInfo from '../pages/episodes/components/Info'
import ImageCard from '../components/ImageCard'
import ResponsiveList from '../components/ResponsiveList'
import InfoCard from '../components/InfoCard'

import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

import episodesData from './data/episodes.json'
import personsData from './data/persons'
import starshipsData from './data/starships'

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
      <ThemedBox width={256}>
        <EpisodePreview
          title={episode1.title}
          text={episode1.openingCrawl}
          img={episode1.image}
        />
      </ThemedBox>
    </ThemeProvider>
  )
}

export const Banner = () => {
  const title = `Star Wars: Episode ${episode1.episodeId}`
  return (
    <ThemeProvider>
      <ThemedBox width={940}>
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
    ['Director', episode1.director],
    ['Release Date', episode1.releaseDate],
  ]
  return (
    <ThemeProvider>
      <ThemedBox width={940}>
        <EpisodeInfo info={episode1.openingCrawl} details={details} />
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
    ['Height', person.height],
    ['Weight', person.mass],
    ['Home world', person.homeworld.name],
    ['Species', person.species.name],
  ]
  return (
    <ThemeProvider>
      <ThemedBox width={470}>
        <InfoCard title={person.name} img={person.image} data={personDetails} />
      </ThemedBox>
    </ThemeProvider>
  )
}

export const List3Columns = () => {
  return (
    <ThemeProvider>
      <ThemedBox width={940}>
        <ResponsiveList hasMore={true}>
          {persons.map(({ node: p }) => (
            <ImageCard img={p.image} title={p.name} height={100} />
          ))}
        </ResponsiveList>
      </ThemedBox>
    </ThemeProvider>
  )
}

const {
  data: {
    allStarships: { edges },
  },
} = starshipsData
const starships = edges.slice(0, 4)

export const List1Column = () => {
  return (
    <ThemeProvider>
      <ThemedBox width={470}>
        <ResponsiveList maxColumns={1}>
          {starships.map(({ node: s }) => (
            <ImageCard
              variant="compact"
              img={s.image}
              title={s.name}
              height={60}
            />
          ))}
        </ResponsiveList>
      </ThemedBox>
    </ThemeProvider>
  )
}
