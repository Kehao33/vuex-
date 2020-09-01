<template>
  <div>
    <!-- template中this可以省略 -->
    <!-- <h3>当前最新的count值为：{{this.$store.state.count}} </h3> -->
    <h3>{{this.$store.getters.showNum}} </h3>
    <button @click="addOne">+1</button>
    <button @click="addN">+3</button>
    <button @click="addAsyncOne">异步+1</button>
    <button @click="addAsyncN">异步+N</button>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    addOne () {
      // add对应的是store中mutations下的add方法
      this.$store.commit('add')
    },
    addN () {
      // commit就是触发mutations下的指定函数
      this.$store.commit('addN', 3)
    },
    addAsyncOne () {
      // 异步的让store下的数据异步加一,dispatch就是触发异步
      this.$store.dispatch('addAsync')
    },
    addAsyncN () {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>

<style lang="css">
button {
  margin: 10px;
}
</style>
