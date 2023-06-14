---
title: Pinia Plugins--中文文档
date: '2022-04-13'
sidebar: 'auto'
categories:
 - 前端
 - 技术
tags:
 - Pinia
describe: 'Pinia Api核心概念 文档翻译'
img: './Pinia.png'
publish: true
---
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
可以在定义`store`时创建新的选项，以便以后从插件中使用它们。例如，你可以创建一个`debounce`选项，允许你对任何操作进行`debounce`:
```js
defineStore('search', {
    actions: {
        searchContacts() {
            // ...
        },
    },
    // 在后续的插件中可以被读取
    debounce: {
        // 防抖函数可以将searchContacts延迟300ms
        searchContacts: 300
    }
})
```
插件可以读取这个选项，重新包装替代原始的值：
```js
// 使用第三方库
import debounce from 'lodash/debunce'
pinia.use(({ options, store }) => {
    if (options.debounce) {
        // 可以重写actions
        return Object.keys(options.debounce).reduce((debouncedActions, action) => {
            debouncedActions[action] = debounce(
                store[action],
                options.debounce[action]
            )
            return debouncedActions
        }, {})
    }
})
```
请注意，当使用`setup`语法时，自定义参数作为第三个参数被传入：
```js
defineStore(
    'search',
    () => {
        // ...
    },
    {
        // 在后续的插件中可以被读取
        debounce: {
            // 防抖函数可以将searchContacts延迟300ms
            searchContacts: 300
        }
    }
)
```
## TypeScript
上面展示的一切都可以被类型支持，所以你不需要使用`any`或者`@ts-ignore`
### Typing plugins
`Pinia`插件的类型如下:
```ts
import { PiniaPluginContext } from 'pinia'
export function myPiniaPlugin(context: PiniaPluginContext) {
    // ...
}
```
### 新属性类型
当你为`stores`增加一个新属性时，你也应该为`PiniaCustomProperties`拓展一个接口类型。
```ts
import 'pinia'
declare module 'pinia' {
    export interface PiniaCustomProperties {
        // 通过使用setter，我们可以同时允许string和refs
        set hello(value: string | Ref<string>)
        get hello(): string
        // 也可以定义简单值
        simpleNumber: number
    }
}
```
它可以被重写和安全读取
```ts
pinia.use(({ store }) => {
    store.hello = 'Hola'
    store.hello = ref('Hola')
    store.simpleNumber = Math.random()
    // 错误的类型，报错
    store.simpleNumber = ref(Math.random())
})
```
`PiniaCustomProperties`是一个泛型类型，允许您引用`store`的属性。想象一下下面的例子，我们将初始选项复制为`$options`(这只适用于选项`stores`):
```ts
pinia.use(({ options }) => ({ $options: options }))
```
我们可以通过使用`PiniaCustomProperties`的4个泛型类型来正确地输入它:
```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties<Id, S, G, A> {
    $options: {
      id: Id
      state?: () => S
      getters?: G
      actions?: A
    }
  }
}
```
>Tip

>当在泛型中扩展类型时，它们的命名必须与源代码中的名称完全一致。`Id`不能命名为`id`或`I`，`S`不能命名为`State`。以下是每个字母所代表的含义:
> - S: State
> - G: Getters
> - A: Actions
> - SS: Setup Store / Store
### 新状态类型
当添加新的状态属性时(同时添加到`store`和`store.$state`)，您需要将类型添加到`PiniaCustomStateProperties`。与`PiniaCustomProperties`不同的是，它只接收`State`泛型:
```ts
import 'pinia'
declare module 'pinia' {
    export interface PiniaCustomStateProperties<S> {
        hello: string
    }
}
```
### 创建新options的类型
当为`defineStore()`创建新选项时，您应该扩展`DefineStoreOptionsBase`。与`PiniaCustomProperties`不同的是，它只公开两种泛型:`State`和`Store`类型，允许您限制可以定义的类型。例如，你可以使用`action`的名称:
```ts
import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    // allow defining a number of ms for any of the actions
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>
  }
}
```
>Tip
>还有一个`StoreGetters`类型用于从`Store`类型中提取`getter`。您还可以通过分别扩展`DefineStoreOptions`和`DefineSetupStoreOptions`类型来扩展`setup stores`或`option stores`的选项。