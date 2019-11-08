import React from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import AppBar from './AppBar'

export default props => {
  const client = useApolloClient()

  const logout = () => {
    localStorage.removeItem('token')
    client.writeData({ data: { authenticated: false } })
  }

  return <AppBar logout={logout} {...props} />
}
