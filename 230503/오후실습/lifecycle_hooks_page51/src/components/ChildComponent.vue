<template>
  <div>
    value : {{ value }}
    <button @click="changeValue">change value</button><br>
  </div>
</template>

<script>
export default {
  name:'ChildComponent',
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    changeValue() {
      this.value = this.value + 1
    }
  },
  // 이벤트 및 라이프 사이클 초기화
  beforeCreate() {
    console.log('Child beforeCreate')
  },
  // 화면에 반응성 주입, 비동기 데이터 가져오기
  created() {
    console.log('Child created')
  },
  // el, template 속성 확인
  beforeMount() {
    console.log('Child beforeMount')
  },
  // 인스턴스 화면에 부착 -> 이 이후부터 DOM 요소 접근 가능
  mounted() {
    console.log('Child mounted')
  },
  // 데이터 변경
  beforeUpdate() {
    console.log('Child beforeUpdate')
  },
  // 화면 재 렌더링 및 데이터 갱신
  updated() {
    console.log('Child updated')
  },
  beforeDestroy() {
    console.log('Child beforeDestroy')
  },
  destroyed() {
    console.log('Child destroyed')
  }
}
</script>

<style>

</style>
