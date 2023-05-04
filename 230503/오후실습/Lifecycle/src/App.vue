<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <button @click="count++">버튼</button>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'App',
  data() {
    return {
      count: 1,
    }
  },
  // 순서 바꿔도 생명주기 함수는 생명주기대로 작동
  async created(){
    // console.log('created', this.count)
    // console.log('created', document.querySelector('h1')) // null (created 시점에서 접근 불가)

    const result = await axios.get('https://koreanjson.com/todos')
    console.log(result)
    console.log(result.data[2])
  },
  beforeCreate(){
    console.log('beforeCreate', this.count)
  },
  beforeMount(){
    console.log('beforeMount', this.count)
    console.log('beforeMount', document.querySelector('h1')) // null
  },
  mounted(){
    console.log('mounted', this.count)
    console.log('mounted', document.querySelector('h1')) // <h1></h1>
  },
  beforeUpdate(){
    console.log('beforeUpdate', this.count)
    console.log('beforeUpdate', document.querySelector('h1'))
  },
  updated(){
    console.log('updated', this.count)
    console.log('updated', document.querySelector('h1'))
  },
  beforeDestroy(){
    console.log('beforeDestroy', this.count)
    console.log('beforeDestroy', document.querySelector('h1'))
  },
  destroyed(){
    console.log('destroyed', this.count)
    console.log('destroyed', document.querySelector('h1'))
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
