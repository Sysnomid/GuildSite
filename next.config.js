module.exports = {
    async redirects() {
      return [
        {
          source: '/invite',
          destination: 'https://discord.gg/xqUN8KY',
          permanent: true,

          source: '/github',
          destination: 'https://github.com/The-Developers-Guild',
          permanent: true,
        },
      ]
    },
  }
  