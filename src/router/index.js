import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AttSocioView from '@/views/AttSocioView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LicencasAdobeView from '@/views/LicencasAdobeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginview',
      component: LoginView
    },
    {
      path: '/',
      name: 'homeview',
      component: HomeView,
      children: [
        {
          path: 'dashboardview',
          name: 'dashboardview',
          component: DashboardView
        },
        {
          path: 'attsocioview',
          name: 'attsocioview',
          component: AttSocioView
        },
        {
          path: 'licencasadobeview',
          name: 'licencasadobeview',
          component: LicencasAdobeView
        }
      ]
    },
  ]
})

export default router
