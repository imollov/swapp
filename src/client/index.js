import ApolloClient from 'apollo-boost'
import { typeDefs } from './local'
import { requestAuth, authError } from './auth'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  typeDefs,
  request: requestAuth,
  onError: authError,
})

client.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
})

export default client
