import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Page from './components/Page'

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
      edges: allCharacters,
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
    <Page
      characters={allCharacters}
      loadMore={loadMoreCharacters}
      hasMore={hasNextPage}
    />
  )
}
