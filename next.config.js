/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

console.log(assetPrefix, basePath)

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix,
}

module.exports = nextConfig
