<template>
  <div id="app">
    <h1>길이 {{ messageLength }}의 메시지 {{ message }}를 입력받음</h1>
    <h3>x2 : {{ doubleLength }}</h3>
    <input type="text" @keyup.enter="onSubmit" v-model="inputData">
    <h1>{{ level }}</h1>
    <button @click="uplevel">levelup</button>
  </div>
</template>

<script>
// [1]
import { mapState, mapActions } from 'vuex' 

export default {
  name: 'App',
  components: {
  },
  created() {
    this.$store.dispatch('loadMessage')
    console.log(this.$store)
  },
  computed: {

    // [2] - 1 원래 방법
    // message() {
    //   return this.$store.state.message
    // },
    // [2] - 2 배열 매핑
    // ...mapState(['message']),
    // [2] - 3 객체 매핑
    // ...mapState({
    //   message: state => state.message
    // }),
    ...mapState(['age']),
    ...mapState({
      message: state => state.message,
      level: state => state.myModule.level,
    }),

    messageLength() {
        return this.$store.getters.messageLength
    },
    doubleLength() {
        return this.$store.getters.doubleLength
    },
  },
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    // changeMessage() {
    //   const newMessage = this.inputData
    //   this.$store.dispatch('changeMessage', newMessage)
    //   this.inputData = null
    // },

    // [3] - 1 -> @keyup.enter = 'changeMessage(inputData)' 형태로 사용
    // ...mapActions(['changeMessage'])
    // [3] - 2 특정 행위를 지정해야하면 메서드 추가로 사용할 것
    ...mapActions({
      actionsChangeMessage: 'changeMessage',
      uplevel: 'incrementLevel',
    }),
    onSubmit() {
      const newMessage = this.inputData
      this.actionsChangeMessage(newMessage)
      this.inputData = null
    },
    // uplevel() {
    //   this.$store.dispatch('incrementLevel')
    // }
  },
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
