import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Page from './components/Page'
import Loading from '../../components/Loading'

const EPISODES_QUERY = gql`
  query AllEpisodesQuery($first: Int!) {
    allEpisodes(first: $first) {
      edges {
        node {
          id
          title
          episodeId
          openingCrawl
          image
        }
      }
      totalCount
    }
  }
`

export default () => {
  const { data, loading, error } = useQuery(EPISODES_QUERY, {
    variables: { first: 10 },
  })

  if (loading) return <Loading />
  if (error) return <p>Error on getting episodes</p>

  const {
    allEpisodes: { edges: episodes },
  } = data

  return <Page episodes={episodes} />
}
