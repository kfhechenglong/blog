# Plugins
多亏了一个低级`API`, `Pinia stores`可以完全扩展。下面是一些你可以做的事情清单:
- 为`stores`增加新属性
- 在定义`stores`时添加新选项
- 为`stores`增加新方法
- 包装现有的方法
- 改变甚至取消`actions`
- 实现像`Local Storage`一样的副作用 
- 仅应用于特定的`stores`

使用`pinia.use()`将插件添加到`pinia`实例中。最简单的例子是通过返回一个对象向所有`stores`添加一个静态属性:

```js
import { createPinia } from 'pinia'
// 为每个store增加一个名为`secret`的属性，在插件被安装创建之后
// 可以在不同的文件中
function SecretPiniaPlugin() {
    return { secret: 'the cake is a lie' }
}
const pinia = createPinia()
// 给pinia传入插件
pinia.use(SecretPiniaPlugin)

// 在其他文件中
const stroe = useStore()
store.secret // the cake is a lie
```
## 介绍
一个`Pinia`插件是一个函数，可以选择返回要添加到`store`中的属性，它接收一个可选参数，`context`：
```js
export function myPiniaPlugin(context) {
  context.pinia // 通过`createPinia()`创建的pinia
  context.app // 通过`createApp()`创建的当前实例 (Vue 3 only)
  context.store // 插件的store库
  context.options // 在定义 store时传给 `defineStore()`的参数
  // ...
}
```
这个函数被通过`pinia.use()`传递给`pinia`:
```js
pinia.use(myPiniaPlugin)
```

`Plugins`只应用于`stroes`创建后，`pinia`被传递到应用程序，否则他们不会被应用。
## 增加Store

你可以通过在插件中简单地返回一个属性对象来为每个`store`添加属性:
```js
pinia.use(() => ({ hello: 'world' }))
```
你也可以直接在`store`中设置属性，但是如果可能的话，使用`return`的返回版本，以便他们在`devtools`中自动被跟踪：
```js
pinia.use(({ store } => {
    store.hello = 'world'
}))
```
插件返回的任何属性都会被`devtools`自动跟踪，所以为了让`hello`在`devtools`中可见，如果你想在`devtools`中调试，确保在开发模式下增加`store._customProperties`：
```js
pinia.use(({ store }) => {
    store.hello = 'world'
    // 请确保您的绑定程序处理此问题。Webpack和vite在默认情况下应该会这样做
    if(process.env.NODE_ENV === 'development') {
        // 添加任何你想在store中调试的key
        store._customProperties.add('hello')
    }
})
```
需要注意的是，每个`store`都会使用响应式包装，并且会自动打开它包含的任何`Ref ``(Ref ()， computed()，…)`:
```js
const sharedRef = ref('shared')
pinia.use(({ store }) => {
  // 每个store都有一个单独的hello
  store.hello = ref('secret')
  // 他会自动解包
  store.hello // 'secret'

  // 所有的store将会共享`shared`的值
  store.shared = sharedRef
  store.shared // 'shared'
})
```
这就是为什么你可以接收所有的计算属性而不用`.value`和为什么他们是响应式的。
## 添加新的状态