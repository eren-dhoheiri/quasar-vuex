import axios from 'axios'

const state = {
  tasks: []
}

const actions = {
  fetchTasks ({ commit, state }) {
    if (!state.fetched) {
      return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
          commit('FETCH_TODO', response.data)
          resolve(response)
        }, error => {
          reject(error)
        })
      })
    }
  }
}

const mutations = {
  FETCH_TODO (state, tasks) {
    state.tasks = tasks
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default { namespaced: true, state, mutations, actions, getters }
