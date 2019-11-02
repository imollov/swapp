import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import Container from '../components/Container'
import Card from '../components/Card'
import CardImage from '../components/CardImage'
import CardTitle from '../components/CardTitle'
import CardText from '../components/CardText'
import CardBody from '../components/CardBody'

import styles from './Card.module.scss'

export default {
  title: 'Card'
}

const title = 'The Phantom Menance'
const desc =
  'Turmoli has engulfed the Galactic Republic. ' +
  'The taxation of trade routes to outlying star systems is in dispute. ' +
  'Hoping to resolve the matter with a blockade of deadly battleships, the greedy...'
const img =
  'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'

export const Horizontal = () => {
  withKnobs()
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <Container className={styles.container} theme={theme}>
      <div className={styles.cardVertical}>
        <Card theme={theme}>
          <CardImage imageSrc={img} />
          <CardBody>
            <CardTitle text={title} theme={theme} />
            <CardText text={desc} theme={theme} />
          </CardBody>
        </Card>
      </div>
    </Container>
  )
}

export const Vertical = () => {
  withKnobs()
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <Container className={styles.container} theme={theme}>
      <div className={styles.cardHorizontal}>
        <Card orientation="horizontal" theme={theme}>
          <CardImage imageSrc={img} stickTo="left" />
          <CardBody alignItems="center">
            <CardTitle text={title} size="large" theme={theme} />
          </CardBody>
        </Card>
      </div>
    </Container>
  )
}
