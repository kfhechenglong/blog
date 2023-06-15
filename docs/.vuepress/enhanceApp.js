import {Pagination, Card, Tag} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
window.global = window;
export default ({Vue, options, router }) => {
    Vue.use(Pagination);
    Vue.use(Card);
    Vue.use(Tag);
    router.beforeEach((to, from, next) => {
        // @pdai: 对每个页面点击添加百度统计
        if(typeof _hmt!='undefined'){
            if (to.path) {
                _hmt.push(['_trackPageview', to.fullPath]);
            }
        }
        next();       
    })
};
