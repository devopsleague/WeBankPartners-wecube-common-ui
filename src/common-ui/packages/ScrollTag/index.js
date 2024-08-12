import BaseScrollTag from './index.vue'

BaseScrollTag.install = function (Vue) {
  Vue.component(BaseScrollTag.name, BaseScrollTag)
}

export default BaseScrollTag