module.exports = {
  async redirects() {
    return [
      {
        source: '/aboutus',
        destination: '/about-us',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'images.unsplash.com', // used for mock data during dev with prismic slicemachine
      'images.prismic.io',
      'nference.cdn.prismic.io',
    ],
  },
}
