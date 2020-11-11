import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Play from '@/views/Play.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      meta: [
        { property: 'og:title',     content: "Did Trump ever say that?"},
        { property: 'og:description', content: 'Did really Trump say that the concept of global warming was created by and for the Chinese? Yes, of course. Want to know more? Take the test.'},
        { property: 'og:site_name', content: 'Did Trump Say'},
        { property: 'og:type',      content: 'website'}
      ]
    }
  },
  {
    path: '/play/',
    name: 'Play',
    component: Play,
    meta: {
      meta: [
        { property: 'og:title',     content: "Let's Play!"},
        { property: 'og:description', content: 'I dare you to beat me at this quiz.'},
        { property: 'og:site_name', content: 'Did Trump Say'},
        { property: 'og:type',      content: 'website'}
      ]
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'Others',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
