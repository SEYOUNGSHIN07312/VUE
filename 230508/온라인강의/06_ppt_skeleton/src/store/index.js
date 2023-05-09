import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import myModule from './modules/myModule'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    message: 'message in state',
    age: 30
  },
  getters: {
    messageLength(state) {
      return state.message.length
    },
    // messageLength를 이용해서 새로운 값을 계산
    doubleLength(state, getters) {
      return getters.messageLength * 2
    },
  },
  mutations: {
    CHANGE_MESSAGE(state, message){
      // console.log(state)
      // console.log(message)
      state.message = message
    },
    LOAD_MESSAGE(state) {
      // localStorage에서 데이터를 꺼내옴 (꺼내오려면 데이터가 있어야하니까 actions - changeMessage에서 저장하도록 함)
      // 자바스크립트 객체로 변환하고 값 변경
      const parsedMessage = JSON.parse(localStorage.getItem('message'))
      state.message = parsedMessage ? parsedMessage : ''
    }
  },
  actions: {
    changeMessage(context, message){
      // console.log(context)
      // console.log(message)
      context.commit('CHANGE_MESSAGE', message)
      // localStorage에 데이터를 저장
      context.dispatch('messageSaveToLocalStorage')
    },
    messageSaveToLocalStorage(context) {
      // JSON 형식의 문자열로 변환하여 저장
      const message = JSON.stringify(context.state.message)
      localStorage.setItem('message', message)
    },
    loadMessage(context) {
      context.commit('LOAD_MESSAGE')
    }
  },
  modules: {
    myModule
  }
})
