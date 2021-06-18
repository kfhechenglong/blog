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
    ]
  ],
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
    sidebar: [
      {
        title: '主题',
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
            title: '1.单列模式',
            path: '/design-mode/single'
          },
          {
            title: '2.策略模式',
            path: '/design-mode/2.策略模式/'
          },
          {
            title: '3.代理模式',
            path: '/design-mode/3.代理模式/'
          }
        ]
      },
      {
        title: '其它',
        sidebarDepth: 1,
        collapsable: false,
        path: '/other/vue-keep-live',
        children: [
          {
            title: '1.vue实现动态缓存以及缓存销毁',
            path: '/other/vue-keep-live'
          },
          {
            title: '2.vue路由权限的控制',
            path: '/other/vue-router-authority'
          }
        ]
      }
    ]
  }
}