import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    userPosts: [],
  }),
  getters: {
  },
  mutations: {
  },
  actions: {

//    async getUserPosts() {
//   const document = await getDoc(doc(dataBase, "users", auth.currentUser.uid))
//   const data = document.data()
//   return Object.values(data)
// }
  },
  modules: {
  }
})
