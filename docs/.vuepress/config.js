const other = require('./config-router/other')
module.exports = {
  title: '绝对零度随笔',
  description: 'JavaScript html css Vue',
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
    [
      'link',
      { rel: 'icon', href: 'logo.png' }
    ]
  ],
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

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'kfhechenglong/blog',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      {
        title: '介绍',
        sidebarDepth: 1,
        path: '/'
      },
      {
        title: '面向对象',
        sidebarDepth: 1,
        collapsable: false,
        path: '/javascript/clone',
        children: [
          {
            title: '1.对象克隆',
            path: '/javascript/clone'
          },
          {
            title: '2.鸭子类型',
            path: '/javascript/duck'
          },
          {
            title: '3.javascript中的对象继承',
            path: '/javascript/javascript-inherit'
          }
        ]
      },
      {
        title: 'this-call-applay',
        sidebarDepth: 1,
        collapsable: false,
        path: '/this-call-applay/this',
        children: [
          {
            title: '1.this',
            path: '/this-call-applay/this'
          },
          {
            title: '2.call和apply',
            path: '/this-call-applay/call-apply'
          }
        ]
      },
      {
        title: '设计模式',
        sidebarDepth: 1,
        collapsable: false,
        path: '/design-mode/single',
        children: [
          {
            title: '1.单例模式',
            path: '/design-mode/single'
          },
          {
            title: '2.策略模式',
            path: '/design-mode/2.策略模式/'
          },
          {
            title: '3.代理模式',
            path: '/design-mode/3.代理模式/'
          },
          {
            title: '4.迭代器模式',
            path: '/design-mode/4.迭代器模式/'
          },
          {
            title: '5.发布订阅模式',
            path: '/design-mode/5.发布订阅模式/'
          },
          {
            title: '6.命令模式',
            children: [
              {
                title: '6.1.命令模式实现菜单管理',
                path: '/design-mode/6.命令模式/1.命令模式实现菜单管理'
              },
              {
                title: '6.2.撤销操作',
                path: 'design-mode/6.命令模式/2.撤销操作'
              }
            ]
          },
          {
            title: '7.模板模式',
            path: '/design-mode/7.模板模式/'
          },
        ]
      },
      {
        title: '算法',
        sidebarDepth: 1,
        collapsable: false,
        children: [
          {
            title: '1.队列',
            path: '/算法/queue'
          },
          {
            title: '4.字典',
            path: '/算法/4.字典/'
          },
          {
            title: '5.散列',
            path: '/算法/5.散列表/'
          }
        ]
      },
      {
        title: '工具函数',
        sidebarDepth: 1,
        collapsable: false,
        path: '/uitls/',
      },
      {
        title: '面试',
        sidebarDepth: 1,
        collapsable: false,
        children: [
          {
            title: '1.真值相等',
            path: '/面试/truth-value/'
          },
        ]
      },
      ...other
    ]
  }
}