import React from 'react'
import PropTypes from 'prop-types'
import { Tiles } from '@rebass/layout/styled-components'

import Preview from './Preview'
import PageLayout from '../../../components/PageLayout'
import stripCrawl from '../../../utils/stripCrawl'

const Page = ({ episodes }) => {
  return (
    <PageLayout>
      <Tiles columns={[1, null, 3]}>
        {episodes.map(({ node: e }) => (
          <Preview
            key={e.id}
            img={e.image}
            title={e.title}
            text={stripCrawl(e.openingCrawl)}
            linkTo={`/episode/${e.id}`}
            m={4}
          />
        ))}
      </Tiles>
    </PageLayout>
  )
}

Page.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Page
