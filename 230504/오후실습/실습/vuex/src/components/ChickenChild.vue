<template>
  <div>
    <h5>ChickenChild salt : {{ $store.state.info.salt }}</h5>
    <p>{{ $store.getters.msgLength }}</p>
    <button @click='reduceSalt'>버튼</button>
  </div>
</template>

<script>
export default {
    name: 'ChickenChild',
    methods: {
        // async, await -> actions
        reduceSalt() {
            this.$store.dispatch('changeSalt', 20)
        }
    }
}
</script>

<style>

</style>