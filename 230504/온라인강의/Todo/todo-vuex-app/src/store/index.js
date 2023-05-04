import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: '할일 1',
        isCompleted: false,
      },
      {
        title: '할일 2',
        isCompleted: false,
      },
      {
        title: '할일 3',
        isCompleted: true,
      },
      {
        title: '할일 4',
        isCompleted: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
      console.log(state.todos)
    }
  },
  actions: {
    // (actions, payload)
    createTodo(context, todoTitle) {
      // TodoListItem 형태 맞춰주기
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }

      console.log(todoItem)
      context.commit('CREATE_TODO', todoItem)
    }
  },
  modules: {
  }
})
