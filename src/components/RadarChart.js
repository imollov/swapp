import React from 'react'
import PropTypes from 'prop-types'
import Base from 'react-svg-radar-chart'

import { createGlobalStyle } from 'styled-components'

const RadarChartGlobalStyles = createGlobalStyle`
  .caption {
    fill: ${props => props.theme.colors.primary};
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes[0]}px;
    word-wrap: break-word;

  }
  .shape {
    stroke: ${props => props.theme.colors.radarShape};
    fill: ${props => props.theme.colors.radarShape};
    fill-opacity: 0.4;
  }
  .scale {
    stroke: ${props => props.theme.colors.radarScale};
    stroke-width: 2;
  }
  .dot {
    fill: ${props => props.theme.colors.radarShape};
    stroke: ${props => props.theme.colors.radarShape};
    height: 1;
    width: 1;
    stroke-width: 3;
    r: 3
  }
`

const RadarChart = props => {
  return (
    <>
      <Base
        {...props}
        options={{
          dots: true,
          dotProps: () => ({
            className: 'dot',
          }),
          scales: 5,
        }}
      />
      <RadarChartGlobalStyles />
    </>
  )
}

RadarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  captions: PropTypes.object.isRequired,
}

export default RadarChart
