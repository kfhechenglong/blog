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

大多数时候，`state`是`Store`的中心部分。人们通常从定义应用程序的`state`开始。在`Pinia` 中，`state`被定义为一个返回初始`state`的函数。这保证了`Pinia`在服务器端和客户端都能使用。

```js
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // 建议使用箭头函数进行完整的类型推断
  state: () => {
    return {
      // 这些所以的属性类型将被自动推断出来
      counter: 0,
      name: 'Eduardo',
      isAdmin: true
    }
  },
})
```
>TIP

>如果您使用`Vue 2`，您在`state`中创建的数据应遵循与`Vue`实例中`data`相同的规则，即`state`对象必须是普通的，并且在向其添加新属性时需要调用`Vue.set()`。另请参阅：

### 访问state

通常，你可以直接通过`store`实例来读写`state`
```js
const store = useStore()

store.counter++
```
### 重置state

通过调用`$reset()`函数，可以将`state`重置回初始状态
```js
const store = useStore()
store.$reset()
```

### Options API使用
在以下示例，您可以假设创建了以下store:
```js
// stores/counterStore
import { defineStore } from 'pinia'
const useCounterStore = defineStore('counterStore', {
    state: () => ({
        counter: 0
    })
})
```
### 使用setup()
虽然`Composition API`并不适合所有人，但是`setup()`钩子可以让`Pinia`更容易在`Options API`中使用。不需要额外的辅助函数!
```js
import { useCounterStore } from '../stores/counterStore'
export default {
    setup() {
        const counterStore = useCounterStore()
        return { counterStore }
    },
    computed: {
        tripleCounter() {
            return this.counterStore.counter * 3
        }
    }
}
```
### 不使用setup()

如果您不使用`Composition API`，而您使用的是`computed`, `methods`，…，则你可以使用`mapState()`辅助函数将状态属性映射为只读计算属性：

```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  computed: {
    // gives access to this.counter inside the component
    // same as reading from store.counter
    ...mapState(useCounterStore, ['counter'])
    // same as above but registers it as this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'counter',
      // you can also write a function that gets access to the store
      double: store => store.counter * 2,
      // it can have access to `this` but it won't be typed correctly...
      magicValue(store) {
        return store.someGetter + this.counter + this.double
      },
    }),
  },
}

```
### 可修改的state

如果您希望能够修改这些状态属性（例如，如果您有一个表单），您可以使用`mapWritableState()`代替。请注意，您不能像`mapState()`那样传递函数：

```js
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../store/counterStore'

export default {
    computed: {
        ...mapWritableState(useCounterStore, ['counter'])
        ...mapWritableState(useCounterStore, {
            myOwnName: 'counter',
        })
    }
}
```

>TIP

>您不需要`mapWritableState()`来处理像数组这样的集合，除非你用`cartItems = []`来替换整个数组，`mapState()`仍然允许你在你的集合上调用方法。

### 改变state

除了直接使用`store.counter++`来修改`store`之外，你还可以使用`$patch`方法，它允许你同时修改多个改变：
```js
store.$patch({
    counter: store.counter + 1,
    name: 'Abalam',
})
```

然而，使用这种语法应用某些改变确实很难或代价高昂：任何集合的修改(例如，从数组中添加、删除、修改元素）都需要您创建一个新集合。正因为如此，`$patch`方法也接受一个函数来对这种难以应用于`patch`对象的改变进行分组:

```js
cartStore.$patch((state) => {
    state.items.push({ name: 'shoes', quantity: 1 })
    state.hasChanged = true
})
```

这里的主要区别是`$patch()`允许您在`devtools`中将多个改变分组到一个条目中。注意，直接对`state`和`$patch()`的更改将呈现在devtools中，并且需要花费些时间(在`Vue 3`中还没出现)。

### 更换state
您可以通过将`store`的`$state`属性设置一个新对象来替换整个`store`的状态:
```js
store.$state = { counter: 666, name: 'Paimon' }
```
你也可以通过`pinia`实例的`state`来更换整体的state状态，这通常被用在`SSR`

```js
pinia.state.value = {}
```

### 订阅state

您可以通过`store`的`$subscribe()`方法查看状态及其变化，这与`Vuex`的`subscribe`方法类似。与常规的`watch()`相比，使用`$subscribe()`的优势在于，订阅只会在补丁之后触发一次(例如，当使用上面的函数版本时)。

```js
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // same as cartStore.$id
  mutation.storeId // 'cart'
  // only available with mutation.type === 'patch object'
  mutation.payload // patch object passed to cartStore.$patch()

  // persist the whole state to the local storage whenever it changes
  localStorage.setItem('cart', JSON.stringify(state))
})
```

默认情况下，状态订阅被绑定到添加它们的组件上(如果`store`在组件的`setup()`中)。这意味着，当组件被卸载时，它们将被自动删除。如果你想在组件卸载后保留它们，传递`{ detached: true }` 作为第二个参数来从当前组件中分离状态订阅:

```js
export default {
  setup() {
    const someStore = useSomeStore()

    // 在组件卸载后，将保留订阅
    someStore.$subscribe(callback, { detached: true })

    // ...
  },
}
```

>TIP

>可以在`pinia`实例上观察完整的状态
>```js
>watch(
>  pinia.state,
>  (state) => {
>    // 当状态变化时，把它保存在本地
>    localStorage.setItem('piniaState', JSON.stringify(state))
>  },
>  { deep: true }
>)
>```
