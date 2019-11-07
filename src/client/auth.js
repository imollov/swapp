export default operation => {
  if (operation.operationName === 'signIn') return
  const token = localStorage.getItem('token')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  })
}
