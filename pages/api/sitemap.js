import { getServerSideSitemap } from 'next-sitemap'

export default async function sitemap(req, res) {
  const fields = []

  return getServerSideSitemap({ res }, fields)
}
