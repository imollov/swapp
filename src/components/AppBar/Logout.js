import React from 'react'
import { Box } from 'rebass/styled-components'
import { withTheme } from 'styled-components'
import { FiLogOut } from 'react-icons/fi'

const Logout = props => {
  return (
    <Box {...props} variant="card" sx={{ cursor: 'pointer' }}>
      <FiLogOut
        color={props.theme.colors.link}
        style={{
          padding: 8,
          verticalAlign: 'middle',
          justifyContent: 'center',
        }}
      />
    </Box>
  )
}

export default withTheme(Logout)
