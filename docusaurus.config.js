// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GastroStock',
  tagline: 'Gestión eficiente de inventarios para restaurantes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://JSalasM5.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/GastroStock_LandingPage/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JSalasM5', // Usually your GitHub org/user name.
  projectName: 'GastroStock_LandingPage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/GastroStock_LandingPage/img/logo_letras.png',
      colorMode: {
        defaultMode: 'light',  
        disableSwitch: true,   
      },
      navbar: {
        title: 'GastroStock',
        logo: {
          alt: 'GastroStock Logo',
          src: 'img/logo.ico',
        },
        items: [
          /* {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /* {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          }, */
          {
            title: 'Nuestros enlaces',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/JSalasM5/GastroStock_LandingPage',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/gastro.stock?igsh=MXMybGN3M2ZvaWlrNw==',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@gastro.stock?_t=ZN-8uqWJ9NtP1S&_r=1',
              },
            ],
          },
          /* {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          }, */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GastroStock.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
