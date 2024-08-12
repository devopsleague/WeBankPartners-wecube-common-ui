import BaseSearch from './index.vue'

BaseSearch.install = function (Vue) {
  Vue.component(BaseSearch.name, BaseSearch)
}

export default BaseSearch