import React from 'react'
import { Box } from 'rebass/styled-components'

import Banner from '../../components/Banner'
import Info from '../../components/Info'
import ResponsiveList from '../../../../components/ResponsiveList'
import ImageCard from '../../../../components/ImageCard'

const title = 'The Phantom Menance'
const subtitle = 'Star Wars: Episode I'
const desc =
  'Turmoli has engulfed the Galactic Republic. ' +
  'The taxation of trade routes to outlying star systems is in dispute. ' +
  'Hoping to resolve the matter with a blockade of deadly battleships, the greedy...'
const details = [['Director', 'George Lucas'], ['Release Date', '1999-05-19']]
const img =
  'https://images-na.ssl-images-amazon.com/images/I/81Vl2RQrZkL._SL1500_.jpg'

const characterName = 'Han Solo'
const characterImg =
  'https://i.pinimg.com/originals/19/37/95/19379598fbb4338dd02e7ea8dde3ad63.jpg'

export default props => {
  return (
    <Box variant="fitContent">
      <Banner title={title} subtitle={subtitle} img={img} />
      <Info info={desc + desc + desc} details={details} mt={4} />
      <ResponsiveList hasMore={true} mt={4}>
        <ImageCard img={characterImg} title={characterName} />
        <ImageCard img={characterImg} title={characterName} />
        <ImageCard img={characterImg} title={characterName} />
        <ImageCard img={characterImg} title={characterName} />
        <ImageCard img={characterImg} title={characterName} />
      </ResponsiveList>
    </Box>
  )
}
