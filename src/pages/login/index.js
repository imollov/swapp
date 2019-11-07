import React, { useState } from 'react'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Redirect } from 'react-router-dom'

import { Flex, Box } from 'rebass/styled-components'

import LoginForm from './components/LoginForm'
import Logo from '../../components/Logo'

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
  const [errorMsg, setErrorMsg] = useState()

  const [signIn, { loading }] = useMutation(SIGN_IN, {
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

  return (
    <Flex variant="content" justifyContent="center">
      <Box p={2} mt={5} bg="black" width={600}>
        <Box textAlign="center">
          <Logo variant="logo.large" />
        </Box>
        <Box variant="card" p={4} px={[4, null, 5]}>
          {loading ? (
            <p>Loadning...</p>
          ) : (
            <LoginForm onSubmit={signIn} errorMsg={errorMsg} />
          )}
        </Box>
      </Box>
    </Flex>
  )
}
