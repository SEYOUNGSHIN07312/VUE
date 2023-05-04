<template>
  <div>
    <h3>This is child component</h3>
    <!-- [p-c 3] 쓴다 -->
    <p>{{ staticProps }}</p>
    <p>{{ myProps }}</p>

    <!-- [c-p 1] 이벤트 발생시키고 -->
    <button @click="childToParent">클릭!</button>
    <!-- v-model로 양방향 연결, 엔터를 누르면 childInput 메서드 실행 -->
    <input type="text" v-model="childInputData" @keyup.enter="childInput">
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  data: function () {
    return {
      childInputData: null,
    }
  },
  // [p-c 2] 받고
  props: {
    staticProps: String,
    myProps: String,
  },
  // [c-p 2] 부모로 전달하고
  methods: {
    childToParent: function () {
      // child-to-parent 이벤트 발생 + child Data 넘겨줌
      this.$emit('child-to-parent', 'child Data')
    },
    childInput: function () {
      this.$emit('child-input', this.childInputData)
      this.childInputData = ""
    }
  }
}
</script>

<style>
  
</style>
