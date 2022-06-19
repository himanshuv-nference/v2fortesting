import { fetchPrismicGlobals, prismicClient } from '../utils/prismic'
import { Page } from '../components'
import HomepageContents from '../layouts/Homepage/HomepageContents'

export default function Homepage(props) {
  return (
    <Page {...props}>
      <HomepageContents data={props.data} pubInfo={props.pubInfo} />
    </Page>
  )
}

export async function getStaticProps() {
  const [content, data, pubInfo, globals] = await Promise.all([
    prismicClient.getSingle('homepage'),
    prismicClient.getAllByType('homepage_carousel'),
    prismicClient.getAllByType('publications'),
    fetchPrismicGlobals(),
  ])

  return {
    props: {
      id: 'homepage',
      content, // must be named content
      data,
      pubInfo,
      ...globals,
    },
  }
}
