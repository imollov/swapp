import { Input } from '@rebass/forms/styled-components'

import styled from 'styled-components'

const StyledInput = styled(Input)`
  font-size: ${props => props.theme.fontSizes[0]}px;
  color: ${props => props.theme.colors.inputColor};
  border: 1px solid ${props => props.theme.colors.inputBorder};
  background-color: ${props => props.theme.colors.inputBg};
  padding: ${props => `${props.theme.space[2]}px ${props.theme.space[3]}px`};
`

export default StyledInput
