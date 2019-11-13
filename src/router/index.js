import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from './lazyLoading'

Vue.use(Router)

export default new Router({
  mode: 'history',

  scrollBehavior () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  },

  routes: [
    {
      path: '*',
      redirect: { path: '/' }
    },
    {
      path: '/',
      name: 'home',
      component: lazyLoading('Home')
    }
  ]
})
