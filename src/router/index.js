import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DarkHomeView from '../views/DarkHomeView.vue'
import firebase from 'firebase/compat/app'
import store from '@/store'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: store.state.isLightTheme ? HomeView : DarkHomeView,
      meta: {
        title: 'Soloviev Egor CV',
        metaTags: [
          {
            name: 'description',
            content: 'This is the app provides my CV',
            auth: false
          }
        ]
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/PortfolioView.vue'),
      meta: {
        title: 'Soloviev Egor CV',
        metaTags: [
          {
            name: 'description',
            content: 'This is the app provides my CV',
            auth: false
          }
        ]
      }
    },
    {
      path: '/privacy_policy',
      name: 'privacy_policy',
      component: () => import('@/views/PrivacyPolicy.vue'),
      meta: {
        title: 'Privacy Policy',
        metaTags: [
          {
            name: 'description',
            content: 'Privacy Policy',
            auth: false
          }
        ]
      }
    },
    {
      path: "/admin",
      name: "Administration",
      title: 'AdminPanel',
      meta: { auth: true },
      component: () =>
        import("@/views/AdminPanel.vue"),
    },
    ,
    {
      path: "/login",
      name: "Login page",
      title: 'Login page',
      meta: { auth: false },
      component: () =>
        import("@/views/LoginPage.vue"),
    },
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
