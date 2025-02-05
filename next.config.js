module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '/img/**/**/**',
      },
      {
        protocol: 'https',
        hostname: 's.iimg.su',
        pathname: '/s/**/**',
      },
    ],
  },
};
