import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 专门用来数据的变更，mutations就是变更的意思
  mutations: {
    // state就代表全局状态
    add (state) {
      // 变更数据
      state.count++
    },
    addN (state, n) {
      state.count += n
    },
    sub (state) {
      state.count -= 1
    },
    subN (state, n) {
      state.count -= n
    }
  },
  actions: {
    addAsync (context) {
      // context就是store的上下文，拥有commit方法
      setTimeout(() => {
        // context 触发mutations下的方法
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, n) {
      setTimeout(() => {
        context.commit('addN', n)
      }, 1000)
    },
    subAction (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 900)
    },
    subNAction (context, n) {
      setTimeout(() => {
        context.commit('subN', n)
      }, 900)
    }
  },
  getters: {
    showNum (state) {
      return 'current count: ' + state.count
    }
  },
  modules: {}
})
