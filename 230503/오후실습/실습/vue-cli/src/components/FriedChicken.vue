<template>
  <div>
    <h3>FriedChicken</h3>
    <!-- <ChickenChild :info='info' /> -->
    <p>FriedChicken : {{ info.salt }}</p>
    <ChickenChild :info='info' @start="mid" />
  </div>
</template>

<script>
import ChickenChild from "./ChickenChild.vue"

export default {
    name: 'FriedChicken',
    components: {
        ChickenChild,
    },
    props: {
        info: Object,
    },
    methods: {
        mid(request) {
            this.$emit('mid')
        }
    }
}
</script>

<style>

</style>