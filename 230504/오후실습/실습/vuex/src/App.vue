<template>
  <div id="app">
    <h1>App salt : {{ $store.state.info.salt }}</h1>
    <!-- 바로 접근 -->
    <p>{{ $store.getters.msgLength }}</p>
    <!-- computed에서 정의하고 접근 -->
    <p>{{ msgLength }}</p>
    <FriedChicken/>

    <hr><hr>
    {{ str }}
    <!-- (순회되는 것, 인덱스) -->
    <div v-for="(s, index) in str" :key="index" >{{ s }}</div>
    <div v-for="(array, i) in arrays" :key="`o-${i}`">{{array.name}}</div>
  </div>
</template>

<script>
import FriedChicken from '@/components/FriedChicken.vue'

export default {
  name: 'App',
  components: {
    FriedChicken
  },
  computed: {
    msgLength() {
      return this.$store.getters.msgLength
    }
  },
  data() {
    return {
      str: 'hello world',
      arrays: [
        {id:1, name:'shin'},
        {id:2, name:'se'},
      ]
    }
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
