import { defineConfig } from 'vitepress'

// 这是整个站点的“总控台”：站点名、导航栏、侧边栏、搜索都在这里配置。
// 改完保存，本地预览会自动热更新。
export default defineConfig({
  lang: 'zh-CN',
  title: '奕博的学习小站',
  description: '从零开始的大模型应用开发学习笔记：路线图、前置知识、项目复现与踩坑记录',

  // GitHub Pages 会把站点挂在仓库子路径 /my-wiki/ 下，
  // 所以必须告诉 VitePress“所有链接前面都加上 /my-wiki”，否则样式会全丢。
  base: '/my-wiki/',

  // 站点初期允许少量占位链接存在，避免一个死链卡住整站部署。
  // 等内容稳定后可改回 false，让构建帮我们抓死链。
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路线图', link: '/guide/' },
      { text: '前置知识', link: '/prereq/' },
      { text: '项目复现', link: '/projects/' },
      { text: '踩坑记录', link: '/pitfalls/' },
      { text: '术语表', link: '/glossary/' }
    ],

    sidebar: [
      {
        text: '学习路线',
        items: [{ text: '我的进阶路线图', link: '/guide/' }]
      },
      {
        text: '前置知识',
        items: [
          { text: '课程总览', link: '/prereq/' },
          { text: '01 · 命令行', link: '/prereq/01-command-line' },
          { text: '02 · Node.js 与 npm', link: '/prereq/02-node-and-npm' },
          { text: '03 · Git 与 GitHub', link: '/prereq/03-git-and-github' },
          { text: '04 · Markdown 写作', link: '/prereq/04-markdown' },
          { text: '05 · HTTP 与 API', link: '/prereq/05-http-and-api' },
          { text: '06 · Python 环境与 pip', link: '/prereq/06-python-env' }
        ]
      },
      {
        text: '项目复现',
        items: [{ text: '项目总览与候选卡片', link: '/projects/' }]
      },
      {
        text: '踩坑记录',
        items: [{ text: '踩坑记录', link: '/pitfalls/' }]
      },
      {
        text: '术语表',
        items: [{ text: '术语表', link: '/glossary/' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jlshdsdk/my-wiki' }
    ],

    // 站内搜索（本地索引，不需要外部服务）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文章', buttonAriaLabel: '搜索文章' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: {
      message: '用 VitePress 构建，GitHub Pages 托管，记录一条从零开始的学习之路。'
    }
  }
})
