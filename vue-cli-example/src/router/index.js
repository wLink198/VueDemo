import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import TodoTab from '@/components/TodoTab'
import DoneTab from '@/components/DoneTab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/todo',
      name: 'Todo',
      component: TodoTab
    },
    {
      path: '/done',
      name: 'Done',
      component: DoneTab
    }
  ]
})
