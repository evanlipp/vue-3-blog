import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    currentTime: ''
  }),
  getters: {
    getCurrentTime(state) {
      const date = new Date(state.currentTime)
      return date.toLocaleTimeString('ru-RU', { hour: "numeric", minute: "numeric" })
    }
  },
  mutations: {
    setCurrentTime(state, datetime) {
      state.currentTime = datetime;
    }
  },
  actions: {
    async fetchCurrentTime({commit}) {
      const datetime = await axios('http://worldtimeapi.org/api/timezone/Europe/Moscow')
      .then((response) => {
        commit('setCurrentTime', response.data.datetime)
      })
      .catch(() => {
        commit('setCurrentTime', 'Sorry, time server is not available')
      })
    }
  },
  modules: {
  }
})
