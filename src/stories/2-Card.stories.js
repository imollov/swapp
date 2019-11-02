import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import EpisodeCard from '../pages/episodes/components/EpisodeCard'
import EpisodeBanner from '../pages/episodes/components/EpisodeBanner'

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
const img =
  'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'

export const Preview = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <EpisodeCard title={title} text={desc} img={img} width={256} />
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
