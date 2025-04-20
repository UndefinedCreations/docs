import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Undefined Creations",
  description: "The documentation for all projects under Undefined Creations.",
  cleanUrls: true,
  ignoreDeadLinks: true,
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  themeConfig: {
    logo: "/logo.png",
    head: [["link", { rel: "icon", sizes: "32x32", href: "/favicon.png" }]],
    editLink: {
      pattern: 'https://github.com/UndefinedCreations/docs/blob/main/:path'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stellar', link: '/stellar' },
      { text: 'Gradle Plugins', link: '/gradle-plugins' }
    ],
    sidebar: {
      '/stellar/': [
        {
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
            { text: 'Command Context & Tree', link: '/stellar/getting-started/context-tree' },
            { text: 'Comparison to similar APIs', link: '/stellar/getting-started/comparisons' },
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
            { text: 'Command Unregistering ', link: '/stellar/usage/command-unregistering' },
          ]
        },
        {
          text: 'Arguments',
          collapsed: false,
          items: [
            { text: 'Literal Arguments', link: '/stellar/arguments/literal' },
            {
              text: 'Basic',
              collapsed: true,
              items: [
                  { text: 'String', link: '/stellar/arguments/basic/string' },
                  { text: 'Number', link: '/stellar/arguments/basic/number' },
                  { text: 'Boolean', link: '/stellar/arguments/basic/boolean' },
              ]
            },
            {
              text: 'List',
              collapsed: true,
              items: [
                { text: 'List', link: '/stellar/arguments/list/list' },
                { text: 'Enum', link: '/stellar/arguments/list/enum' },
                { text: 'Custom', link: '/stellar/arguments/list/custom' },
                { text: 'Online Players', link: '/stellar/arguments/list/online-players' },
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
              text: 'World',
              collapsed: true,
              items: [
                { text: 'Location', link: '/stellar/arguments/world/location' },
                { text: 'Particle', link: '/stellar/arguments/world/particle' },
                { text: 'Environment', link: '/stellar/arguments/world/environment' },
                { text: 'Height Map', link: '/stellar/arguments/world/height-map' },
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
                { text: 'Block Predicate', link: '/stellar/arguments/block/block-predicate' },
              ]
            },
            {
              text: 'Miscellaneous',
              collapsed: true,
              items: [
                { text: 'UUID', link: '/stellar/arguments/misc/uuid' },
                { text: 'NamespacedKey', link: '/stellar/arguments/misc/key' },
              ]
            },
            {
              text: 'Math',
              collapsed: true,
              items: [
                  { text: 'Angle', link: '/stellar/arguments/math/angle' },
                  { text: 'Axis', link: '/stellar/arguments/math/axis' },
                  { text: 'Operation', link: '/stellar/arguments/math/operation' },
                  { text: 'Range', link: '/stellar/arguments/math/range' },
                  { text: 'Rotation', link: '/stellar/arguments/math/rotation' },
                  { text: 'Time', link: '/stellar/arguments/math/time' },
              ]
            },
            {
              text: 'Text',
              collapsed: true,
              items: [
                { text: 'Color', link: '/stellar/arguments/text/color' },
                { text: 'Component', link: '/stellar/arguments/text/component' },
                { text: 'Message', link: '/stellar/arguments/text/message' },
                { text: 'Style', link: '/stellar/arguments/text/style' },
              ]
            },
            {
              text: 'Scoreboard',
              collapsed: true,
              items: [
                { text: 'Display Slot', link: '/stellar/arguments/scoreboard/display-slot' },
                { text: 'Objective', link: '/stellar/arguments/scoreboard/objective' },
                { text: 'Objective Criteria', link: '/stellar/arguments/scoreboard/objective-criteria' },
                { text: 'Score Holders', link: '/stellar/arguments/scoreboard/score-holders' },
                { text: 'Team', link: '/stellar/arguments/scoreboard/team' },
              ]
            },
            {
              text: 'Structure',
              collapsed: true,
              items: [
                { text: 'Loot Table', link: '/stellar/arguments/structure/loot-table' },
                { text: 'Mirror', link: '/stellar/arguments/structure/mirror' },
                { text: 'Structure Rotation', link: '/stellar/arguments/structure/structure-rotation' },
              ]
            },
          ]
        }
      ],
      '/gradle-plugins': [
        {
          collapsed: false,
          items: [
            { text: 'Undefined Discord', link: 'https://discord.undefinedcreations.com/' },
            { text: 'GitHub', link: 'https://github.undefinedcreations.com/' }
          ]
        },
        {
          text: 'Plugins',
          collapsed: false,
          items: [
            { text: 'Gradle Plugins', link: '/gradle-plugins/' },
            { text: 'Undefined Remapper', link: '/gradle-plugins/remapper' },
            { text: 'Undefined Run Server', link: '/gradle-plugins/run-server' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.undefinedcreations.com' },
      { icon: 'discord', link: 'https://discord.undefinedcreation.com' }
    ]
  }
})
