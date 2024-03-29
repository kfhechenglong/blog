
# `vue2`及`vue3`响应式原理理解

响应式数据的核心就是数据变化能被知道，对象在`vue2`中使用了`defineProperty`将数据定义成响应式数据（拦截了所有的）
1. 所谓数据响应式就是能够使数据变化可以被检测并对这种变化做出响应的机制。
2. `MVVM`框架中要解决的一个核心问题是连接数据层和视图层，通过数据驱动应用，数据变化，视图更新，要做
到这点的就需要对数据做响应式处理，这样一旦数据发生变化就可以立即做出更新处理。
3. 以`vue`为例说明，通过数据响应式加上虚拟`DOM`和`patch`算法，开发人员只需要操作数据，关心业务，完全不
用接触繁琐的`DOM`操作，从而大大提升开发效率，降低开发难度。
4. `vue2`中的数据响应式会根据数据类型来做不同处理，如果是对象则采用`ObjectdefineProperty()`的方式定义数据拦截，当数据被访问或发生变化时，我们感知并作出响应;如果是数组则通过覆盖数组对象原型的7个变更方法，使这些方法可以额外的做更新通知，从而作出响应。这种机制很好的解决了数据响应化的问题，但在实际使用中也存在一些缺点:比如初始化时的递归遍历会造成性能损失;新增或删除属性时需要用户使用 `Vue set/delete`这样特殊的`api`才能生效;对于`es6`中新产生的`Map/Set`这些数据结构不支持等问题。
5. 为了解决这些问题，`vue3`重新编写了这一部分的实现:利用`ES6`的`Proxy`代理要响应化的数据，它有很多好
处，编程体验是一致的，不需要使用特殊`api`，初始化性能和内存消耗都得到了大幅改善;另外由于响应化的
实现代码抽取为独立的`reactivity`包，使得我们可以更灵活的使用它，第三方的扩展开发起来更加灵活了。
