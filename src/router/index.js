import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataTable from '@/components/DataTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
      path: '/datatable',
      name: 'DataTable',
      component: HelloWorld
    }
  ]
})
