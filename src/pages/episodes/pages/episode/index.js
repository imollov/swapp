import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'
import Page from './components/Page'
import Loading from '../../../../components/Loading'

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

  if (loading) return <Loading />
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

  return (
    <Page
      episode={episode}
      characters={characters}
      loadMore={loadMoreCharacters}
      hasMoreCharacters={hasNextPage}
    />
  )
}
