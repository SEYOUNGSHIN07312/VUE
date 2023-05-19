<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'CreateView' }">[CREATE]</router-link>
    <ArticleList />
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부 -> 값이 변경되면 알아서 바뀜
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      if (this.isLogin) {
        this.$store.dispatch('getArticles') // 로그인 O -> getArticles action 실행
      } else {
        alert('로그인이 필요한 페이지입니다.')
        this.$router.push({name: 'LogInView'}) // 로그인 X -> login 페이지로 이동
      }
    }
  }
}
</script>

<style>

</style>
