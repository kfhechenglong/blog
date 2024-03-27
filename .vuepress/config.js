const sidebarItem = require('./sidebar')
module.exports = {
  // chainWebpack: config => {
  //   config.resolve.alias.set('core-js/library/fn', 'core-js/features')
  // },
  "title": '绝对零度',
  "description": 'JavaScript html css Vue 前端开发 知识库',
  // "base": '/blog/',
  "dest": "public",
  "head": process.env.NODE_ENV === 'development' ? [] : [
    // 添加百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?353a82af992f9876b27987597b206e5e";
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
  "theme": 'reco',
  "locales": {
    '/': {
      lang: 'zh-CN'
    }
  },
  "markdown": {
    lineNumbers: true,
    "anchor": { "permalink": false },
    "toc": { "includeLevel": [1, 2] },
    extendMarkdown: md => {
      md.use(require('./plugins/mk-plugin-iframe'))
    }
  },
  // "plugins": [
  //   ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
  //     "width": '300px', // 默认 260px
  //     "title": '公告',
  //     "body": [
  //       {
  //         "type": 'title',
  //         "content": '多交流关注公众号@零度杂谈🎉🎉🎉',
  //         "style": 'text-aligin: center;font-size: 15px;'
  //       },
  //       {
  //         "type": 'image',
  //         "src": '/wx_code.jpg'
  //       }
  //     ],
  //     "footer": [
  //       {
  //         "type": 'button',
  //         "text": '赞赏',
  //         "link": '/donate.jpg'
  //       }
  //     ]
  //   }]
  // ],
  // "plugins": {
    // '@vssue/vuepress-plugin-vssue': {
    //   // 设置 `platform` 而不是 `api`
    //   platform: 'github',

    //   // 其他的 Vssue 配置l
    //   locale: 'zh',
    //   // autoCreateIssue: true,
    //   owner: 'kfhechenglong',
    //   repo: 'blog',
    //   clientId: 'ec756780613db3fdc14c',
    //   clientSecret: 'a15ed8578956c3b5fca0e1b5cf5ef01bd262e5b7',
    // },
  // },
  "themeConfig": {
    "search": true,
    "searchMaxSuggestions": 10,
    "displayAllHeaders": false, // 默认值：false
    "lastUpdated": '上次更新时间', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    "repo": 'kfhechenglong/blog',
    record: '京ICP备2023029781号-1',
    recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
    // cyberSecurityRecord: '公安部备案文案',
    "repoLabel": '查看源码',
    "startYear": '2020',
    "type": "blog",
    "author": '绝对零度',
    "subSidebar": 'auto',
    "authorAvatar": '/avatar.png',
    "logo": '/logo.png',
    "noFoundPageByTencent": false, 
    vssueConfig: {
      platform: 'github',

      // 其他的 Vssue 配置l
      locale: 'zh',
      // autoCreateIssue: true,
      owner: 'kfhechenglong',
      repo: 'blog',
      clientId: 'ec756780613db3fdc14c',
      clientSecret: 'a15ed8578956c3b5fca0e1b5cf5ef01bd262e5b7',
    },
    "blogConfig": {
      category: {
        location: 5,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 6,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/kfhechenglong' },
        { icon: 'reco-csdn', link: 'https://blog.csdn.net/cheng521521' },
        { icon: 'reco-juejin', link: 'https://juejin.cn/user/1750078239821454' }
      ]
    },
    "nav": [
      { text: 'Home', link: '/' },
      // { text: '网站导航', link: '/blogs/navigation/' },
      { text: 'Vue', link: '/blogs/vue/Pinia/操作指引/' },
      { text: 'JavaScript', 
        items: [
          { text: 'JavaScript基础', link: '/blogs/javascript/JavaScript基础/Blob介绍与使用场景.md' },
          { text: 'JavaScript算法', link: '/blogs/算法/1.stack/' },
          { text: 'JavaScript设计模式', link: '/blogs/设计模式/1.单例模式/' }
        ]
      },
      { text: '杂谈', link: '/blogs/tittleTattle/是否救万科.html' },
      {
        text: '更多',
        ariaLabel: '更多内容',
        items: [
          { text: '面试', link: '/blogs/面试/Vue3相比Vue2有哪些优化.html' },
          { text: 'node', link: '/blogs/node/inquirer/' },
          { text: 'python', link: '/blogs/Python/使用Python将多个pdf指定页整合到一个pdf文件中.html' },
          { text: '杂项', link: '/blogs/other/fullCalendar日程表/' },
          { text: '2022', link: '/blogs/2022/' }
        ]
      },
      // { 
      //   text: '外网链接', 
      //   items: [
      //     { text: 'CSDN', link: 'https://blog.csdn.net/cheng521521' },
      //     { text: '掘金', link: 'https://juejin.cn/user/1750078239821454' }
      //   ]
      // }
    ],
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'kfhechenglong/blog',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助改善此页面！',
    // // 侧边栏
    sidebar: sidebarItem
  }
}
