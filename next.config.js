const withTM = require('next-transpile-modules')(['nferx-core-ui']) // pass the modules you would like to see transpiled
const getClientEnvironment = require('./node_modules/nferx-core-ui/config/env')
const paths = require('./node_modules/nferx-core-ui/config/paths')

const publicPath = paths.servedPath
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = publicPath.slice(0, -1)
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl, '')

module.exports = withTM({
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reactStrictMode: true,
  basePath: '/nference-web',
  async rewrites() {
    return [
      {
        source: '/server-sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
  async redirects() {
    return []
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.DefinePlugin(env.stringified))

    return config
  },
})
