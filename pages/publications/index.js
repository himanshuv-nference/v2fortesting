import { fetchPrismicGlobals, prismicClient } from '../../utils/prismic'
import { Page } from '../../components'
import PublicationsContent from '../../layouts/Publications/PublicationsContents'
import * as prismic from '@prismicio/client'

export default function PublicationsPage(props) {
  return (
    <Page {...props}>
      <PublicationsContent pubInfo={props.pubInfo} />
    </Page>
  )
}

function isLastelement(arr) {
  let lastElement = arr[arr.length - 1]
  return lastElement === undefined
}

async function fetchAllPublications() {
  let publications = []
  let result = []
  let pageNumber = 1
  do {
    publications = await prismicClient.query(
      prismic.predicate.at('document.type', 'publications'),
      { pageSize: 2, page: pageNumber },
    )
    result = [...result, ...publications.results]
    pageNumber++
  } while (!isLastelement(publications.results))
  return result.filter((el) => {
    return el != null && el !== ''
  })
}

export async function getStaticProps() {
  const id = 'publications'

  const [content, pubInfo, globals] = await Promise.all([
    prismicClient.getByUID('page', id),
    fetchAllPublications(),
    fetchPrismicGlobals,
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
