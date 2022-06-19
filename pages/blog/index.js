import { fetchPrismicGlobals, prismicClient } from '../../utils/prismic'
import { Page } from '../../components'
import BlogListContents from '../../layouts/Blog/BlogListContents'

export default function BlogPage(props) {
  return (
    <Page {...props}>
      <BlogListContents blogs={props.blogs} />
    </Page>
  )
}

export async function getStaticProps() {
  const id = 'blog'

  const [content, blogs, globals] = await Promise.all([
    prismicClient.getByUID('page', id),
    prismicClient.getAllByType('nference_blog'),
    fetchPrismicGlobals(),
  ])

  return {
    props: {
      id,
      content, // must be named content
      blogs,
      ...globals,
    },
  }
}
