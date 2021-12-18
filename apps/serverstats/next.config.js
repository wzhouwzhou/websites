const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co'],
  },
  redirects: async () => {
    return [
      {
        source: '/github',
        destination: 'https://github.com/diced/ServerStats',
        permanent: true,
      },
      {
        source: '/docs',
        destination: 'https://github.com/diced/ServerStats/wiki/Getting-Started',
        permanent: true,
      },
    ];
  }
});
