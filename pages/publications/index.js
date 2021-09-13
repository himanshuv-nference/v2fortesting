import React, { useState, useEffect } from 'react'

import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'

import { Page } from '../../components'
import dataLoader from 'nferx-core-ui/src/utils/dataLoader'
import ChipSelect from 'nferx-core-ui/src/widgets/ChipSelect/ChipSelect.js'

const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken = '' // Don't checkin me to github

const Client = Prismic.client(apiEndpoint, { accessToken })

export async function getStaticProps(context) {
    const response = await Client.query(
      Prismic.Predicates.at('document.type', 'publications')
    )

    return {
        props: { pubData: response.results }
    }

}

function Publications(props) {
    const { pubData } = props
    return (
    <Page
      title={'Publications'}
      description={'Published papers'}
    >
      <div>
        <h1>All Publications</h1>
        {pubData.map((item, index) => (
        <div key={index}>
          <h4>{item.data.title[0].text}</h4>
          <div><b>Posted in </b>{item.data.published_in[0].text}</div>
          <div><b>Featured in </b>{item.data.featured_in[0].text}</div>
          <div><b>Cited by</b> </div>
          <p>{item.data.authors}</p>
          <p>{item.data.abstract}</p>
        </div>
        ))}
      </div>
    </Page>
    )

}

export default Publications
