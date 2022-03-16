# 核心概念

## 定义Store

在深入核心概念之前，我们需要知道`store`是使用`defineStore()`定义的，它需要一个唯一的名称，作为第一个参数传递

```js
import { defineStore } from 'pinia'

// useStore 可以是任意的定义，比如useUser、useCart
// 第一个参数必须是一个在应用程序中唯一的名称
export const useStore = defineStore('main', {
    // 其它配置项
})
```
这个名称(也称为`id`)是必需的，`Pinia`使用它来连接`store`到`devtools`。将返回的函数命名为`use…`是跨可组合的约定，以使其用法符合习惯。

### 使用store

我们定义了一个`store`，因为只有在`setup()`中调用了`useStore()`，`store`才会被创建:

```js
import { useStore } from '@/stores/counter'

export default {
    setup() {
        const store = useStore()
        
        return {
            // 可以返回store的整个实例，以便在组件模板中使用
            store
        }
    }
}
```
你可以定义任意多的`store`，你应该在不同的文件中定义每个`store`，以最大限度地利用`pinia`(比如自动允许你的`bundle`进行代码分割和`TypeScript`推断)。

如果您还没有使用`setup`组件，您仍然可以使用`Pinia`，需要[参考帮助文档](https://pinia.vuejs.org/cookbook/options-api.html)。

一旦`store`被实例化，您就可以直接在`store`上访问在`state`、`getter`和`action`中定义的任何属性。我们将在下一页中看到这些细节，但自动完成将帮助你。

注意`store`是一个用`reactive`包装的对象，这意味着不需要在`getter`后面写`.value`，但是，就像`setup`中的`props`一样，**我们不能对它进行解构**:

```js
export default defineComponent({
    setup() {
        const store = useStore()
        // ❌这样使用将不会正常生效，因为是失去响应式
        // 这和从props中解构是一样的
        const { name, doubleCount } = store
        name // eduardo
        doubleCount // 2
        return {
            // 结果一直是eduardo
            name,
            // 结果一直是2
            doubleCount,
            // 这种写法具有响应式
            doubleValue: computed(() => store.doubleCount)
        }
    }
})
```

为了从`store`中提取属性，同时保持其`响应式`，您需要使用`storetoref()`。它将为每个`响应式`属性创建引用。当您只从`store`中使用`state`而不调用任何操作时，这是非常有用的。注意，你可以直接从`store`中解构动作，因为它们也被绑定到`store`本身:
```js
import { storeToRefs } from 'pinia'
export default defineComponent({
    setup() {
        const store = useStore()
        // `name` and `doubleCount` are reactive refs
        // This will also create refs for properties added by plugins
        // but skip any action or non reactive (non ref/reactive) property
        const { name, doubleCount } = storeToRefs(store)
        const { increment } = store
        return {
            name,
            doubleCount,
            increment
        }
    }
})
```
## State

