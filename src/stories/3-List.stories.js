import React from 'react'

import ImageCard from '../components/ImageCard'
import ResponsiveList from '../components/ResponsiveList'

import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

import personsData from './data/persons'
import starshipsData from './data/starships'

export default {
  title: 'List',
}

const {
  data: {
    allPeople: { edges: persons },
  },
} = personsData

export const ThreeColumns = () => {
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

export const OneColumn = () => {
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
