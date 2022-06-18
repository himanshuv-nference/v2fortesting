import React from 'react'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import { useRouter } from 'next/router'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'

function Page(props) {
  const { children } = props
  const { content, mainMenu, footer } = props

  const router = useRouter()
  const showHeader = router.pathname !== '/covid' // TODO find a better way to do this

  return (
    <>
      {showHeader && <Navbar menu={mainMenu} />}
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
