import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'dlabs env',
  description: 'A CLI tool for environment variable management',
  base: '/dlabs-env/',
  head: [['link', { rel: 'icon', href: '/dlabs.png' }]],
  themeConfig: {
    logo: '/dlabs.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is dlabs-env?', link: '/guide/introduction' },
          { text: 'Installation', link: '/guide/installation' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Commands Overview', link: '/reference/commands' },
          { text: 'Init Command', link: '/reference/commands/init' },
          { text: 'Status Command', link: '/reference/commands/status' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dscriptlabs/dlabs-env' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 dscriptlabs',
    },

    search: {
      provider: 'local',
    },
  },
})
