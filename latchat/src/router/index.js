import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import inThePage from '@/components/inThePage/inThePage.vue'
import losePsw from '@/components/losePsw/losePsw.vue'
import message from '@/components/inThePage/message/message.vue'
import trend from '@/components/inThePage/trend/trend.vue'
import interest from '@/components/inThePage/interest/interest.vue'
import initPage from '@/components/inThePage/initPage/initPage.vue'
import rightNav from '@/components/inThePage/rightNav/rightNav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/inThePage',
      name: 'inThePage',
      component: inThePage,
      children: [{
        path: 'message',
        name: 'message',
        component: message,
        children: [{
          path: '',
          // redirect: '/inThePage/message/initPage',
          // name: 'initPage',
          component: initPage
        }, {
          path: 'rightNav',
          // name: 'rightNav',
          component: rightNav
        }]
      }, {
        path: 'trend',
        name: 'trend',
        component: trend
      }, {
        path: 'interest',
        name: 'interest',
        component: interest
      }]
    }, {
      path: '/losePsw',
      name: 'losePsw',
      component: losePsw
    }
  ]
})
