import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'MeaPet',
  description: 'MeaPet 桌宠文档',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '桌面端', link: '/desktop/' },
      { text: '移动端', link: '/mobile/' }
    ],
    sidebar: {
      '/desktop/': [
        {
          text: '开始',
          items: [
            { text: '项目介绍', link: '/desktop/' },
            { text: '快速开始', link: '/desktop/quickstart' },
            { text: '下载安装', link: '/desktop/download' }
          ]
        },
        {
          text: '使用',
          items: [
            { text: '配置说明', link: '/desktop/config' },
            { text: '功能特性', link: '/desktop/features' },
            { text: '项目架构', link: '/desktop/architecture' },
            { text: '常见问题', link: '/desktop/faq' }
          ]
        }
      ],
      '/mobile/': [
        {
          text: '开始',
          items: [
            { text: '项目介绍', link: '/mobile/' },
            { text: '快速开始', link: '/mobile/quickstart' },
          ]
        },
        {
          text: '使用',
          items: [
            { text: '配置说明', link: '/mobile/config' },
            { text: '功能特性', link: '/mobile/features' },
            { text: '常见问题', link: '/mobile/faq' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/suan-11/mea-pet-public' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '多语言'
  }
})
