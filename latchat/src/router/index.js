import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import inThePage from '@/components/inThePage/inThePage.vue'
import losePsw from '@/components/losePsw/losePsw.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      // name: 'login',
      component: login
    }, {
      path: '/inThePage',
      // name: 'inThePage',
      component: inThePage
    }, {
      path: '/losePsw',
      // name: 'losePsw',
      component: losePsw
    }
  ]
})
