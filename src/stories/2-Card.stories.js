import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select } from '@storybook/addon-knobs'
import styles from './Card.module.scss'

import Card from '../components/Card'
import { Container, Row } from 'reactstrap'

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

export const Themed = () => {
  withKnobs()
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')
  return (
    <Container className={`${styles[theme]} ${styles.container}`}>
      <Row>
        <Card title={title} text={desc} img={img} className={styles.card} />
      </Row>
    </Container>
  )
}

export const Behaviour = () => {
  withKnobs()
  const theme = select('Theme', { dark: 'dark', light: 'light' }, 'dark')

  const onClick = e => action('clicked')(e.target.className)

  return (
    <Container className={`${styles[theme]} ${styles.container}`}>
      <Row>
        <Card
          title={title}
          text={desc}
          img={img}
          className={styles.card}
          onClick={onClick}
        />
      </Row>
    </Container>
  )
}
