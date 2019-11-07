import ApolloClient from 'apollo-boost'
import { typeDefs } from './local'
import authInterceptor from './auth'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  typeDefs,
  request: authInterceptor,
  // onError: () => {}, // todo: redirect to login page when session expires
})

client.writeData({
  data: {
    authenticated: !!localStorage.getItem('token'),
  },
})

export default client
