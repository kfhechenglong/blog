// const other = require('./config-router/other')
module.exports = {
  title: '绝对零度随笔',
  description: 'JavaScript html css Vue 前端开发 知识库',
  base: '/blog/',
  head: [
    // 添加百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?323adbb342c132bcdae1007fda9b6068";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
        `
    ],
    ['meta', { name: '前端开发', content: '前端开发知识库'}],
    ['meta', { name: 'JavaScript', content: 'JavaScript Vue'}],
    [
      'link',
      { rel: 'icon', href: 'logo.png' }
    ]
  ],
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置l
      locale: 'zh',
      // autoCreateIssue: true,
      owner: 'kfhechenglong',
      repo: 'blog',
      clientId: 'ec756780613db3fdc14c',
      clientSecret: 'a15ed8578956c3b5fca0e1b5cf5ef01bd262e5b7',
    },
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: false, // 默认值：false
    lastUpdated: '上次更新时间', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'kfhechenglong/blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue', link: '/vue/vue2/vue-keep-live' },
      // { text: 'Pinia', link: '/Pinia/' },
      { text: 'JavaScript', link: '/javascript/var-let-const' },
      {
        text: '更多',
        ariaLabel: '更多内容',
        items: [
          { text: '设计模式与算法', link: '/front-concept/design-mode/single' },
          { text: 'node', link: '/node/inquirer/' },
          { text: '杂项', link: '/other/前端安全/xss/' },
          { text: '2022', link: '/2022' }
        ]
      },
      { 
        text: '外网链接', 
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/cheng521521' },
          { text: '掘金', link: 'https://juejin.cn/user/1750078239821454' }
        ]
      }
    ],
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'kfhechenglong/blog',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助改善此页面！',
    sidebar: {
      '/javascript/': [
        {
          title: 'JavaScript基础',
          sidebarDepth: 3,
          collapsable: false,
          children: [
            {
              title: '变量声明',
              path: '/javascript/var-let-const'
            },
            {
              title: '原型链',
              path: '/javascript/prototype'
            },
            'extend',
            'duck',
            'javascript-inherit',
            'this',
            'call-apply',
            {
              title: '理解JavaScript的执行上下文',
              path: '/javascript/context'
            },
          ]
        }
      ],
      '/front-concept/': [
        {
          title: '设计模式开发与实践',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            'design-mode/single',
            'design-mode/2.策略模式/',
            'design-mode/3.代理模式/',
            'design-mode/4.迭代器模式/',
            'design-mode/5.发布订阅模式/',
            'design-mode/6.命令模式/',
            'design-mode/7.模板模式/',
          ]
        },
        {
          title: '前端算法',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            'algorithm/1.stack/',
            'algorithm/7.队列/queue',
            'algorithm/4.字典/',
            'algorithm/5.散列表/',
            'algorithm/6.递归/',
            'algorithm/8.指针思想/'
          ]
        }
      ],
      // '/Pinia/': [
      //   {
      //     title: 'Pinia',
      //     sidebarDepth: 2,
      //     collapsable: false,
      //     children: [
      //       '核心概念/',
      //       '核心概念/Getters',
      //       '核心概念/Actions',
      //       '核心概念/Plugins',
      //       '操作指引/'
      //     ]
      //   }
      // ],
      '/node/': [
        {
          title: 'node',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            'inquirer/',
            'node-commander/',
            'cli/'
          ]
        }
      ],
      '/vue/': [
        {
          title: 'Vue2',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            'vue2/vue-keep-live',
            'vue2/vue-router-authority'
          ]
        },
        {
          title: 'Vue3',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            'vue3/vue核心原理/图解vue3.0编译器核心原理',
            'vue3/antd实现table内容超出自动tooltip',
            'vue3/vue3.0+tsx+v-slots'
          ]
        },
        {
          title: 'Pinia',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            {
              title: '核心概念',
              path: '/vue/Pinia/核心概念/'
            },
            {
              title: 'Getters',
              path: '/vue/Pinia/核心概念/Getters'
            },
            {
              title: 'Actions',
              path: '/vue/Pinia/核心概念/Actions'
            },
            {
              title: 'Plugins',
              path: '/vue/Pinia/核心概念/Plugins'
            },
            {
              title: '操作指引',
              path: '/vue/Pinia/操作指引/'
            }
          ]
        }
      ],
      '/other/': [
        {
          title: '杂项',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            '前端安全/xss/',
            'fullCalendar/',
            'upload-files/',
            '工具/wx-pc-dev'
          ]
        }
      ]
      // {
      //   title: '面试',
      //   sidebarDepth: 1,
      //   collapsable: false,
      //   children: [
      //     {
      //       title: '1.真值相等',
      //       path: '/面试/truth-value/'
      //     },
      //     {
      //       title: '2.Vue类',
      //       path: '/面试/vue/'
      //     },
      //   ]
      // },
      // {
      //   title: 'git篇',
      //   sidebarDepth: 1,
      //   collapsable: false,
      //   children: [
      //     {
      //       title: 'git emoji指南',
      //       path: '/git篇/git emoji指南'
      //     },
      //   ]
      // },
    }
  }
}