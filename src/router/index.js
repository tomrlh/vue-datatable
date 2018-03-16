import Vue from 'vue'
import Router from 'vue-router'
import ExampleOfUse from '@/components/ExampleOfUse'
import DataTable from '@/components/DataTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExampleOfUse',
      component: ExampleOfUse
    },
  ]
})
