<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ msg }}</p>

    <HelloWorld :msg=msg /> -->
    <h1>APP</h1>
    <p>APP : {{ info.salt }}</p>
    <!-- 오른쪽에서부터 왼쪽으로 흐름 (info라는 데이터를 info의 이름으로 FriedChicken에 넘겨줌)-->
    <FriedChicken :info='info' @mid="end" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import FriedChicken from './components/FriedChicken.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    FriedChicken
  },
  data() {
    return {
      info : {
        salt: 30,
        title: "치킨은 맛있다"
      }
    }
  },
  methods: {
    end: function () {
      this.info.salt = 20
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
