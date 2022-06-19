import { fetchPrismicGlobals, prismicClient } from '../../utils/prismic'
import { Page } from '../../components'
import PublicationsContent from '../../layouts/Publications/PublicationsContents'

export default function PublicationsPage(props) {
  return (
    <Page {...props}>
      <PublicationsContent pubInfo={props.pubInfo} />
    </Page>
  )
}

export async function getStaticProps() {
  const id = 'publications'

  const [content, pubInfo, globals] = await Promise.all([
    prismicClient.getByUID('page', id),
    prismicClient.getAllByType('publications'),
    fetchPrismicGlobals(),
  ])

  return {
    props: {
      id,
      content, // must be named content
      pubInfo,
      ...globals,
    },
  }
}
