<template>
  <div>
    <div>hello app</div>
    <my-addition></my-addition>
    <p>--------------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition'
import Subtraction from './components/Subtraction'
export default {
  data () {
    return {}
  },
  components: {
    // 这里注册我们要使用的组件
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>

<style lang="stylus"></style>
