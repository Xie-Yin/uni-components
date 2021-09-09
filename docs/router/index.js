import VueRouter from 'vue-router'

export const mdRoutes = [
  {
    path: '',
    name: 'home',
    meta: {
      title: '安装',
    },
    component: () => import('../md/home.md')
  },
  {
    path: 'icon',
    name: 'icon',
    meta: {
      title: 'icon',
    },
    component: () => import('../md/icon.md')
  },
  {
    path: 'input',
    name: 'input',
    meta: {
      title: 'input',
    },
    component: () => import('../md/input.md')
  },
  {
    path: 'picker',
    name: 'picker',
    meta: {
      title: 'picker',
    },
    component: () => import('../md/picker.md')
  },
  {
    path: 'form',
    name: 'form',
    meta: {
      title: 'form',
    },
    component: () => import('../md/form.md')
  },
]

export const demoRoutes = [
  {
    path: 'form',
    name: 'demo-form',
    component: () => import('../demos/form.vue')
  },
  {
    path: 'input',
    name: 'demo-input',
    component: () => import('../demos/input.vue')
  },
  {
    path: 'picker',
    name: 'demo-picker',
    component: () => import('../demos/picker.vue')
  },
  {
    path: 'icon',
    name: 'demo-icon',
    meta: {
      title: 'icon',
    },
    component: () => import('../demos/icon.vue')
  },
  {
    path: '*',
    name: 'demo-*',
    meta: {
      title: ''
    },
    component: () => import('../demos/home.vue')
  },
]

export const routes = [
  {
    path: '/',
    component: () => import('../components/Layout.vue'),
    children: mdRoutes,
  },
  {
    path: '/demo',
    component: () => import('../components/SimulatorLayout.vue'),
    children: demoRoutes
  }
]

const router = new VueRouter({
  routes
})

export default router