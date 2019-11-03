import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import EpisodePreview from '../pages/episodes/components/Preview'
import EpisodeBanner from '../pages/episodes/components/Banner'
import EpisodeInfo from '../pages/episodes/components/Info'
import ImageCard from '../components/ImageCard'
import ResponsiveList from '../components/ResponsiveList'
import { Box } from 'rebass/styled-components'

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

const starshipName = 'Millennium Falcon'
const starshipImg =
  'https://cdn3.volusion.com/bmfcy.fjqhr/v/vspfiles/photos/BANSW219770-2.jpg?1533738074'

const Container = ({ maxWidth, children, ...rest }) => (
  <Box {...rest} bg="background">
    <Box maxWidth={maxWidth} m="auto" p="5">
      {children}
    </Box>
  </Box>
)

export const List3Columns = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <Container maxWidth={940}>
        <ResponsiveList hasMore={true}>
          <ImageCard img={characterImg} title={characterName} height={100} />
          <ImageCard img={characterImg} title={characterName} height={100} />
          <ImageCard img={characterImg} title={characterName} height={100} />
          <ImageCard img={characterImg} title={characterName} height={100} />
          <ImageCard img={characterImg} title={characterName} height={100} />
        </ResponsiveList>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export const List1Column = () => {
  withKnobs()
  const mode = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <ThemeProvider theme={{ ...theme(mode) }}>
      <Container maxWidth={470}>
        <ResponsiveList maxColumns={1}>
          <ImageCard
            variant="compact"
            img={starshipImg}
            title={starshipName}
            height={60}
          />
          <ImageCard
            variant="compact"
            img={starshipImg}
            title={starshipName}
            height={60}
          />
          <ImageCard
            variant="compact"
            img={starshipImg}
            title={starshipName}
            height={60}
          />
        </ResponsiveList>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}
