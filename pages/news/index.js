import { fetchPrismicGlobals, prismicClient } from '../../utils/prismic'
import { Page } from '../../components'
import NewsListContents from '../../layouts/News/NewsListContents'

export default function NewsItemPage(props) {
  return (
    <Page {...props}>
      <NewsListContents newsData={props.news} />
    </Page>
  )
}

export async function getStaticProps() {
  const id = 'news'

  const [content, news, globals] = await Promise.all([
    prismicClient.getByUID('page', id),
    prismicClient.getAllByType('news_room'),
    fetchPrismicGlobals,
  ])

  return {
    props: {
      id,
      content, // must be named content
      news,
      ...globals,
    },
  }
}
