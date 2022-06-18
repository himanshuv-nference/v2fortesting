import { fetchPrismicGlobals, prismicClient } from '../utils/prismic'
import { Page } from '../components'
import HomepageContent from '../layouts/Homepage/HomepageContent'
import * as prismic from '@prismicio/client'

export default function Homepage(props) {
  return (
    <Page {...props}>
      <HomepageContent data={props.data} pubInfo={props.pubInfo} />
    </Page>
  )
}

export async function getStaticProps(context) {
  const [content, data, pubInfo, globals] = await Promise.all([
    prismicClient.getByType('homepage'),
    prismicClient.query(
      prismic.predicate.at('document.type', 'homepage_carousel'),
    ),
    prismicClient.query(prismic.predicate.at('document.type', 'publications')),
    fetchPrismicGlobals,
  ])

  return {
    props: {
      id: 'homepage',
      content, // must be named content
      data: data.results,
      pubInfo: pubInfo.results,
      ...globals,
    },
  }
}
