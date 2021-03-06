import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import sg from '@/components/sg/sg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'sg',
      component: sg
    }
  ]
})
