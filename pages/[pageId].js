import { fetchPrismicGlobals, prismicClient } from '../utils/prismic'
import { Page } from '../components'

export default function DynamicPage(props) {
  return <Page {...props} />
}

export async function getStaticPaths() {
  const pages = await prismicClient.getAllByType('page')
  const ids = pages.map((page) => page.uid)
  const paths = ids.map((id) => ({ params: { pageId: id } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { pageId: id } = context.params

  const [content, globals] = await Promise.all([
    prismicClient.getByUID('page', id),
    fetchPrismicGlobals,
  ])

  return {
    props: {
      id,
      content, // must be named content
      ...globals,
    },
  }
}
