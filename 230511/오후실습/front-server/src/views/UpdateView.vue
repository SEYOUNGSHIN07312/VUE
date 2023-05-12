<template>
    <div>
    <h1>게시글 수정</h1>
    <form @submit.prevent="updateArticleDetail">
      <label for="title">제목 : </label>
      <!-- v-model.trim : 텍스트 입력 양쪽 공백 데이터 제거 -->
      <input type="text" id="title" v-model.trim="title"><br>
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <input type="submit" id="submit">
    </form>
    </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
    name: 'UpdateView',
    data() {
        return {
            title: null,
            content: null,
        }
    },
    created() {
        this.getArticleDetail()
    },
    methods: {
        getArticleDetail() {
            axios({
                method: 'get',
                url: `${API_URL}/api/v1/articles/${this.$route.params.id}`
            })
            .then((response) => {
                console.log(response)
                this.title = response.data.title
                this.content = response.data.content
            })
            .catch((error) => {
                console.log(error)
            })
        },
        updateArticleDetail() {
            const title = this.title
            const content = this.content

            if (!title) {
                alert('제목을 입력하세요.')
                return
            } else if (!content) {
                alert('내용을 입력하세요.')
                return
            }

            axios({
                method: 'put',
                url: `${API_URL}/api/v1/articles/${this.$route.params.id}/`,
                data: {title, content}
            })
            .then((response) => {
                console.log(response)
                console.log(this.$route.params.id)
                this.$router.push({name: 'DetailView', params: {id: this.$route.params.id}})
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>