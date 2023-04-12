/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
}

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  nextConfig.basePath = `/${repo}`
}

module.exports = nextConfig
