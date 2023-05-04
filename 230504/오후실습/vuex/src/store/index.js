import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 모든 data 정보 [data + components]
  state: {
    msg: 'hello',
  },

  // [computed]
  getters: {
  },

  // 동기, 실제 데이터 변경 [methods]
  mutations: {
    // [3]
    CHANGE(state, newMsg) {
      console.log(state)
      state.msg = newMsg
    }
  },

  // 비동기, 실질적으로 데이터 변경하지 않음 + 바꾸기를 요청 [methods]
  // dispatch(A, B) : A - 호출함수, B - 데이터
  actions: {
    // [2]
    changeMsg(context, newMsg) {
      // 보통 모두 대문자로 작성
      context.commit('CHANGE', newMsg)
    }
  },
  modules: {
  }
})
