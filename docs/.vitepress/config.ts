import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'dlabs-env',
  description: 'A CLI tool for environment variable management',
  base: '/dlabs-env/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'API',
        items: [{ text: 'API Reference', link: '/api/reference' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dscriptlabs/env' },
    ],
  },
})
