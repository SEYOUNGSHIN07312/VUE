<template>
  <div id="app">
    {{ msg }}
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // data() {
  //   return {
  //     msg : this.$store.state.msg
  //   }
  // }

  // 데이터 캐싱되어있음
  computed: {
    msg() {
      return this.$store.state.msg
    }
  },
  mounted() {
    console.log('hi')

    // [1]
    this.$store.dispatch('changeMsg', '집에 가고 싶다')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
