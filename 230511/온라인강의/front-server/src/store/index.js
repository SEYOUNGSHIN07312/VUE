import Vue from 'vue'
import Vuex from 'vuex'
// Django에서 비동기로 데이터 가져오기
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    articles: [
      {
        id: 1,
        title: '제목',
        content: '내용'
      },
      {
        id: 2,
        title: '제목2',
        content: '내용2'
      },
    ],
  },
  getters: {
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    }
  },
  actions: {
    getArticles(context) {
      // context.commit() // 값을 변경해서 state에 저장하려면 commit 사용 (필요없으면 굳이?)
      // 불러오는 데이터가 state에 있으면 commit
      // 지금은 API에서 불러오므로 필요 X
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
      })
      .then((response) => {
        // console.log(response, context)
        context.commit('GET_ARTICLES', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
