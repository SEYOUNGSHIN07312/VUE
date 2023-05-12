import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    articles: [],
  },
  getters: {
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    }
  },
  actions: {
    async getArticles(context){
      // [1] axios then chaining
      // axios({
      //   method : 'GET',
      //   url : `${API_URL}/api/v1/articles/`
      // }).then((result) => console.log(result.data))
      // .catch((error) => console.error(error))


      // [2] axios.get.then chaining
      // axios.get(`${API_URL}/api/v1/articles/`)
      // .then((result) => console.log(result.data))


      // [3] async + await
      // const result = await axios({method : 'GET', url : `${API_URL}/api/v1/articles/`})
      // console.log(result.data)

      // [4] axios.get
      const result = await axios.get(`${API_URL}/api/v1/articles/`)
      console.log(result.data)

      context.commit('GET_ARTICLES', result.data)
  }
  },
  modules: {
  }
})
