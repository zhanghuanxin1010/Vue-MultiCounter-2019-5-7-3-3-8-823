import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/my/Welcome.vue'
import WelcomeName from '../components/my/WelcomeName.vue'
import MultiCounter from '../MultiCounter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomeName',
      component: WelcomeName
    },
    {
      path: '/Welcome/:name',
      props: true,
      name: 'Welcome',
      component: Welcome,
      children: [
        {
          path: 'counter',
          name: 'counter',
          component: MultiCounter
        }]
    },
    {
      path: '/counter',
      component: MultiCounter
    },
    {
      path: '/todoList',
      redirect: '/'
    }

  ]
})
