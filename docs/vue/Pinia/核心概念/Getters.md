---
title: Pinia Getters--中文文档
date: '2022-03-18'
sidebar: true
categories:
 - 前端
 - 技术
tags:
 - Pinia
describe: 'Pinia Api核心概念 文档翻译'
img: './Pinia.png'
publish: true
---
# Getters

`getter`与`Store`状态的计算值完全相同。它们可以用`defineStore()`中的`getters`属性来定义。它们接收`state`作为第一个参数，以**鼓励**使用箭头函数:

```js
export const  useStore = defineStore('main', {
    state: () => ({
        counter: 0
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    }
})
```
大多数时候，`getter`只依赖于状态，但是，它们可能需要使用其他`getter`。因此，当定义一个常规函数时，我们可以通过这个函数访问整个`store`实例，但需要定义返回的类型(在`TypeScript`中)。这是由于`TypeScript`中的一个已知限制，不会影响用箭头函数定义的`getter`，也不会影响不使用`This`的`getter`:

```js
export const useStore = defineStore('mian', {
    state: (() => {
        counter: 0
    }),
    getters: {
        // 自动推断类型为nubmer
        doubleCount(state) {
            return state.counter * 2
        },
        // 返回的类型必须被设置
        doublePlusOne(): number {
            // autocompletion and typings for the whole store
            return this.doubleCount + 1
        }
    }
})
```
然后你可以直接访问`store`实例`getter`：

```vue
<template>
    <p>Double count is {{ store.doubleCount }}</p>
</tempalte>
<script>
    export default {
        setup() {
            const store = useStore()
            return { store }
        }
    }
</script>
```

## 访问其它的getters

与计算属性一样，您可以组合多个`getters`。通过`this`访问任何其他的`getters`。即使您不使用`TypeScript`，您也可以使用`JSDoc`提示IDE输入的类型

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    // type is automatically inferred because we are not using `this`
    doubleCount: (state) => state.counter * 2,
    // here we need to add the type ourselves (using JSDoc in JS). We can also
    // use this to document the getter
    /**
     * Returns the counter value times two plus one.
     *
     * @returns {number}
     */
    doubleCountPlusOne() {
      // autocompletion ✨
      return this.doubleCount + 1
    },
  },
})
```

## 给getters传参数

`Getter`只是后台的计算属性，所以不可能向它们传递任何参数。但是，你可以从`getter`返回一个函数来接受任何参数:

```js
export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
```
然后再组件中这样使用：

```vue
<script>
export default {
    setup() {
        const store = useStore()

        return {
            getUserById: store.getUserById
        }
    }
}
</script>
<template>
  <p>User 2: {{ getUserById(2) }}</p>
</template>
```

注意，当这样做时，**`getter`不再被缓存**，它们只是您调用的函数。然而，你可以在`getter`本身中缓存一些结果，这是不常见的，但更高效:
```js
export const useStore = defineStore('main', {
  getters: {
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active)
      return (userId) => activeUsers.find((user) => user.id === userId)
    },
  },
})
```

## 访问其它实例的getters

要使用另一个`store`中的 `getter`，你可以直接在`getter`中使用它:

```js
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```

## 在setup()中的用法

你可以直接访问任何`getter`作为存储的属性(完全像`state`属性):

```js
export default {
  setup() {
    const store = useStore()

    store.counter = 3
    store.doubleCount // 6
  },
}
```

## Options API 中的用法

对于以下示例，您可以假设创建了以下`store`:
```js
// Example File Path:
// ./src/stores/counterStore.js

import { defineStore } from 'pinia',

const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCounter() {
      return this.counter * 2
    }
  }
})
```

## 使用 setup()

虽然`Composition API`并不适合所有人，但是`setup()`钩子可以让`Pinia`更容易在`Options API`中使用。不需要额外的帮助函数!

```js
import { useCounterStore } from '../stores/counterStore'

export default {
  setup() {
    const counterStore = useCounterStore()

    return { counterStore }
  },
  computed: {
    quadrupleCounter() {
      return counterStore.doubleCounter * 2
    },
  },
}
```

## 不使用 setup()

你可以使用在前一节中使用的`mapState()`函数来映射到`getter`:

```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  computed: {
    // gives access to this.doubleCounter inside the component
    // same as reading from store.doubleCounter
    ...mapState(useCounterStore, ['doubleCount'])
    // same as above but registers it as this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'doubleCounter',
      // you can also write a function that gets access to the store
      double: store => store.doubleCount,
    }),
  },
}
```