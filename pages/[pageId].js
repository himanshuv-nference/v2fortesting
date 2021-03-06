import { fetchPrismicGlobals, prismicClient } from '../utils/prismic'
import { Page } from '../components'
import PharmaContents from '../layouts/Pharma/PharmaContents'
import MedicalContents from '../layouts/Medical/MedicalContents'
import CareersContents from '../layouts/Career/CareersContents'
import AboutUsContents from '../layouts/AboutUs/AboutUsContents'

export default function DynamicPage(props) {
  return (
    <Page {...props}>
      {props.id === 'pharma' && <PharmaContents />}
      {props.id === 'about-us' && <AboutUsContents />}
      {props.id === 'medical' && <MedicalContents />}
      {props.id === 'careers' && <CareersContents />}
    </Page>
  )
}

export async function getStaticPaths() {
  const excludedPages = new Set(['news', 'publications', 'blog'])
  const pages = await prismicClient.getAllByType('page')
  const ids = pages.map((page) => page.uid)
  const paths = ids
    .filter((id) => !excludedPages.has(id))
    .map((id) => ({ params: { pageId: id } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { pageId: id } = context.params

  const [content, globals] = await Promise.all([
    prismicClient.getByUID('page', id),
    fetchPrismicGlobals(),
  ])

  return {
    props: {
      id,
      content, // must be named content
      ...globals,
    },
  }
}
