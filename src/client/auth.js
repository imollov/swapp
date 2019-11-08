export const requestAuth = operation => {
  if (operation.operationName === 'signIn') return
  const token = localStorage.getItem('token')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  })
}

export const authError = ({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ extensions: { code } }) => {
      if (code === 'FORBIDDEN' || code === 'UNAUTHENTICATED') {
        localStorage.removeItem('token')
      }
    })
  }
}
