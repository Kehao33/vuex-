<template>
  <div>
    <!-- <h3>当前最新的count值为：{{count}} </h3> -->
    <h3>{{showNum}}</h3>
    <button @click='btnSub'>-1</button>
    <button @click='btnSubN'>-3</button>
    <button @click='subAction'>异步 -1</button>
    <button @click='asyncSubN'>异步 -3</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    // 映射store下的状态到computed计算属性中
    ...mapState(['count']),
    // 映射getters下的数据到computed计算属性中
    ...mapGetters(['showNum'])
  },
  methods: {
    // 映射mutations到methods中
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAction', 'subNAction']),
    btnSub () {
      // 这里就是在调用mutations里的sub方法改变全局状态
      this.sub()
    },
    btnSubN () {
      this.subN(3)
    },
    asyncSubN () {
      this.subNAction(3)
    }
  }
}
</script>
