import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Undefined Creations",
  description: "The documentation for all projects under Undefined Creations.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stellar', link: '/stellar' }
    ],

    sidebar: {
      '/stellar/': [
        {
          // text: "Developer Communities"
          collapsed: false,
          items: [
            { text: 'Undefined Discord', link: 'https://discord.gg/hRGKAQ2ZAv' },
            { text: 'Stellar Github', link: 'https://github.com/undefinedcreation/stellar' }
          ]
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Stellar Setup', link: '/stellar/getting-started/stellar-setup' },
            { text: 'Creating a Simple Command', link: '/stellar/getting-started/creating-a-simple-command' },
            { text: 'Understanding Command Context', link: '/stellar/getting-started/understanding-command-context' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/undefinedcreation/' }
    ]
  }
})
