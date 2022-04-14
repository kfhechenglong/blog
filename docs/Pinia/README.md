# Pinia

## Why Pinia

>Pinia (pronounced /piːnjʌ/, like "peenya" in English) is the closest word to piña (pineapple in Spanish) that is a valid package name. A pineapple is in reality a group of individual flowers that join together to create a multiple fruit. Similar to stores, each one is born individually, but they are all connected at the end. It's also a delicious tropical fruit indigenous to South America.

##  Why should I use Pinia?

Pinia t同时支持vue2.0与vue3.0

### 特性

- Devtools的支持
- 模块热更新
- 自定义拓展插件
- 对TypeScript的友好支持
- 对服务端渲染的支持

## 基础用法

开始创建一个`store`

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCountStore = defineStore('counter', {
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
        }
    }
})

```

你可以在组件中这样使用

```js
import { useCounterStore } from '@/stores/counter'

export default {
    setup() {
        const counter = useCounterStore()
        counter++
        // 或者使用字段添加
        counter.$patch({
            count: counter + 1
        })
        // 或者使用方法触发
        counter.increment()
    }
}

```

你甚至可以使用一个函数（类似于组件的`setup()`）去为一个更高级的用法定义Store

```js
export const useCounterStore = defineStore('counter' () => {
    const count = ref(0)
    function increment () {
        count.vaule++
    }

    return { count, increment }
})
```

如果你现在仍未使用`setup()`和组件式API，不用担心，Pinia提供了类似于Vuex的设置，你可以以同样的方式定义存储，但随后使用mapStores()、mapState()或mapActions()

```js
const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0}),
    getters: {
        double: (state) => state.count * 2
    },
    actions: {
        increment () {
            this.count++
        }
    }
})

const useUserStore = defineStore('user', {
    // 业务代码
})


// 使用方式

export default {
    computed: {
        // 提供访问this.useCounterStore和this.useUserStore的权限
        ...mapStores(useCounterStore, useUserStore)
        // 可以通过计算属性访问this.count和this.double
        ...mapState(useCounterStore, ['count', 'double'])
    },
    methods: {
        // 提供访问this.increment的方法
        ...mapActions(useCounterStore, ['increment'])
    }
}
```

## 实现一个更加完善的案例

>下面是一个更完整的API示例，您将在`Pinia`中使用它，甚至在JavaScript中使用它的类型。对于一些人来说，这可能已经足够了，不需要进一步阅读就可以开始了，但我们仍然建议检查文档的其余部分，甚至跳过这个例子，当你阅读了所有的`Core Concepts`后再回来

老生常谈的`todos`
```js
import { defineStore } from 'pinia'

export const todos = defineStore('todos', {
    state: () => ({
        /** @type {{ text: string, id: number, isFinished: boolean }[]} */
        todos: [],
        /** @type {'all' | 'finished' | 'unfinished'} */
        filter: 'all',
        nextId: 0
    }),
    getters: {
        finishedTodos(state) {
            return state.todos.filter((todo) => todo.isFinished)
        },
        unfinishedTodos(state) {
            return state.todos.filter((todo) => !todo.isFinished)
        },
        filteredTodos(state) {
            if (this.filter === 'finished') {
                // 调用其它的getter方法
                return this.finishedTodos
            } else if (this.filter === 'unfinished') {
                return this.unfinishedTodos
            }
            return this.todos
        },
    },
    actions: {
        addTodo(text) {
            this.todos.push({
                text,
                id:this.nextId++,
                isFinished: false
            })
        }
    }
})
```

## 与Vuex相对比

> Pinia最初是最为Vuex的下一个版本使用的，现在发现`Pinia`已经实现了在`Vuex5`大多数想要的功能，并决定将其改为最新的建议。

>与Vuex相比，Pinia提供了更简单的API而不需要更多的条框，提供了组合API风格的API，最重要的是，当与TypeScript一起使用时，它提供了可靠的类型推断支持。

## 与Vuex3.X/Vuex4.X相对比

- `mutations `Api不在使用，因为这个Api经常被认为是冗余的；
- 不需要去编写复杂的包装器去支持`TypeScript`，因为可以很好的支持Ts的类型推导；
- 不需要魔法般的字符串注入、函数导入，现在可以直接使用他们，并且自动完成调用；
- 不需要动态添加`stores`， 因为他们默认是动态的
- 不再有嵌套的模块结构。您仍然可以通过在另一个`stores`中隐式导入和使用`stores`，但是Pinia在设计上提供了一个扁平的结构，同时仍然支持商`stores`之间的交叉组合。你甚至可以拥有`stores`的循环依赖关系；
- 不需要命名空间。考虑到`stores`的扁平化结构，`namespacing`是在`stores`被定义的时候与生具有的，所以可以视为所有的`stores`都具有命名空间；

## 安装使用

### install

使用本地的命令行工具安装`Pinia`包：

```sh
yarn add pinia
# 或者使用npm
npm install pinia
```

> Tip

> 如果使用的是`Vue2`版本， 您需要另外安装`composition api`：`@vue/composition-api`。如果您使用的是`Nuxt`，则需要另外参考[这些信息](https://pinia.vuejs.org/ssr/nuxt.html)

创建`Pinia`根store然后导入应用程序中：

```js
import { createPinia } from 'pinia'

app.use(createPinia())
```
但是，如果使用的是Vue2.则需要安装额外的插件然后注入创建好的`Pinia`到应用程序中：
```js
import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
    el: '#app',
    // 其它的Vue配置项
    pinia
})
```

`Pinia`也将添加`devtools`支持。在`Vue 3`中，像时间旅行和编辑这样的功能仍然不被支持，因为`Vue-devtools`还没有公开必要的api，但`devtools`有更多的功能，总体上来说，开发人员的体验要优越得多。在`Vue 2`中，`Pinia`使用了`Vuex`的现有接口(因此两者不能一起使用)。