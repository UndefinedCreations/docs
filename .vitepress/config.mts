import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Undefined Creations",
  description: "The documentation for all projects under Undefined Creations.",
  cleanUrls: true,
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
        },
        {
          text: 'Usage',
          collapsed: false,
          items: [
            { text: 'Command Executions', link: '/stellar/usage/command-executions' },
            { text: 'Custom Suggestions', link: '/stellar/usage/custom-suggestions' },
            { text: 'Command Requirements', link: '/stellar/usage/command-requirements' },
            { text: 'Command Information ', link: '/stellar/usage/command-information' },
          ]
        },
        {
          text: 'Arguments',
          collapsed: false,
          items: [
            { text: 'Literal Arguments', link: '/stellar/arguments/literal' },
            {
              text: 'Primitives',
              collapsed: true,
              items: [
                  { text: 'String', link: '/stellar/arguments/primitives/string' },
                  { text: 'Number', link: '/stellar/arguments/primitives/number' },
                  { text: 'Boolean', link: '/stellar/arguments/primitives/boolean' },
              ]
            },
            {
              text: 'Entity & Player',
              collapsed: true,
              items: [
                { text: 'Entity Selector', link: '/stellar/arguments/entities/entity' },
                { text: 'Entity Anchor', link: '/stellar/arguments/entities/entity-anchor' },
                { text: 'Game Mode', link: '/stellar/arguments/entities/game-mode' },
                { text: 'Game Profile', link: '/stellar/arguments/entities/game-profile' },
              ]
            },
            {
              text: 'Item',
              collapsed: true,
              items: [
                { text: 'Item Argument', link: '/stellar/arguments/items/item' },
                { text: 'Item Predicate', link: '/stellar/arguments/items/item-predicate' },
                { text: 'Item Slots', link: '/stellar/arguments/items/item-slots' },
              ]
            },
            {
              text: 'Block',
              collapsed: true,
              items: [
                { text: 'Block Data', link: '/stellar/arguments/block/block-data' },
              ]
            }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/undefinedcreation/' }
    ]
  }
})
