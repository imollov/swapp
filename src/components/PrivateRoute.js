import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`

export default props => {
  const { data } = useQuery(AUTHENTICATED_QUERY)
  return data.authenticated ? <Route {...props} /> : <Redirect to="/login" />
}
