import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Wake Up',
        done: false
      },
      {
        id: 2,
        title: 'Get Bananas',
        done: false
      },
      {
        id: 3,
        title: 'Eat Bananas',
        done: false
      },
    ],
    snackbar: {
      show: false,
      text:''
    }
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    showSnackbar(state, text){
      let _timeOut = 0
      if(state.snackbar.show) {
        state.snackbar.show = false
        _timeOut = 300
      }
      setTimeout(_=> {
        state.snackbar.show = true
        state.snackbar.text = text
      },_timeOut)
    },
    hideSnackbar(state) {
      state.snackbar.show = false
    }
  },
  actions: {
    addTask({commit}, newTaskTitle){
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task Added')
    },
    deleteTask({commit}, id){
      commit('deleteTask', id)
      commit('showSnackbar', 'Task Deleted')
    }
  },
  getters: {
  }
})
