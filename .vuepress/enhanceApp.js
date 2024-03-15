import {getCount} from './tj.js'
import Vue from 'vue'
export default ({ router }) => {
    /**
     * 路由切换事件处理
     */
    router.beforeEach(async (to, from, next) => {
      //触发百度的pv统计
      if (typeof _hmt != "undefined") {
        if (to.path) {
          _hmt.push(["_trackPageview", to.fullPath]);
          console.log(to.fullPath)
          const num = await getCount(to.fullPath);
          console.log(num)
          Vue.prototype.pv = num
        }
      }
      next();
    });
  };
