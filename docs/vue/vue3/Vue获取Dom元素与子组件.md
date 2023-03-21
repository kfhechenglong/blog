# Vue获取Dom元素与子组件

在Vue2时我们想获取DOM元素或者组件节点时一般使用`this.$refs.xxx`。现在在Vue3时代，需要稍微改变一点点方法 ，但是还依然使用ref来获取。
```vue
<template>
  <!-- 一个dom元素节点 -->
  <div ref="domRef">这是一个DOM元素</div>
  <!-- 一个子组件 -->
  <child ref="childRef"></child>
</template>

```

下面是实现逻辑:

```ts
import { defineComponent, onMounted, ref } from 'vue'
import Child from '@components/child.vue'
export default defineComponent({
  components: {
    Child
  },
  setup() {
    // 定义元素的节点类型
    const domRef = ref<HTMLElement>()
    // 定义组件的节点类型，使用 InstanceType 配合 typeof 获取子组件的类型
    const childRef = ref<InstanceType<typeof Child>>()
    // 获取元素或者组件时，需要在视图渲染完毕之后进行
    onMounted(() => {
      const text = domRef.value.innerText;
      // 操作子组件
      if (childRef.value) {
        childRef.value.visible = true;
      }
    })
    // 使用ref声明的变量必须return出去才能被template正常使用
    return {
      domRef,
      childRef
    }
  }
})
```
单纯使用 `typeof Child` 虽然可以获得 `Child.vue` 组件的 `Props` 和方法等提示，但在 `VSCode` 的类型推导还不够智能，缺乏更有效的代码补全支持。

上文使用的 `InstanceType<T>` 是 `TypeScript` 提供的一个工具类型，可以获取构造函数类型的实例类型，因此将组件的类型声明为 `InstanceType<typeof Child>` ，不仅可以得到更完善的类型提示，在编程过程中还可以让编辑器提供更完善的代码补全功能。

上面代码还有一个细节是对`childRef.value`增加了一个是否为空的判断，这主要是为了解决TS报错的问题。这是因为一些脚手架创建出来的项目会默认启用 `--strictNullChecks` 选项，导致可能存在null和undefined类型，所以为了解决这个问题才有了上述方案，不过还有另一种方案是
```ts
// 如果仅仅是读取值，则可以使用可选？操作符
const value = childRef.value?.visible;
// 如果是赋值操作，则需要先判断是否为空
if (childRef.value) {
  childRef.value.visible = true;
}
```

