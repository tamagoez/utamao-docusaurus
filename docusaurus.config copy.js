module.exports = {
  title: 'UtamaoNext',
  tagline: '先を行くうたまお',
  url: 'https://utamao-docusaurus.vercel.app/',
  baseUrl: '/',
  baseUrlIssueBanner: true, // Defaults to `true`
  favicon: 'img/favicon.ico',
  organizationName: 'utamao', // Usually your GitHub org/user name.
  projectName: 'utamao-docusaurus', // Usually your repo name.
  onBrokenLinks: 'warn',
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-R6L3WQW4KB',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
      },
    navbar: {
      title: 'UtamaoNext',
      logo: {
        alt: 'UtamaoNext',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'wiki/home',
          activeBasePath: 'wiki',
          label: 'Wiki',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'news/home', label: 'News', position: 'left'},
        {to: 'futures/home', label: 'Futures', position: 'left'},
        {
          href: 'https://utamake.minecraftr.us',
          label: '(UtamakePages)',
          position: 'right',
        },
        {
          href: 'https://github.com/tabascoes/utamao-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: '(UtamakePages)',
              href: 'https://utamake.minecraftr.us/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tabascoes/utamao-docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Utamao, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tabascoes/utamao-docusaurus/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tabascoes/utamao-docusaurus/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        editUrl: "https://github.com/tabascoes/utamao-docusaurus/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./wiki/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'news',
        path: 'news',
        routeBasePath: 'news',
        editUrl: "https://github.com/tabascoes/utamao-docusaurus/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./news/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'futures',
        path: 'futures',
        routeBasePath: 'futures',
        editUrl: "https://github.com/tabascoes/utamao-docusaurus/edit/main",
        editCurrentVersion: true,
        sidebarPath: require.resolve('./futures/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/static/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/static/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
};
