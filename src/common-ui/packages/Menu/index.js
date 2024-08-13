import BaseMenu from './index.vue'

BaseMenu.install = function (Vue) {
  Vue.component(BaseMenu.name, BaseMenu)
}

export default BaseMenu