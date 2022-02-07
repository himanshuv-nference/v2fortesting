import React from 'react'
import TermsStyle from '../public/styles/termsStyle'
import { Typography as T } from '@material-ui/core'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-reactjs'

const apiEndpoint = 'https://nference.prismic.io/api/v2'
const accessToken =
  'MC5ZUi1ZbXhJQUFDd0FXY05N.FEXvv73vv73vv70L77-977-977-9bVlJeh8dfO-_vQUpMzEMYO-_ve-_ve-_vVfvv70JS--_vQg' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

export async function getStaticProps() {
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'terms_and_policy'),
  )
  let data = response.results.filter(
    (x) => x.data.name === 'Nference-Terms-of-us',
  )
  return {
    props: {
      info: data,
    },
  }
}

function Termsofuse({ info }) {
  const style = TermsStyle()

  return (
    <div>
      <T className={style.head}>Terms of Use</T>
      <T className={style.subHead}>NFERENCE, INC.</T>
      <T className={style.content}>
        <RichText render={info[0].data.content} />
      </T>
    </div>
  )
}

export default Termsofuse
