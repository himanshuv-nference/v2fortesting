// https://www.npmjs.com/package/next-sitemap
const url = 'https://nference.ai'
module.exports = {
  siteUrl: url,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${url}/server-sitemap.xml`],
  },
}
