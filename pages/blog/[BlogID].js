import { fetchPrismicGlobals, prismicClient } from '../../utils/prismic'
import { Page } from '../../components'
import BlogPostContents from '../../layouts/Blog/BlogPostContents'
import * as prismicH from '@prismicio/helpers'

export default function BlogListPage(props) {
  return (
    <Page {...props}>
      <BlogPostContents article={props.blog} />
    </Page>
  )
}

export async function getStaticPaths() {
  const blogs = await prismicClient.getAllByType('nference_blog')
  const paths = blogs.map((blog) => ({ params: { BlogID: blog.id } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { BlogID: id } = context.params

  const [blog, globals] = await Promise.all([
    prismicClient.getByID(id),
    fetchPrismicGlobals(),
  ])

  const content = {
    data: {
      seoTitle: 'nference | ' + prismicH.asText(blog.data.blog_title),
      seoDescription: prismicH.asText(blog.data.blog_brief_summary),
    },
  }

  return {
    props: {
      id,
      content, // must be named content
      blog,
      ...globals,
    },
  }
}
