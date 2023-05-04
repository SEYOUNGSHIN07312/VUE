import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
      title: '치킨은 맛있다',
      salt: 30,
    }
  },
  getters: {
    msgLength(state) {
      return state.info.title.length
    }
  },
  mutations: {
    CHANGE_SALT(state, newSalt) {
      state.info.salt = newSalt
    }
  },
  actions: {
    changeSalt(context, newSalt) {
      context.commit('CHANGE_SALT', newSalt)
    }
  },
  modules: {
  }
})
