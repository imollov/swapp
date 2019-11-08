import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from 'rebass/styled-components'
import { Tiles } from '@rebass/layout/styled-components'
import ImageCard from '../../../components/ImageCard'
import PageLayout from '../../../components/PageLayout'

export const Page = ({ characters, loadMore, hasMore }) => {
  return (
    <PageLayout>
      <Tiles columns={[1, null, 3]}>
        {characters.map(({ node: p }) => (
          <ImageCard
            key={p.id}
            img={p.image}
            title={p.name}
            linkTo={`/character/${p.id}`}
            minHeight={100}
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
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMore: PropTypes.func,
  hasMore: PropTypes.bool,
}

Page.defaultProps = {
  loadMore: () => {},
  hasMore: false,
}

export default Page
