import React, { useState } from 'react'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Redirect } from 'react-router-dom'
import Page from './components/Page'

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`

export default () => {
  const client = useApolloClient()
  const [redirect, setRedirect] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn: { token } }) => {
      localStorage.setItem('token', token)
      client.writeData({ data: { authenticated: true } })
      setRedirect(true)
    },
    onError: error => {
      setErrorMsg(error.message.split(': ')[1])
    },
  })

  if (redirect) return <Redirect to="/" />

  return <Page signIn={signIn} errorMsg={errorMsg} />
}
