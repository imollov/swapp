import React from 'react'

import EpisodePreview from '../pages/episodes/components/Preview'
import EpisodeBanner from '../pages/episodes/components/Banner'
import EpisodeInfo from '../pages/episodes/components/Info'
import ImageCard from '../components/ImageCard'
import ResponsiveList from '../components/ResponsiveList'
import InfoCard from '../components/InfoCard'

import ThemeProvider from '../components/ThemeProvider'
import ThemedBox from './common/ThemedBox'

export default {
  title: 'Card',
}

const title = 'The Phantom Menance'
const subtitle = 'Star Wars: Episode I'
const desc =
  'Turmoli has engulfed the Galactic Republic. ' +
  'The taxation of trade routes to outlying star systems is in dispute. ' +
  'Hoping to resolve the matter with a blockade of deadly battleships, the greedy...'
const details = [['Director', 'George Lucas'], ['Release Date', '1999-05-19']]
const img =
  'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'

export const Preview = () => {
  return (
    <ThemeProvider>
      <ThemedBox width={256}>
        <EpisodePreview title={title} text={desc} img={img} />
      </ThemedBox>
    </ThemeProvider>
  )
}

export const Banner = () => {
  return (
    <ThemeProvider>
      <ThemedBox width={940}>
        <EpisodeBanner title={title} subtitle={subtitle} img={img} />
      </ThemedBox>
    </ThemeProvider>
  )
}

export const Info = () => {
  return (
    <ThemeProvider>
      <ThemedBox width={940}>
        <EpisodeInfo info={desc + desc + desc} details={details} />
      </ThemedBox>
    </ThemeProvider>
  )
}

const characterName = 'Han Solo'
const characterImg =
  'https://i.pinimg.com/originals/19/37/95/19379598fbb4338dd02e7ea8dde3ad63.jpg'
const characterDetails = [
  ['Weight', '80'],
  ['Height', '180'],
  ['Home world', 'Corellia'],
  ['Species', 'Human'],
]

const starshipName = 'Millennium Falcon'
const starshipImg =
  'https://cdn3.volusion.com/bmfcy.fjqhr/v/vspfiles/photos/BANSW219770-2.jpg?1533738074'

export const InfoWithImage = () => {
  return (
    <ThemeProvider>
      <ThemedBox width={470}>
        <InfoCard
          title={characterName}
          img={characterImg}
          data={characterDetails}
        />
      </ThemedBox>
    </ThemeProvider>
  )
}

export const List3Columns = () => {
  return (
    <ThemeProvider>
      <ThemedBox width={940}>
        <ResponsiveList hasMore={true}>
          <ImageCard img={characterImg} title={characterName} height={100} />
          <ImageCard img={characterImg} title={characterName} height={100} />
          <ImageCard img={characterImg} title={characterName} height={100} />
          <ImageCard img={characterImg} title={characterName} height={100} />
          <ImageCard img={characterImg} title={characterName} height={100} />
        </ResponsiveList>
      </ThemedBox>
    </ThemeProvider>
  )
}

export const List1Column = () => {
  return (
    <ThemeProvider>
      <ThemedBox width={470}>
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
      </ThemedBox>
    </ThemeProvider>
  )
}
