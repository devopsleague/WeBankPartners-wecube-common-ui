import BaseHeaderTitle from './index.vue'

BaseHeaderTitle.install = function (Vue) {
  Vue.component(BaseHeaderTitle.name, BaseHeaderTitle)
}

export default BaseHeaderTitle