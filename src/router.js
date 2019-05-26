import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

//ROUTER.JS is where we create our routes
//for each of our routes we create an object that has a PATH, a NAME, and COMPONENT
export default new Router({
  routes: [
    {
      //this is the home route
      path: '/',
      name: 'home',
      component: Home
    },
    {
      //this is the about route
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
