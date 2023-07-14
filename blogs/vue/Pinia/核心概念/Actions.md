---
title: Pinia Actions--中文文档
date: '2022-04-13'
sidebar: true
categories:
 - 前端
 - 技术
tags:
 - Pinia
publish: true
---
:::tip
`Actions`相当于组件中的方法。他们可以被定义在`defineStore()`的`actions`属性下，它们非常适合定义业务逻辑。
:::

<!-- more -->
# Actions

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})
```

与`getter`一样，`actions`通过`this`(和自动完成✨)支持来访问整个`store`实例。与它们不同的是，`actions`可以是异步的，您可以在其中`await`任何API调用或甚至其他操作!下面是一个使用`Mande`的例子。注意，你只需要得到一个`Promise`，至于使用的库并不重要，你甚至可以使用原生的`fetch`函数(仅适用于浏览器):

```js
import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
    state: () => ({
        userDate: null
    }),
    actions: {
        async registerUser(login, password) {
            try {
                this.userDate = await api.post({ login, password})
                showTooltip(`Welcome back ${this.userData.name}!`)
            } catch (error) {
                showTooltip(error)
                // 让组件显示错误信息
                return error
            }
        }
    }
})
```

你可以完全自主的定义参数或返回的值。
当调用`actions`，一切将会被自动推断出来！
`Actions`像方法一样被调用：
```js
export default defineComponent({
    setup () {
        const main = useMainStore()
        // 调用action作为store的一个方法
        main.randomizeCounter()
        return {}
    }
})
```

## 访问其它`stores`的`actions`

要使用另一个`store`，你可以直接在`action`中使用它:

```js
import { useAuthStore } from './auth-store'

export const useSettingStore = defineStore('settings', {
    state: () =>({
        preferences: null,
        //...
    }),
    actions: {
        async fetchUserPreferences() {
            const auth = useAuthStore()
            if (auth.isAuthenticated) {
                this.preferences = await fetchPreferences()
            } else {
                throw new Error('User must be authenticated')
            }
        }
    }
})

```

## 在`setup()`中使用

你可以直接调用任何`action`作为`store`的方法:

```js
export default {
    setup() {
        const store = useStore()
        store.fetchUserPreferences()
    }
}
```

## 使用选项API

对于以下示例，您可以假设创建了以下存储:

```js
// Example File Path:
// ./src/stores/counterStore.js

import { defineStore } from 'pinia',

const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0
  }),
  actions: {
    increment() {
      this.counter++
    }
  }
})
```
## 使用`setup()`

虽然`Composition API`并不适合所有人，但是`setup()`钩子可以让`Pinia`更容易在`Options API`中使用。不需要额外的帮助函数!
```js
import { useCounterStore } from '../stores/counterStore'

export default {
  setup() {
    const counterStore = useCounterStore()

    return { counterStore }
  },
  methods: {
    incrementAndPrint() {
      this.counterStore.increment()
      console.log('New Count:', this.counterStore.count)
    },
  },
}
```
## 不使用`setup()`

如果你根本不想使用`Composition API`，你可以使用`mapActions()`助手来将`actions`属性映射为组件中的方法:

```js
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  methods: {
    // 在组件内可以通过this.increment()访问
    // 和使用 store.increment()相同
    ...mapActions(useCounterStore, ['increment'])
    // 和上面一样，但是被注册成this.myOwnName()
    ...mapActions(useCounterStore, { myOwnName: 'doubleCounter' }),
  },
}
```

## 订阅`actions`

可以使用`store.$onAction()`来观察操作及其结果。传递给它的回调函数在动作本身之前执行。`after`允许您在动作执行成功或`resolves`之后执行一个函数。类似地，`onError`允许你在动作抛出或拒绝时执行一个函数。这在运行时跟踪错误是非常有用的。

下面是一个在运行操作之前和`resolve`/`reject`操作之后记录日志的例子。
```js
const unsubscribe = someStore.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now()
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// manually remove the listener
unsubscribe()
```

默认情况下，操作订阅被绑定到添加它们的组件上(如果`store`在组件的`setup()`中)。这意味着，当组件被卸载后，他们将会被自动移除。如果你想在组件卸载后保持订阅，通过`true`作为第二个参数去把订阅从当前组件中分离出来。
```js
export default {
  setup() {
    const someStore = useSomeStore()
    // 这个订阅将会被保留，在组件被卸载之后
    someStore.$onAction(callback, true)
  }
}
```