import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Box, Button } from 'rebass/styled-components'
import { Tiles } from '@rebass/layout/styled-components'
import ImageCard from '../../components/ImageCard'
import PageLayout from '../../components/PageLayout'

const CHARACTERS_QUERY = gql`
  query AllCharactersQuery($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
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
`

export default () => {
  const { data, loading, error, fetchMore } = useQuery(CHARACTERS_QUERY, {
    variables: { first: 12 },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error on getting characters</p>

  const {
    allPeople: {
      edges: characters,
      pageInfo: { endCursor, hasNextPage },
    },
  } = data

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!allPeople.edges.length) {
          return prev
        }

        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges],
          },
        }
      },
    })
  }

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
