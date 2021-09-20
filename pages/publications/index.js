import React, { useState, useEffect } from 'react'

import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'

import { Page } from '../../components'
import dataLoader from 'nferx-core-ui/src/utils/dataLoader'
import ChipSelect from 'nferx-core-ui/src/widgets/ChipSelect/ChipSelect.js'
import dynamic from 'next/dynamic'
const ReactReadMoreReadLess = dynamic(
  () => {
    return import('react-read-more-read-less')
  },
  { ssr: false },
)
const Carousel = dynamic(
  () => {
    return import('react-material-ui-carousel')
  },
  { ssr: false },
)
const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken = '' // Don't checkin me to github

const Client = Prismic.client(apiEndpoint, { accessToken })

export async function getStaticProps(context) {
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'publications'),
  )

  return {
    props: { pubData: response.results },
  }
}

function Publications(props) {
  const { pubData } = props
  return (
    <Page title={'Publications'} description={'Published papers'}>
      <div>
        <h1>All Publications</h1>
        <Carousel
          indicators={true}
          animation={'slide'}
          timeout={800}
          autoPlay={true}
        >
          {pubData.map((item, index) => (
            <div key={index}>
              <h4>{item.data.title[0].text}</h4>
              <div>
                <b>Posted in </b>
                {item.data.published_in[0].text}
              </div>
              <div>
                <b>Featured in </b>
                {item.data.featured_in[0].text}
              </div>
              <div>
                <b>Cited by</b>{' '}
              </div>
              <p>{item.data.authors}</p>
              <p>{item.data.abstract}</p>
            </div>
          ))}
        </Carousel>
        <ReactReadMoreReadLess
          charLimit={120}
          readMoreText={'see all'}
          readLessText={'see less'}
        >
          Patient and data privacy are at the core of everything we and our
          partners do. Our algorithms for deidentification, including for
          challenging data modalities such as unstructured (free-text) data,
          have been certified as best-in-class. Our “data under glass” approach
          ensures that the data, even after deidentification, always remains at
          the center.
        </ReactReadMoreReadLess>
      </div>
    </Page>
  )
}

export default Publications
