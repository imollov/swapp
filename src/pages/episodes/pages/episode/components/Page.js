import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from 'rebass/styled-components'
import { Tiles } from '@rebass/layout/styled-components'

import ImageCard from '../../../../../components/ImageCard'
import PageLayout from '../../../../../components/PageLayout'
import Banner from './Banner'
import Content from './Content'

const Page = ({ episode, characters, loadMore, hasMore }) => {
  const title = `Star Wars: Episode ${episode.episodeId}`
  const details = [
    { field: 'Director', value: episode.director },
    { field: 'Release Date', value: episode.releaseDate },
  ]

  return (
    <PageLayout variant="fitContent">
      <Banner img={episode.image} title={episode.title} subtitle={title} />
      <Content info={episode.openingCrawl} details={details} mt={4} />
      <Tiles columns={[1, null, 3]} mt={4}>
        {characters.map(({ node: p }) => (
          <ImageCard
            key={p.id}
            img={p.image}
            title={p.name}
            linkTo={`/character/${p.id}`}
            height={100}
          />
        ))}
      </Tiles>
      {hasMore && (
        <Box py={3} textAlign="center">
          <Button variant="secondary" onClick={loadMore}>
            Load More
          </Button>
        </Box>
      )}
    </PageLayout>
  )
}

Page.propTypes = {
  episode: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMore: PropTypes.func,
  hasMore: PropTypes.bool,
}

Page.defaultProps = {
  loadMore: () => {},
  hasMore: false,
}

export default Page
