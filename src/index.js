import * as components from './components'

export const uniComponents = {
  install(Vue) {
    Object.values(components).forEach(c => {
      Vue.component(c.name, c)
    })
  },
}
