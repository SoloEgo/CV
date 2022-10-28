import { db } from "@/plugins/db";
import firebase from 'firebase/compat/app'
import { createStore } from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import auth from './helpers/auth'
import content from './helpers/content'
import VueCookies from 'vue-cookies'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLightTheme: (VueCookies.get("isLightTheme") ?? "false") == 'false' ? false : true,
      info: ''
    }
  },
  mutations: {
    ...vuexfireMutations,
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    },
    changeTheme(state, result) {
      state.isLightTheme = result
    }
  },
  modules: {
    auth,
    content
  },
})

export default store