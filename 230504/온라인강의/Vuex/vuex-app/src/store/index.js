import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // data
  state: {
    message: 'message in store',
  },

  // computed
  getters: {
    messageLength(state) {
      return state.message.length
    },

    // getters 중첩 가능
    doubleLength(state, getters) {
      return getters.messageLength * 2
    }
  },

  // methods
  mutations: {
    CHANGE_MESSAGE (state, payload) {
    //   console.log(state)
    //   console.log(message)
      state.message = payload
    }
  },
  actions: {
    changeMessage(context, message) {
      // CHANGE_MESSAGE라는 이름의 mutations을 사용할 것
      context.commit('CHANGE_MESSAGE', message)
    }
  },

  modules: {
  }
})
