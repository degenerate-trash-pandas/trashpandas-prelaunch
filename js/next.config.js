/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/legal/DTP_PrivacyPolicy.pdf',
        permanent: false,
      },
      {
        source: '/terms-of-use',
        destination: '/legal/DTP_TermsOfUse.pdf',
        permanent: false,
      }
    ]
  }
}
