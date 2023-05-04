<template>
  <div>
    <h3>FriedChicken salt : {{ $store.state.info.salt }}</h3>
    <p>{{ $store.getters.msgLength }}</p>
    <ChickenChild/>
  </div>
</template>

<script>
import ChickenChild from './ChickenChild.vue'

export default {
    name: 'FriedChicken',
    components: {
        ChickenChild
    }
}
</script>

<style>

</style>