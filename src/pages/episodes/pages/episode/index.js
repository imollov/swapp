import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'

import { Box, Button } from 'rebass/styled-components'
import { Tiles } from '@rebass/layout/styled-components'
import Banner from './components/Banner'
import Content from './components/Content'
import ImageCard from '../../../../components/ImageCard'
import PageLayout from '../../../../components/PageLayout'

const EPISODE_QUERY = gql`
  query EpisodeQuery($id: ID!, $first: Int!, $after: String) {
    episode(id: $id) {
      id
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people(first: $first, after: $after) {
        edges {
          node {
            id
            name
            image
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`

export default () => {
  const { episodeId } = useParams()
  const { data, loading, error, fetchMore } = useQuery(EPISODE_QUERY, {
    variables: { id: episodeId, first: 5 },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error on getting episodes</p>

  const { episode } = data

  const {
    people: {
      edges: characters,
      pageInfo: { hasNextPage, endCursor },
    },
  } = episode

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        if (!episode.people.edges.length) {
          return prev
        }

        return {
          episode: {
            ...episode,
            people: {
              ...episode.people,
              edges: [...prev.episode.people.edges, ...episode.people.edges],
            },
          },
        }
      },
    })
  }

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
      {hasNextPage && (
        <Box py={3} textAlign="center">
          <Button variant="secondary" onClick={loadMoreCharacters}>
            Load More
          </Button>
        </Box>
      )}
    </PageLayout>
  )
}
