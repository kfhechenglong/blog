# 从Vuex≤4版本迁移
虽然`Vuex`和`Pinia`结构是不同的，但是大多数逻辑是可以被复用的。本指南将帮助您完成整个过程，并指出可能出现的一些常见陷阱。
## 准备工作
首先，按照开始指南安装`Pinia`
## 重构`Stores`模块
`Vuex`的概念是一个具有多个模块的单个`store`。这些模块可以选择使用名称空间，甚至可以相互嵌套。

转换`Pinia`使用的概念的最简单方法是，您以前使用的每个模块现在都是一个`store`。每个`store`都需要一个`id`，类似于`Vuex`中的名称空间。这意味着每个`sotre`都是通过命名空间设计的。嵌套的模块也可以各自成为自己的`store`。相互依赖的`store`只需要导入另一个`store`。

如何将`Vuex`模块重组到`Pinia store`完全取决于你，但这里有一个建议:
```sh
# Vuex example (assuming namespaced modules)
src
└── store
    ├── index.js           # Initializes Vuex, imports modules
    └── modules
        ├── module1.js     # 'module1' namespace
        └── nested
            ├── index.js   # 'nested' namespace, imports module2 & module3
            ├── module2.js # 'nested/module2' namespace
            └── module3.js # 'nested/module3' namespace

# Pinia equivalent, note ids match previous namespaces
src
└── stores
    ├── index.js          # (Optional) Initializes Pinia, does not import stores
    ├── module1.js        # 'module1' id
    ├── nested-module2.js # 'nested/module2' id
    ├── nested-module3.js # 'nested/module3' id
    └── nested.js         # 'nested' id
```
这为`store`创建了一个扁平的结构，但也保留了之前使用等价`id`的命名空间。如果你在`store`的根目录(在`Vuex`的`store/index.js`文件中)中有一些`state/getters/actions/mutation`，你可能希望创建另一个名为`root`的`store`，它包含所有这些信息。

`Pinia`的目录通常称为`stores`而不是`store`。这是为了强调`Pinia`在`Vuex`中使用多个`stores`，而不是一个`store`。

对于大型项目，您可能希望逐个模块进行转换，而不是一次性转换所有内容。实际上，您可以在迁移过程中混合使用`Pinia`和`Vuex`，因此这种方法也可以工作，这也是命名`Pinia`目录存储的另一个原因。

## 转换单个模块

下面是一个将`Vuex`模块前后转换为`Pinia store`的完整示例，请参见下面的分步指南。`Pinia`的例子使用了一个选项`store`，因为它的结构与`Vuex`最相似:
### Vuex
```js
// Vuex module in the 'auth/user' namespace
import { Module } from 'vuex'
import { api } from '@/api'
import { RootState } from '@/types' // if using a Vuex type definition

interface State {
  firstName: string
  lastName: string
  userId: number | null
}

const storeModule: Module<State, RootState> = {
  namespaced: true,
  state: {
    firstName: '',
    lastName: '',
    userId: null
  },
  getters: {
    firstName: (state) => state.firstName,
    fullName: (state) => `${state.firstName} ${state.lastName}`,
    loggedIn: (state) => state.userId !== null,
    // combine with some state from other modules
    fullUserDetails: (state, getters, rootState, rootGetters) => {
      return {
        ...state,
        fullName: getters.fullName,
        // read the state from another module named `auth`
        ...rootState.auth.preferences,
        // read a getter from a namespaced module called `email` nested under `auth`
        ...rootGetters['auth/email'].details
      }
    }
  },
  actions: {
    async loadUser ({ state, commit }, id: number) {
      if (state.userId !== null) throw new Error('Already logged in')
      const res = await api.user.load(id)
      commit('updateUser', res)
    }
  },
  mutations: {
    updateUser (state, payload) {
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.userId = payload.userId
    },
    clearUser (state) {
      state.firstName = ''
      state.lastName = ''
      state.userId = null
    }
  }
}

export default storeModule
```
### Pinia
```js
// Pinia Store
import { defineStore } from 'pinia'
import { useAuthPreferencesStore } from './auth-preferences'
import { useAuthEmailStore } from './auth-email'
import vuexStore from '@/store' // for gradual conversion, see fullUserDetails

interface State {
  firstName: string
  lastName: string
  userId: number | null
}

export const useAuthUserStore = defineStore('auth/user', {
  // convert to a function
  state: (): State => ({
    firstName: '',
    lastName: '',
    userId: null
  }),
  getters: {
    // firstName getter removed, no longer needed
    fullName: (state) => `${state.firstName} ${state.lastName}`,
    loggedIn: (state) => state.userId !== null,
    // must define return type because of using `this`
    fullUserDetails (state): FullUserDetails {
      // import from other stores
      const authPreferencesStore = useAuthPreferencesStore()
      const authEmailStore = useAuthEmailStore()
      return {
        ...state,
        // other getters now on `this`
        fullName: this.fullName,
        ...authPreferencesStore.$state,
        ...authEmailStore.details
      }

        // 仍然可以使用Vuex的其它原生模块
      // return {
      //   ...state,
      //   fullName: this.fullName,
      //   ...vuexStore.state.auth.preferences,
      //   ...vuexStore.getters['auth/email'].details
      // }
    }
  },
  actions: {
    // 不需要上下文参数, 使用`this`替代
    async loadUser (id: number) {
      if (this.userId !== null) throw new Error('Already logged in')
      const res = await api.user.load(id)
      this.updateUser(res)
    },
    // mutations 现在变成了 actions, 第一个参数 `state` 被默认`this`替换掉
    updateUser (payload) {
      this.firstName = payload.firstName
      this.lastName = payload.lastName
      this.userId = payload.userId
    },
    // 使用' $reset '轻松重置状态
    clearUser () {
      this.$reset()
    }
  }
})
```
# 模块热更新

# 测试

# 不使用`setup()`

# 组合`Stores`