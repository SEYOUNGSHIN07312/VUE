<template>
    <div>
        <h1>Header</h1>
        <Search/>
        <Navigation/>
    </div>
</template>

<script>
import Search from '@/components/Search'
import Navigation from '@/components/Navigation'

export default {
    name:'Header',
    components:{
        Search,
        Navigation,
    }
}
</script>

<style>

</style>