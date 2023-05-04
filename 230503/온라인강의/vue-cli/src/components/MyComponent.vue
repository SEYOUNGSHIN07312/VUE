<template>
  <div class="border">
    <h1>This is MyComponent</h1>

    <!-- [p-c 1] 보내주고 (부모가 보내는 이름 = 자식에서 사용할 이름 결정) -->
    <MyChild static-props="component(부모)에서 child로"
    :my-props="dynamicProps"
    />

    <!-- 숫자를 보내고 싶을땐? MyChild에서 받아오는 형태가 문자열이므로 한번 더 감싸줘야함 -->
    <!-- 안 감싸면 정수 1이 보내짐 -->
    <MyChild static-props="1"
    :my-props="'1'"
    @child-to-parent="parentGetEvent"
    @child-input="getDynamicData"
    />
    <!-- [c-p 3 부모가 이벤트 듣고 있다가 발생하면 등호 오른쪽 메서드 실행]-->
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  // 함수로 만들어주네 왜? -> 컴포넌트에서 변수로 데이터 쓰려면 함수여야함
  data: function () {
    return {
      dynamicProps: 'It is a data!',
    }
  },
  methods: {
    parentGetEvent(inputData) {
      console.log('자식 컴포넌트에서 발생한 이벤트!')
      console.log(`child에서 보낸 ${inputData} 데이터`)
    },
    getDynamicData(inputData) {
      console.log(`child에서 입력한 ${inputData} 데이터`)
    }
  }
}

</script>

<style>
  .border {
    border: solid;
  }
</style>
