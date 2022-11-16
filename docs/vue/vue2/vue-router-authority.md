# 路由权限的配置思路

## 1.从后台获取路由权限生成白名单
前端请求拿到后台返回的菜单列表后，根据前端的静态路由去匹配，生成白名单，可以在路由的`meta`属性里添加是否要进行权限判断的标识

将生成可以访问的路由白名单存储在本地的session中；
```javascript
// 配置路由拦截
router.beforeEach((to,from,next) => {
    if(to.meta.Token) {
        // 验证登录权限
        if(getLocalToken()) {
            // 验证是否有路由权限
            let moduleList = [];
            moduleList = TestEnvironemt ? ['settle'] : sessionStorageMothds('moduleList','getItem');
            if( !moduleList.includes('settle')) {
                // 返回主页
                window.location = "/";
            } else {
                if(to.meta.Router) {
                    let routerList = [];
                    try{
                        routerList = sessionStorageMothds('routerList','getItem');
                    } catch (e){
    
                    }
                    if(routerList.includes(to.name)) {
                        next();
                    } else {
                        // 返回主页
                        window.location = "/";
                    }
                } else {
                    next();
                }
            }
        } else {
            // 没有权限，回退到登录页面
            LogOut();
        }
    } else {
        next();
    }
})
export default router
```
这种方法不是很好，毕竟前端的路由已经被注入到路由列表里面；通过修改本地session还是可以访问到未授权的页面的；

## 2.通过vue提供的addRoutes方法
### 1.路由的动态注入
前端页面根据用户的权限获取菜单的权限，前端需要将路由列表做一个映射匹配；`dataCollectionRouter`是存储本地路由的数组列表；
```javascript
interface routerMapType {
    [propName : string] : {
        path:string
        name:string
        component:any
        meta:{
            Token?:boolean
            [propName : string]:any
        }
    }
}
// 生产路由的映射
export const routerMap = function(routers:any[]):routerMapType {
    let result:any = {};
    routers.forEach((item:any) => {
        result[item.name] = item;
    })
    return result
}
// 动态生成路由结构；
export function saveRouter (menus:any[]) :any[]{
    let result = [];
    if(menus && menus.length) {
        const routerMapResult:routerMapType = routerMap(dataCollectionRouter);
        for (let i = 0; i < menus.length; i++) {
            const item = menus[i];
            const route:any = {};
            if(item.children && item.children.length){
                route.children = [];
                route.children.push(...saveRouter(item.children))
            }
            if(item.url && routerMapResult[item.url]){
                routerMapResult[item.url].meta.title = item.menuName;
                result.push({
                    ...route,
                    ...routerMapResult[item.url]
                });
            } else if(route.children) {
                result.push(...route.children)
            }
        }
    }
    return result;
}
```
### 2.动态注入
路由列表注入成功，如果退出登录，没有对已注入的列表进行清除，那么再次登录就会存在二次注入，路由重复的情况，体验不好；
解决方法如下
```javascript
// 默认的静态路由页面
export const defaultPublicRouter = [
    {
        path: "*",
        redirect: "/"
    },
    {
        path: "/login",
        component: Login
    }
];
export const defaultHomeRoute = () => [
    {
        path: "/",
        component: Index,
        redirect: "/home",
        name: "bazk",
        meta: {
            Token: true
        },
        children: [
            {
                path: "home",
                name: "home",
                component: home,
                meta: {
                    title: "首页"
                }
            }
        ]
    }
];
Vue.use(Router);
let creatRouter = () => new Router({
    mode:'hash',
    routes:defaultPublicRouter
});
const router = creatRouter();
router.addRoutes([...defaultHomeRoute()])
// 封装路由重置的函数
export function updateRouter (routerList:any[]) {
    const newRouter = creatRouter();
    (router as any).matcher = (newRouter as any).matcher;
    const addRouter = defaultHomeRoute();
    addRouter[0].children.push(...routerList);
    router.addRoutes(addRouter)
}
export default router;
```
