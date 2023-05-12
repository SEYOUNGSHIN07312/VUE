<template>
  <div class="article-list">
    <h3>Article List</h3>
    <!-- store에서 하나씩 불러오고 article 이름으로 props 내려줌 -->
    <ArticleListItem
    v-for="article in articles" :key="article.id" :article="article"
    />
  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem.vue'

export default {
  name: 'ArticleList',
  components: {
    ArticleListItem
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>

<style>
.article-list {
  text-align: start;
}
</style>
