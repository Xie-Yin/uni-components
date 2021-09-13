import VueRouter from 'vue-router'

export const mdRoutes = [
  {
    path: '',
    name: 'home',
    meta: {
      title: '安装',
    },
    component: () => import('../md/home.md'),
  },
  {
    path: 'icon',
    name: 'icon',
    meta: {
      title: 'icon 图标',
    },
    component: () => import('../md/icon.md'),
  },
  {
    path: 'input',
    name: 'input',
    meta: {
      title: 'input 输入框',
    },
    component: () => import('../md/input.md'),
  },
  {
    path: 'picker',
    name: 'picker',
    meta: {
      title: 'picker 选择器',
    },
    component: () => import('../md/picker.md'),
  },
  {
    path: 'form',
    name: 'form',
    meta: {
      title: 'form 表单',
    },
    component: () => import('../md/form.md'),
  },
  {
    path: 'cell',
    name: 'cell',
    meta: {
      title: 'cell 单元格',
    },
    component: () => import('../md/cell.md'),
  },
]

export const demoRoutes = [
  {
    path: 'form',
    name: 'demo-form',
    component: () => import('../demos/form.vue'),
  },
  {
    path: 'input',
    name: 'demo-input',
    component: () => import('../demos/input.vue'),
  },
  {
    path: 'picker',
    name: 'demo-picker',
    component: () => import('../demos/picker.vue'),
  },
  {
    path: 'icon',
    name: 'demo-icon',
    meta: {
      title: 'icon',
    },
    component: () => import('../demos/icon.vue'),
  },
  {
    path: 'cell',
    name: 'demo-cell',
    meta: {
      title: 'cell',
    },
    component: () => import('../demos/cell.vue'),
  },
  {
    path: '*',
    name: 'demo-*',
    meta: {
      title: '',
    },
    component: () => import('../demos/home.vue'),
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
    children: demoRoutes,
  },
]

const router = new VueRouter({
  routes,
})

export default router
