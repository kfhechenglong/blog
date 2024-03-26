每一个 Vuex 应用的核心就是 store（仓库），它包含着你的应用中大部分的状态 (state)。
状态管理有5个核心：state、getter、mutation、action、module。

State
1、单一状态树，定义应用状态的默认初始值，页面显示所需的数据从该对象中进行读取。
2、Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。它便作为一个“唯一数据源”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。
3、单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
4、不可直接对 state 进行更改，需要通过 Mutation 方法来更改。
5、由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：

Getter
1、可以认为是 store 的计算属性，对 state 的加工，是派生出来的数据。
2、就像 computed 计算属性一样，getter 返回的值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。
3、可以在多组件中共享 getter 函数，这样做还可以提高运行效率。
4、在 store 上注册 getter，getter 方法接受以下参数：state, 如果在模块中定义则为模块的局部状态
5、getters, 等同于 store.getters

Mutation
1、Vuex中store数据改变的唯一方法就是mutation
2、通俗的理解，mutations 里面装着改变数据的方法集合，处理数据逻辑的方法全部放在 mutations 里，使数据和视图分离。

Action
action 类似于 mutation ，不同在于：
1、action 提交的是 mutation，通过 mutation 来改变 state ，而不是直接变更状态。
2、action 可以包含任意异步操作。

Module
1、由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
2、为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割