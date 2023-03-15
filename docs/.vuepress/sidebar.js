module.exports = {
  "/javascript/": [
    {
      title: "JavaScript基础",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        {
          title: "call和apply的用途",
          path: "/javascript/JavaScript基础/call和apply的用途.md",
        },
        {
          title: "JavaScript中的继承",
          path: "/javascript/JavaScript基础/JavaScript中的继承.md",
        },
        {
          title: "JavaScript的原型链",
          path: "/javascript/JavaScript基础/JavaScript的原型链.md",
        },
        { title: "new的理解", path: "/javascript/JavaScript基础/new的理解.md" },
        { title: "this指向", path: "/javascript/JavaScript基础/this指向.md" },
        {
          title: "var-let-const变量声明",
          path: "/javascript/JavaScript基础/var-let-const变量声明.md",
        },
        {
          title: "理解JavaScript的执行上下文",
          path: "/javascript/JavaScript基础/理解JavaScript的执行上下文.md",
        },
        { title: "鸭子类型", path: "/javascript/JavaScript基础/鸭子类型.md" },
      ],
    },
    {
      title: "算法",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        {
          title: "1.stack",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/算法/1.stack/",
        },
        {
          title: "4.字典",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/算法/4.字典/",
        },
        {
          title: "5.散列表",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/算法/5.散列表/",
        },
        {
          title: "6.递归",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/算法/6.递归/",
        },
        {
          title: "7.队列",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/算法/7.队列/",
        },
        {
          title: "8.指针思想",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/算法/8.指针思想/",
        },
      ],
    },
    {
      title: "设计模式",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        {
          title: "1.单例模式",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/设计模式/1.单例模式/",
        },
        {
          title: "2.策略模式",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/设计模式/2.策略模式/",
        },
        {
          title: "3.代理模式",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/设计模式/3.代理模式/",
        },
        {
          title: "4.迭代器模式",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/设计模式/4.迭代器模式/",
        },
        {
          title: "5.发布订阅模式",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/设计模式/5.发布订阅模式/",
        },
        {
          title: "6.命令模式",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/设计模式/6.命令模式/",
        },
        {
          title: "7.模板模式",
          sidebarDepth: 2,
          collapsable: false,
          path: "/javascript/设计模式/7.模板模式/",
        },
      ],
    },
  ],
  "/node/": [
    { title: "cli", sidebarDepth: 2, collapsable: false, path: "/node/cli/" },
    {
      title: "inquirer",
      sidebarDepth: 2,
      collapsable: false,
      path: "/node/inquirer/",
    },
    {
      title: "node-commander",
      sidebarDepth: 2,
      collapsable: false,
      path: "/node/node-commander/",
    },
  ],
  "/other/": [
    {
      title: "fullCalendar日程表",
      sidebarDepth: 2,
      collapsable: false,
      path: "/other/fullCalendar日程表/",
    },
    { title: "H5", path: "/other/H5.md" },
    {
      title: "upload-files",
      sidebarDepth: 2,
      collapsable: false,
      path: "/other/upload-files/",
    },
    {
      title: "前端安全",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        {
          title: "CSRF",
          sidebarDepth: 2,
          collapsable: false,
          path: "/other/前端安全/CSRF/",
        },
        {
          title: "xss",
          sidebarDepth: 2,
          collapsable: false,
          path: "/other/前端安全/xss/",
        },
      ],
    },
    {
      title: "工具",
      sidebarDepth: 2,
      collapsable: false,
      children: [{ title: "wx-pc-dev", path: "/other/工具/wx-pc-dev.md" }],
    },
  ],
  "/vue/": [
    {
      title: "Pinia",
      sidebarDepth: 2,
      collapsable: false,
      path: "/vue/Pinia/",
      children: [
        {
          title: "操作指引",
          sidebarDepth: 2,
          collapsable: false,
          path: "/vue/Pinia/操作指引/",
        },
        {
          title: "核心概念",
          sidebarDepth: 2,
          collapsable: false,
          path: "/vue/Pinia/核心概念/",
          children: [
            { title: "Actions", path: "/vue/Pinia/核心概念/Actions.md" },
            { title: "Getters", path: "/vue/Pinia/核心概念/Getters.md" },
            { title: "Plugins", path: "/vue/Pinia/核心概念/Plugins.md" },
          ],
        },
      ],
    },
    {
      title: "vue2",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        {
          title: "keep-alive实现动态缓存以及缓存销毁",
          path: "/vue/vue2/keep-alive实现动态缓存以及缓存销毁.md",
        },
        {
          title: "路由权限的配置思路",
          path: "/vue/vue2/路由权限的配置思路.md",
        },
      ],
    },
    {
      title: "vue3",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        {
          title: "antd实现table内容超出自动tooltip",
          path: "/vue/vue3/antd实现table内容超出自动tooltip.md",
        },
        {
          title: "formatter",
          sidebarDepth: 2,
          collapsable: false,
          path: "/vue/vue3/formatter/",
        },
        {
          title: "vue3.0+tsx+v-slots",
          path: "/vue/vue3/vue3.0+tsx+v-slots.md",
        },
        {
          title: "vue核心原理",
          sidebarDepth: 2,
          collapsable: false,
          path: "/vue/vue3/vue核心原理/",
          children: [
            {
              title: "为什么使用虚拟DOM",
              path: "/vue/vue3/vue核心原理/为什么使用虚拟DOM.md",
            },
            {
              title: "图解vue3.0编译器核心原理",
              path: "/vue/vue3/vue核心原理/图解vue3.0编译器核心原理.md",
            },
            {
              title: "理解Vue中的Tree-Shaking",
              path: "/vue/vue3/vue核心原理/理解Vue中的Tree-Shaking.md",
            },
            {
              title: "理解框架的编译时与运行时",
              path: "/vue/vue3/vue核心原理/理解框架的编译时与运行时.md",
            },
          ],
        },
      ],
    },
  ],
  "/面试/": [
    {
      title: "html篇",
      sidebarDepth: 2,
      collapsable: false,
      path: "/面试/html篇/",
      children: [
        { title: "SEO中的TKD三要素", path: "/面试/html篇/SEO中的TKD三要素.md" },
        {
          title: "多页面应用与单页面应用的优缺点",
          path: "/面试/html篇/多页面应用与单页面应用的优缺点.md",
        },
      ],
    },
    {
      title: "JavaScript篇",
      sidebarDepth: 2,
      collapsable: false,
      path: "/面试/JavaScript篇/",
    },
    {
      title: "Node篇",
      sidebarDepth: 2,
      collapsable: false,
      path: "/面试/Node篇/",
    },
    {
      title: "truth-value",
      sidebarDepth: 2,
      collapsable: false,
      path: "/面试/truth-value/",
    },
    {
      title: "vue篇",
      sidebarDepth: 2,
      collapsable: false,
      path: "/面试/vue篇/",
      children: [
        { title: "vue中的diff算法", path: "/面试/vue篇/vue中的diff算法.md" },
        { title: "vue响应式理解", path: "/面试/vue篇/vue响应式理解.md" },
      ],
    },
  ],
};
