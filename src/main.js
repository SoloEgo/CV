import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import store from "./store"
import VueCookies from 'vue-cookies'
import { firestorePlugin } from 'vuefire'
import firebase from "@/plugins/firebase"
import 'firebase/compat/auth'
import 'firebase/compat/database'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/assets/styles/bs_reset.css"


let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.use(VueCookies)
    app.use(store)
    app.use(firestorePlugin)
    app.mount("#application")
  }
})