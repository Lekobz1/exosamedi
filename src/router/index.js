import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/molette',
      name: 'molette',
      component: () => import('../views/Molette.vue'),
      children :[{
        path: 'history',
        name : 'History',
        component : () => import('../views/History.vue'),
      },
      {
        path: 'bioMolette',
        name : 'BioMolette',
        component : () => import('../views/BioMolette.vue'),
      }
  ]
    },
    {
      path: '/prestation',
      name: 'prestation',
      component: () => import('../views/Prestation.vue')
    }
  ]
})

export default router
