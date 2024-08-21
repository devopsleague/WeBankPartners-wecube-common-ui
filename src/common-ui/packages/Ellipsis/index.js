import BaseEllipsis from './index.vue'

BaseEllipsis.install = function (Vue) {
  Vue.component(BaseEllipsis.name, BaseEllipsis)
}

export default BaseEllipsis