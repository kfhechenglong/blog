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
        title: 'JavaScript基础',
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
          },
          {
            title: '4.this',
            path: '/javascript/this'
          },
          {
            title: '5.call and apply',
            path: '/javascript/call-apply'
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
          },
          {
            title: '6.递归',
            path: '/算法/6.递归/'
          }
        ]
      },
      {
        title: 'Pinia',
        sidebarDepth: 1,
        collapsable: false,
        path: '/Pinia/',
        children: [
          {
            title: '1.核心概念',
            path: '/Pinia/核心概念/'
          },
          {
            title: '2.Getters',
            path: '/Pinia/核心概念/Getters'
          },
          {
            title: '3.Actions',
            path: '/Pinia/核心概念/Actions'
          },
          {
            title: '4.Plugins',
            path: '/Pinia/核心概念/Plugins'
          },
          {
            title: '5.操作指引',
            path: '/Pinia/操作指引/'
          }
        ]
      },
      {
        title: '工具',
        sidebarDepth: 1,
        collapsable: false,
        children: [
          {
            title: '1.生日年龄转换',
            path: '/uitls/format-date/'
          },
          {
            title: '2.数字添加千分位',
            path: '/uitls/千分位'
          },
          {
            title: '3.文件下载',
            path: '/uitls/exportFiles'
          },
          {
            title: '4.微信、企微PC端页面调试',
            path: '/工具/wx-pc-dev'
          },
          {
            title: '5.日程组件',
            path: '/other/fullCalendar/'
          }
        ]
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
      {
        title: 'vue3.0',
        sidebarDepth: 1,
        collapsable: false,
        children: [
          {
            title: '插槽slot及v-model',
            path: '/vue3.0/vue3.0+tsx+v-slots'
          },
          {
            title: 'table内容超出自动tooltip',
            path: '/vue3.0/antd实现table内容超出自动tooltip'
          },
          {
            title: '图解vue3.0编译器核心原理',
            path: '/vue核心原理/图解vue3.0编译器核心原理'
          },
        ]
      },
      {
        title: 'git篇',
        sidebarDepth: 1,
        collapsable: false,
        children: [
          {
            title: 'git emoji指南',
            path: '/git篇/git emoji指南'
          },
        ]
      },
      ...other
    ]
  }
}