# keep-alive实现动态缓存以及缓存销毁

## 需求来源及描述
   后台管理系统中，左侧为功能菜单栏，点击菜单列表，右侧显示该菜单的功能页面，本来是一个非常简单的后台管理系统布局，现在增加了tabs菜单按钮；
	点击左侧菜单栏时，右侧页面头部header显示当前的页面标题，形成一个tabs列表，点击可切换页面内容和关闭tabs；
	需求要求，点击左侧时，右侧显示页面内容，同时右侧header增加该页面的tabs，点击tabs可以切换页面，但页面内容不刷新，点击左侧菜单时，右侧内容刷新；
## 初步解决
第一想到的时利用vue的功能组件
```html
<keep-alive>
	<router-view/>
</keep-alive>
```
此时只能实现缓存，但是不能根据需求实现动态缓存
## 解决方案
利用`include`来判断需要缓存的路由组件，在根据点击状态更新`include`
```html
<!-- html -->
<keep-alive :include="keepAliveList">
	<router-view :key="$route.fullPath"/>
</keep-alive>
```
	利用计算属性和vuex获取缓存列表
```javascript
// <!-- vuex -->
state: {
        keepAliveList:'',//保存缓存的列表
    },
    mutations: {
        setKeepAliveLists(state,arrListString){
            state.keepAliveList = arrListString;
        },
        
    }
```
视图组件中
```javascript
computed:{
	keepAliveList(){
		// 获取缓存的路由列表
		return this.$store.state.keepAliveList;
	}
}
```
生成缓存列表，列表的值为各组件中name的值集合拼接的字符串
```javascript
this.$store.commit('setKeepAliveLists',routerComponentNameList.join())
```
点击左侧菜单栏时，更新缓存列表
```javascript
// 点击左侧菜单的事件函数
handleSelect(name) {
	if(this.routerNameMap.has(name)){//如果当前点击的路由已经在缓存列表中，则先清除缓存列表，再添加；
		this.resetKeepAive(name,this.keepAliveList);//删除缓存路由
		this.tabChangeRoute(name);//切换路由
	} else {
		this.routerNameMap.add(name)
		this.tabChangeRoute(name);
	}
},
// 更新要缓存的路由列表
resetKeepAive(name,cacheList) {
	const conf = this.keepAliveList;
	let arr = cacheList.split(',');
	if (name && typeof name === 'string') {
		let i = arr.indexOf(name);
		if (i > -1) {
			arr.splice(i, 1);
			this.$store.commit('setKeepAliveLists',arr.join());
			this.$nextTick(() => {//添加缓存路由
				this.$store.commit('setKeepAliveLists',conf);
			})
		}
	}
}
```
点击右侧tabs关闭标签删除缓存
```javascript
removeTab(name){
	// 点击tab上的关闭按钮，清除当前路由的缓存
	this.routerNameMap.delete(name);
	this.resetKeepAive(name,this.keepAliveList);//删除缓存路由
}
```
下面为主要代码，监听当前路由是否被移除缓存，如果移除缓存则需要销毁该组件，否则内容中的缓存组件会越来越来，影响使用性能；
创建一个`mixin.js`文件，然后引入到需要被动态缓存的路由组件中即可；
```javascript
// 路由缓存管理
export default {
    computed: {
        keepAliveConf(){
            return this.$store.state.keepAliveList;
        }
    },
    watch:{
        keepAliveConf(e){
            // 监听缓存列表的变化，如果缓存列表中没有当前的路由或组件则在缓存中销毁该实例
            let name = this.$options.name;
            if(!e.split(',').includes(name)) {
                this.$destroy()
            }
        }
    },
}
```