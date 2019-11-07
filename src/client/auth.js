export const requestAuth = operation => {
  if (operation.operationName === 'signIn') return
  const token = localStorage.getItem('token')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  })
}

export const authError = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(e => {
      if (e.extensions.code === 'FORBIDDEN') {
        localStorage.removeItem('token')
      }
    })
  }
}
