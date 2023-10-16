import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    currentTime: ''
  }),
  getters: {
    getCurrentTime(state) {
      if (state.currentTime) {
        const date = new Date(state.currentTime)
        return date.toLocaleTimeString('ru-RU', { hour: "numeric", minute: "numeric" })
      } else {
        return "loading..."
      }
    }
  },
  mutations: {
    setCurrentTime(state, datetime) {
      state.currentTime = datetime;
    }
  },
  actions: {
    async fetchCurrentTime({ commit }) {
      try {
        const response = await axios('http://worldtimeapi.org/api/timezone/Europe/Moscow');
        commit('setCurrentTime', response.data.datetime)
      } catch {
        commit('setCurrentTime', null)
      }
    }
  },
})
