<template>
  <div>
    <h5>{{ article.id }}</h5>
    <p>{{ article.title }}</p>
    <router-link :to="{name:'DetailView', params: {id:article.id}}">[DETAIL]</router-link><br><br>
    <!-- 삭제 해보는 중 -->
    <form @submit.prevent="deleteArticle">
      <input type="submit" value="DELETE">
    </form>
    <hr>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'ArticleListItem',
  // 부모에서 내려온 데이터 받음
  props: {
    article: Object,
  },
  methods: {
    deleteArticle() {
      const article = this.article

      axios({
        method: 'delete',
        url: `${API_URL}/api/v1/articles/${article.id}`
      })
      .then((response) => {
        console.log(response)
        this.getArticles()
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getArticles() {
      this.$store.dispatch('getArticles')
    }
  }
}
</script>

<style>

</style>
