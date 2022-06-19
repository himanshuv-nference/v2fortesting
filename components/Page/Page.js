import React from 'react'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'

function Page(props) {
  const { children } = props
  const { content, mainMenu, footer } = props

  return (
    <>
      <Navbar menu={mainMenu} />
      <NextSeo
        title={content?.data?.seoTitle}
        description={content?.data?.seoDescription}
      />
      {children}
      {content?.data?.slices && (
        <SliceZone slices={content.data.slices} components={components} />
      )}
      <Footer data={footer} />
    </>
  )
}

Page.propTypes = {
  content: PropTypes.shape({
    data: PropTypes.shape({
      seoTitle: PropTypes.string.isRequired,
      seoDescription: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  theme: PropTypes.shape({}).isRequired,
  mainMenu: PropTypes.shape({}).isRequired,
  footer: PropTypes.shape({}).isRequired,
}

export default Page
