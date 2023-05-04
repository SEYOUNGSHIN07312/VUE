<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- [3] 사용 -->
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Change message"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// [1] 새 vue 불러오기 (@로 대체 가능(src 폴더를 의미) / .vue 생략 가능)
// import MyComponent from '@/components/MyComponent.vue'
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // [2] 등록
    MyComponent
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
