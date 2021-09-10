import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './app.vue'

import { uniComponents } from '../src/index'

import './styles/index.scss'
import '../src/styles/index.scss'
import 'github-markdown-css/package.json'

Vue.use(VueRouter)
Vue.use(uniComponents)
Vue.prototype.isWeb = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
