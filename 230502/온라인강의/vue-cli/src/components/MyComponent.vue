<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild />
    <MyChild />
    <MyChild />
    <MyChild />
  </div>
  <!-- root는 하나여야하므로 div 두개 사용할 수 없음 -->
  <!-- <div></div> -->
</template>

<script>
// MyComponent 안에 MyChild 넣기
// [1] 불러오기
import MyChild from '@/components/MyChild'

export default {
    // F12의 Vue 창에서 보이는 component의 이름
    name: 'MyComponent',
    // [2] 등록하기
    components: {
        MyChild,
    }
}
</script>

<style>
.border {
    border: solid;
    background-color: rgb(101, 207, 149);
}
</style>