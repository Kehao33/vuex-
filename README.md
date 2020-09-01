# vuex_demo

## Vuex 的核心概念

#### State 提供唯一的公共数据源，所有的共享数据都要统一放到 Store 的 State 中进行存储

```js

// 注册全局数据到state下
const store = new Vuex.Store({
  state: {count: 0 }
})

1. 组件访问state中数据的第一种方式
this.$store.state.全局数的名称
eg this.$store.state.count
2. 组件访问State中数据的第二种方式
//  1.在要使用的组件中 从vuex中按需导入mapState函数
import {mapState} from 'vuex'
// 2. 将全局数据映射为当前组件的计算属性
computed： {
  // 将State下的count映射到computed计算属性中
  ...mapState(['count'])
}

```

#### Mutation: 变动，是用于变更 Store 中的数据

1. 只能通过 mutation 变更 Store 中的数据，不可以直接操作 Store 中的数据
2. 通过这种方式可以集中监控所有数据的变化,方便数据的维护

##### 在组件中触发状态的第一种方式 this.\$store.commit('mutations_fun')

```js
// 在store文件对应的js中添加数据更改的逻辑

const store = new Vuex.Store({
  state:{
    count： 0
  },
  mutations: {
    add(state) {
      <!-- 变更状态 -->
      state.count++
    }
  }
})

// 在组件中调用mutations中的状态变更函数
methods:{
  handle() {
    // 触发mutations中的add方法变更数据
    this.$store.commit('add')
  }
}
```

<!-- 在触发mutations是传递参数 -->

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addN (state, n) {
      // n是组件中改变状态的时候进行变更是传递过来的参数
      state.count += step
    }
  }
})


// 在组件中调用mutations中的状态变更函数
methods:{
  handle () {
    // 触发mutations中的add方法变更数据
    this.$store.commit('add',3)// 这里的3将会被mutations下的n接收到
  }
}
```

##### 在组件中触发 mutations 的第二种方式，mapMutations 方法

```js
// 1. 从vuex中按需导入mapMutations函数
import {mapMutations} from 'vuex'

// 2. 在组件中导入mutaions函数，需要将mutaions函数，映射为当前的method方法,这样组件就可以像使用methods使用mutations下的方法
methods: {
  // 将mutations的方法映射到组件的methods下
  ...mapMutations(['fun1','fun2','add','addN',...'fun']),
  componentAdd() {
    // 这便是调用mutions映射到methods下的方法add
    this.add(3)
  }
}

// 注意mutions下不能放异步任务
```

#### Action: vuex 中用来处理异步任务的

如果通过异步操作数据变更，必须通过 Action 而不能使用 mutaion
但是在 Action 中还是要通过触发 mutations 的方法来简介变更数据

##### Action 在组件中第一种使用方式：this.\$store.dispatch('fun'[,params])

```js
  const store = new Vuex.store({
    state: {xxx: xxx},
    // 进行state变更
    mutations:{
      fun1 (state[,args]){
        state.xxxxx
      }
    },
    // actions进行stae更新的异步操作
    actions: {
      addAsync(context) {
        setTimeout(() => {
          // context.commit的参数是mutations下的方法名
          context.commit('add')
        },1000)
      }
    }
  })

  // 组件中触发action
  methods: {
    handle() {
      // 执行action里的异步操作
      this.$store.dispath('addAsync')
    }
  }
```

<!-- 触发actions异步任务时传递参数 -->

```js
const store = Vue.Store({
  sate: {...},
  mutations:{
    addN(state,step){
      state.count += step
    }
  },
  actions: {
    addNAsync(context,step){
      setTimeout(context, step) {
        context.commit('addN',step)
      },1000);
    }
  }

})
// 在组件中触发action
methods:{
  handle(){
    this.$store.dispatch('addNAsync',5)
  }
}
```

##### Action 在组件中二种使用方式

1. 从 vuex 中按需导入 mapAction 函数
   import { mapActions } from 'vuex';

2. 组建中，在 mapActions 的参数中以数组的形式指定 actions 函数，映射为当前组件的 methods 方法
   methods: {
   ...mapActions(['addAsync', 'addNAsync']),
   clickHandle(){
   this.addAsync(); //调用 actions 函数
   }
   }

#### Getter

1. Getter 用于对 store 中的数据进行加工形成数据
2. Store 中的数据发生变化，Getter 的数据也会跟着变化
   // 定义 Getter

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum: state =>{
      return 'current data:' + state.count
    }
  }
})

// 方式1： 组件中获取getter的数据

this.$store.getters.名称

// 方式2：组件中获取getters的数据
// 引入mapGetters函数，映射到计算属性中即可
import { mapGetters } from 'vuex'
computed: {
  ...mapGetters(['showNum'])
}
```
