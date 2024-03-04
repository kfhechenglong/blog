module.exports = {
  "/blogs/javascript/": [
    {
      title: "JavaScript基础",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        {
          title: "Blob介绍与使用场景",
          path: "/blogs/javascript/JavaScript基础/Blob介绍与使用场景.md",
        },
        {
          title: "call和apply的用途",
          path: "/blogs/javascript/JavaScript基础/call和apply的用途.md",
        },
        {
          title: "forEach遍历访问set造成的无限循环问题",
          path: "/blogs/javascript/JavaScript基础/forEach遍历访问set造成的无限循环问题.md",
        },
        {
          title: "JavaScript中的继承",
          path: "/blogs/javascript/JavaScript基础/JavaScript中的继承.md",
        },
        {
          title: "JavaScript的原型链",
          path: "/blogs/javascript/JavaScript基础/JavaScript的原型链.md",
        },
        {
          title: "new的理解",
          path: "/blogs/javascript/JavaScript基础/new的理解.md",
        },
        {
          title: "this指向",
          path: "/blogs/javascript/JavaScript基础/this指向.md",
        },
        {
          title: "var-let-const变量声明",
          path: "/blogs/javascript/JavaScript基础/var-let-const变量声明.md",
        },
        {
          title: "理解JavaScript的执行上下文",
          path: "/blogs/javascript/JavaScript基础/理解JavaScript的执行上下文.md",
        },
      ],
    },
  ],
  "/blogs/node/": [
    {
      title: "cli",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/node/cli/",
    },
    {
      title: "inquirer",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/node/inquirer/",
    },
    {
      title: "node-commander",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/node/node-commander/",
    },
    {
      title: "webpack",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/node/webpack/",
    },
  ],
  "/blogs/other/": [
    {
      title: "fullCalendar日程表",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/other/fullCalendar日程表/",
    },
    {
      title: "git",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        {
          title: "解决打不开github页面的问题",
          path: "/blogs/other/git/解决打不开github页面的问题.md",
        },
      ],
    },
    {
      title: "github自动同步到腾讯云",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/other/github自动同步到腾讯云/",
    },
    { title: "H5", path: "/blogs/other/H5.md" },
    {
      title: "upload-files",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/other/upload-files/",
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
          path: "/blogs/other/前端安全/CSRF/",
        },
        {
          title: "xss",
          sidebarDepth: 2,
          collapsable: false,
          path: "/blogs/other/前端安全/xss/",
        },
      ],
    },
    {
      title: "工具",
      sidebarDepth: 2,
      collapsable: false,
      children: [
        { title: "wx-pc-dev", path: "/blogs/other/工具/wx-pc-dev.md" },
      ],
    },
  ],
  "/blogs/vue/": [
    {
      title: "Pinia",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/vue/Pinia/",
      children: [
        {
          title: "操作指引",
          sidebarDepth: 2,
          collapsable: false,
          path: "/blogs/vue/Pinia/操作指引/",
        },
        {
          title: "核心概念",
          sidebarDepth: 2,
          collapsable: false,
          path: "/blogs/vue/Pinia/核心概念/",
          children: [
            { title: "Actions", path: "/blogs/vue/Pinia/核心概念/Actions.md" },
            { title: "Getters", path: "/blogs/vue/Pinia/核心概念/Getters.md" },
            { title: "Plugins", path: "/blogs/vue/Pinia/核心概念/Plugins.md" },
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
          path: "/blogs/vue/vue2/keep-alive实现动态缓存以及缓存销毁.md",
        },
        {
          title: "快速定位form表单",
          path: "/blogs/vue/vue2/快速定位form表单.md",
        },
        {
          title: "路由权限的配置思路",
          path: "/blogs/vue/vue2/路由权限的配置思路.md",
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
          path: "/blogs/vue/vue3/antd实现table内容超出自动tooltip.md",
        },
        {
          title: "formatter",
          sidebarDepth: 2,
          collapsable: false,
          path: "/blogs/vue/vue3/formatter/",
        },
        {
          title: "vue3.0+tsx+v-slots",
          path: "/blogs/vue/vue3/vue3.0+tsx+v-slots.md",
        },
        {
          title: "vue核心原理",
          sidebarDepth: 2,
          collapsable: false,
          children: [
            {
              title: "为什么使用虚拟DOM",
              path: "/blogs/vue/vue3/vue核心原理/为什么使用虚拟DOM.md",
            },
            {
              title: "图解vue3.0编译器核心原理",
              path: "/blogs/vue/vue3/vue核心原理/图解vue3.0编译器核心原理.md",
            },
            {
              title: "理解Vue中的Tree-Shaking",
              path: "/blogs/vue/vue3/vue核心原理/理解Vue中的Tree-Shaking.md",
            },
            {
              title: "理解框架的编译时与运行时",
              path: "/blogs/vue/vue3/vue核心原理/理解框架的编译时与运行时.md",
            },
          ],
        },
        {
          title: "Vue获取Dom元素与子组件",
          path: "/blogs/vue/vue3/Vue获取Dom元素与子组件.md",
        },
      ],
    },
  ],
  "/blogs/算法/": [
    {
      title: "1.stack",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/算法/1.stack/",
    },
    {
      title: "4.字典",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/算法/4.字典/",
    },
    {
      title: "5.散列表",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/算法/5.散列表/",
    },
    {
      title: "6.递归",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/算法/6.递归/",
    },
    {
      title: "7.队列",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/算法/7.队列/",
    },
    {
      title: "8.指针思想",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/算法/8.指针思想/",
    },
    {
      title: "9.树",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/算法/9.树/",
    },
  ],
  "/blogs/设计模式/": [
    {
      title: "1.单例模式",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/设计模式/1.单例模式/",
    },
    {
      title: "2.策略模式",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/设计模式/2.策略模式/",
    },
    {
      title: "3.代理模式",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/设计模式/3.代理模式/",
    },
    {
      title: "4.迭代器模式",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/设计模式/4.迭代器模式/",
    },
    {
      title: "5.发布订阅模式",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/设计模式/5.发布订阅模式/",
    },
    {
      title: "6.命令模式",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/设计模式/6.命令模式/",
    },
    {
      title: "7.模板模式",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/设计模式/7.模板模式/",
    },
  ],
  "/blogs/面试/": [
    {
      title: "html篇",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/面试/html篇/",
      children: [
        {
          title: "SEO中的TKD三要素",
          path: "/blogs/面试/html篇/SEO中的TKD三要素.md",
        },
        {
          title: "多页面应用与单页面应用的优缺点",
          path: "/blogs/面试/html篇/多页面应用与单页面应用的优缺点.md",
        },
      ],
    },
    {
      title: "JavaScript篇",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/面试/JavaScript篇/",
      children: [
        {
          title: "ES5与ES6的继承",
          path: "/blogs/面试/JavaScript篇/ES5与ES6的继承.md",
        },
        {
          title: "JavaScript事件循环",
          path: "/blogs/面试/JavaScript篇/JavaScript事件循环.md",
        },
        { title: "真假值", path: "/blogs/面试/JavaScript篇/真假值.md" },
      ],
    },
    {
      title: "Node篇",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/面试/Node篇/",
      children: [
        {
          title: "npm包版本号的理解",
          path: "/blogs/面试/Node篇/npm包版本号的理解.md",
        },
      ],
    },
    {
      title: "vue篇",
      sidebarDepth: 2,
      collapsable: false,
      path: "/blogs/面试/vue篇/",
      children: [
        {
          title: "Vue3相比Vue2有哪些优化",
          path: "/blogs/面试/vue篇/Vue3相比Vue2有哪些优化.md",
        },
        {
          title: "vue中的diff算法",
          path: "/blogs/面试/vue篇/vue中的diff算法.md",
        },
        { title: "vue响应式理解", path: "/blogs/面试/vue篇/vue响应式理解.md" },
        {
          title: "原生JS操作DOM所面临的问题",
          path: "/blogs/面试/vue篇/原生JS操作DOM所面临的问题.md",
        },
      ],
    },
  ],
};
