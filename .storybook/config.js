import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import '../src/index.css'
import '../src/fonts/starwars.ttf'

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module)

addDecorator(withKnobs)
