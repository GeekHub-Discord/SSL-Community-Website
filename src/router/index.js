import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Index from '@/pages/Index'
import Staff from '@/pages/Staff'
import Guidelines from '@/pages/Guidelines'
import Faq from '@/pages/Faq'
import Cal from '@/pages/Cal'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/guidelines',
      name: 'Guidelines',
      component: Guidelines
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: Faq
    },
    {
      path: '/cal',
      name: 'Cal',
      component: Cal
    }
  ],
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active'
})
