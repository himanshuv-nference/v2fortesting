import React from 'react'

const Sitemap = () => {}

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://nference.com/</loc>
  <lastmod>2021-11-18T05:45:52+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://nference.com/aboutus</loc>
  <lastmod>2021-11-18T05:45:52+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://nference.com/pharma</loc>
  <lastmod>2021-11-18T05:45:52+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://nference.com/medical</loc>
  <lastmod>2021-11-18T05:45:52+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://nference.com/publications</loc>
  <lastmod>2021-11-18T05:45:52+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://nference.com/news</loc>
  <lastmod>2021-11-18T05:45:52+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://nference.com/career</loc>
  <lastmod>2021-11-18T05:45:52+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://nference.com/publications/YWLqORIAAC8AzpJ7</loc>
  <lastmod>2021-11-18T05:45:52+00:00</lastmod>
  <priority>0.64</priority>
</url>


</urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap