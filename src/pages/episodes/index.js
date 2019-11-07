import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Tiles } from '@rebass/layout/styled-components'
import Preview from './components/Preview'
import PageLayout from '../../components/PageLayout'

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

const stripCrawl = text => `${text.slice(0, 200)}...`

export default () => {
  const { data, loading, error } = useQuery(EPISODES_QUERY, {
    variables: { first: 10 },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error on getting episodes</p>

  const {
    allEpisodes: { edges: episodes },
  } = data

  return (
    <PageLayout>
      <Tiles columns={[1, null, 3]}>
        {episodes.map(({ node: e }) => {
          return (
            <Preview
              key={e.id}
              img={e.image}
              title={e.title}
              text={stripCrawl(e.openingCrawl)}
              linkTo={`/episode/${e.id}`}
              m={4}
            />
          )
        })}
      </Tiles>
    </PageLayout>
  )
}
