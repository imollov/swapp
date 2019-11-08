import React from 'react'
import { withTheme } from 'styled-components'
import { Flex } from 'rebass/styled-components'
import { DotLoader } from 'react-spinners'

const Loading = props => {
  return (
    <Flex justifyContent="center" py={6}>
      <DotLoader
        size={120}
        sizeUnit={'px'}
        loading={true}
        color={props.theme.colors.primary}
        {...props}
      />
    </Flex>
  )
}

export default withTheme(Loading)
