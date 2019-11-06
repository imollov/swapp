import React from 'react'

import ImageCard from '../../components/ImageCard'
import ResponsiveList from '../../components/ResponsiveList'
import PageLayout from '../../components/PageLayout'

import personsData from '../../stories/data/persons'

const {
  data: {
    allPeople: { edges: persons },
  },
} = personsData

export default () => {
  return (
    <PageLayout>
      <ResponsiveList hasMore={true} columns={[1, null, 3]}>
        {persons.map(({ node: p }) => (
          <ImageCard
            key={p.name}
            img={p.image}
            title={p.name}
            minHeight={100}
          />
        ))}
      </ResponsiveList>
    </PageLayout>
  )
}
