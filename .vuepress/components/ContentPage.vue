<template>
  <div class="layout-page-a">
    <div>
      <div class="he-section-hook" v-for="(item, index) in webData" :key="index">
        <div class="he-space-row-block"></div>
        <div :id="item.title" class="he-section-header-bg" :data-index="index" :data-title="item.title">
          <div class="he-section-header-icon"></div>
          <div class="he-section-header-title">{{ item.category }}</div>
        </div>
        <div class="he-home-card-items">
          <div class="he-card-item-bg has-margin" v-for="(tag, index) in item.tags" :key="index">
            <div @click="open(tag.url)">
              <div class="he-card-item-header">
                <div class="he-card-item-header-left">
                  <img class="he-card-item-img" style="object-fit: contain" alt="Logo"
                    :src="tag.svg" />
                  <div class="he-card-item-title">{{tag.title}}</div>
                </div>
              </div>
              <p class="he-card-item-desc">{{tag.des}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentPage",
  data () {
	return {
		webData: [{
			category: 'web 框架',
			title: 'web 框架',
			tags: [{
				title: 'React',
				url: 'https://react.docschina.org',
				svg: '/page-imgs/react.svg',
				des: '构建用户界面的 JavaScript 库'
			},{
				title: 'Vue',
				url: 'https://cn.vuejs.org/',
				svg: '/page-imgs/vue.svg',
				des: '渐进式 JavaScript 框架'
			},{
				title: 'Angular Material',
				url: 'https://material.angular.cn/',
				svg: 'https://docschina.org/static/logo/angular.svg',
				des: 'Material Design 组件库 for Angular'
			},{
				title: 'single-spa',
				url: 'https://single-spa.js.org/',
				svg: 'https://docschina.org/static/logo/singlespa.svg',
				des: 'JavaScript 框架，将多个微前端组合成一个应用程序'
			}]
		},
    {
			category: 'React',
			des: '',
			tags: [
        {
          title: 'Create React App',
          url: 'https://react.docschina.org/',
          svg: '/page-imgs/react.svg',
          des: 'React 官方维护的创建 React 单页面应用的工具'
        },
        {
          title: 'React-Router',
          url: 'https://react-router.docschina.org/',
          svg: '/page-imgs/react-router.svg',
          des: 'React 官方维护的路由库'
        },
        {
          title: 'React Native',
          url: 'https://reactnative.cn/',
          svg: '/page-imgs/react.svg',
          des: '基于 React 的移动端跨平台 UI'
        },
        {
          title: 'Element React',
          url: 'https://elemefe.github.io/element-react/',
          svg: '/page-imgs/element.svg',
          des: 'Element UI 的 React 实现'
        },
        {
          title: 'React Redux',
          url: 'https://react-redux.js.org/',
          svg: '/page-imgs/redux.svg',
          des: 'React 官方版本 Redux'
        },
        {
          title: 'Zent',
          url: 'https://youzan.github.io/zent/zh/guides/install',
          svg: '/page-imgs/zent.png',
          des: 'PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件'
        },
        {
          title: 'Redux',
          url: 'https://cn.redux.js.org/',
          svg: '/page-imgs/redux.svg',
          des: 'JavaScript 状态容器，提供可预测化的状态管理'
        }
      ]
		},
    {
			category: 'Vue',
			des: '',
			tags: [
        {
          title: 'Vuex',
          url: 'https://vuex.vuejs.org/zh/',
          svg: '/page-imgs/vue.svg',
          des: 'vuex 是 Vue 官方提供的状态管理工具'
        },
        {
          title: 'Pinia',
          url: 'https://pinia.web3doc.top/introduction.html',
          svg: '/page-imgs/Pinia.png',
          des: 'Pinia 同时支持vue2.0与vue3.0'
        },
        {
          title: 'Vant',
          url: 'https://vant-ui.github.io/vant/',
          svg: '/page-imgs/vant.png',
          des: '移动端 Vue 组件库'
        },
        {
          title: 'Cube UI',
          url: 'https://didi.github.io/cube-ui/#/zh-CN',
          svg: '/page-imgs/cube.png',
          des: '基于 Vue 实现的精致移动端组件库'
        },
        {
          title: 'Weex',
          url: 'https://weexapp.com/guide/introduction.html',
          svg: '/page-imgs/weex.svg',
          des: '基于 Vue 的移动端跨平台 UI'
        },
        {
          title: 'vue-router',
          url: 'https://router.vuejs.org/zh/',
          svg: '/page-imgs/vue.svg',
          des: 'vue-router 是 Vue 官方提供的 router'
        },
        {
          title: 'Nuxt.js',
          url: 'https://zh.nuxtjs.org/',
          svg: '/page-imgs/nuxtjs.png',
          des: 'Vue.js 元框架，用于快速创建复杂、高性能的通用 Web 应用程序'
        }
      ]
		}
  ]
	}
  },
  methods: {
	open(url) {
		window.open(url)
	}
  }
};
</script>

<style scoped>
.layout-page-a {
	background-color: #edeef3!important;
	padding: 20px;
}
.he-section-header-bg {
    background: #fff;
    color: #66687d;
    height: 44px;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
.he-section-header-bg .he-section-header-icon {
    background: #ffb9b5;
    width: 2px;
    height: 24px;
}
.he-section-header-bg .he-section-header-title {
    margin-left: 18px;
    font-size: 14px;
    font-weight: 700;
    color: #66687d;
}
.he-space-row-block {
    width: 100%;
    height: 20px;
}
.he-card-item-header-left {
    margin-left: 14px !important;
    margin-top: 10px !important;
}
.he-home-card-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.has-margin {
    margin-top: 20px !important;
    margin-right: 20px !important;
}
.he-card-item-bg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    min-width: 253px;
    height: 100px;
    background: #fff;
}
.he-card-item-header, .he-card-item-header-left {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.he-card-item-header {
    position: relative;
    justify-content: space-between;
    cursor: pointer;
}
.he-card-item-img, .he-card-item-no-img {
    width: 39px;
    height: 39px;
}
.he-card-item-title {
    font-size: 16px;
    color: #4d4f91;
    margin-left: 10px;
    margin-right: 30px;
    text-align: left;
}
.he-card-item-desc {
    font-size: 12px;
    height: 36px;
    color: #727171;
    text-align: left;
    margin-top: 10px;
    margin-left: 14px;
    margin-right: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
</style>