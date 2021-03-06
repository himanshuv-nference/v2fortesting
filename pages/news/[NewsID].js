import { fetchPrismicGlobals, prismicClient } from '../../utils/prismic'
import { Page } from '../../components'
import NewsItemContents from '../../layouts/News/NewsItemContents'
import * as prismicH from '@prismicio/helpers'

export default function NewsListPage(props) {
  return (
    <Page {...props}>
      <NewsItemContents news={props.news} />
    </Page>
  )
}

export async function getStaticPaths() {
  const news = await prismicClient.getAllByType('news_room')
  const paths = news.map((news) => ({ params: { NewsID: news.id } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { NewsID: id } = context.params

  const [news, globals] = await Promise.all([
    prismicClient.getByID(id),
    fetchPrismicGlobals(),
  ])

  const content = {
    data: {
      seoTitle: 'nference | ' + prismicH.asText(news.data.title),
      seoDescription: prismicH.asText(news.data.description_richtext),
    },
  }

  return {
    props: {
      id,
      content, // must be named content
      news,
      ...globals,
    },
  }
}
