import merge from 'lodash.merge'
import get from 'lodash.get'
import baseTheme from '../theme'

export default mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  })
