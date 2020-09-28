import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import changeCity from '@/page/changeCity.vue'
import goodsList from '@/page/goodsList.vue'
import Register from '@/page/register.vue'
import Login from '@/page/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: changeCity
    }, {
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList
    }]
  }, {
    path: '/blank',
    name: 'blankPage',
    component: blankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    }, {
      path: 'register',
      name: 'register',
      component: Register
    }]
  }]
})