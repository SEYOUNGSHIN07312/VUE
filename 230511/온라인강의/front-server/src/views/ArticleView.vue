<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name:'CreateView' }">[CREATE]</router-link>
    <ArticleList/>
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList
  },
  computed:{
  },

  // ArticleView.vue가 생성될 때 데이터를 가져와서 들고 있어야함
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      this.$store.dispatch('getArticles')
    }
  }
}
</script>

<style>

</style>
