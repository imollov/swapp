import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import EpisodePreview from '../pages/episodes/components/Preview'
import EpisodeBanner from '../pages/episodes/components/Banner'
import EpisodeInfo from '../pages/episodes/components/Info'
import ListItem from '../components/ListItem'

import { ThemeProvider } from 'styled-components'
import GlobalStyle, { theme } from '../globalStyles'

export default {
  title: 'Card',
}

const title = 'The Phantom Menance'
const subtitle = 'Star Wars: Episode I'
const desc =
  'Turmoli has engulfed the Galactic Republic. ' +
  'The taxation of trade routes to outlying star systems is in dispute. ' +
  'Hoping to resolve the matter with a blockade of deadly battleships, the greedy...'
const info = desc + desc + desc
const details = [['Director', 'George Lucas'], ['Release Date', '1999-05-19']]
const img =
  'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'

export const Preview = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <EpisodePreview title={title} text={desc} img={img} width={256} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export const Banner = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <EpisodeBanner title={title} subtitle={subtitle} img={img} width={720} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export const Info = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <EpisodeInfo info={info} details={details} width={720} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

const characterName = 'Han Solo'
const characterImg =
  'https://i.pinimg.com/originals/19/37/95/19379598fbb4338dd02e7ea8dde3ad63.jpg'

export const List = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <ListItem img={characterImg} title={characterName} width={256} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
