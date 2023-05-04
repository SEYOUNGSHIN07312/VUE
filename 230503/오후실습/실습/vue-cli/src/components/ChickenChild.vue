<template>
  <div>
    <h5>ChickenChild</h5>
    <!-- <button v-if='clicked' @click="addSalt">소금 제외</button>
    <button v-else @click="addSalt">소금 추가</button>
    <p v-if="clicked">{{info.salt}} {{info.title}}</p> -->

    <!-- <br><br> -->
    <p>ChickenChild : {{ info.salt }}</p>
    <button @click="start">소금양 변경</button>
  </div>
</template>

<script>

export default {
    name: 'ChickenChild',
    methods: {
        addSalt() {
            this.clicked = !this.clicked
        },
        start() {
            this.$emit('start')
        }
    },
    props:{
        info: Object,
    },
    data() {
        return {
            clicked: false,
        }
    }
}
</script>

<style>

</style>