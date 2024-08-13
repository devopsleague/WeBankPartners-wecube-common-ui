/**
 * 统一导出组件
 */
import BaseSearch from './Search' // 搜索组件
import BaseScrollTag from './ScrollTag' // 区域可滚动组件
import BaseMenu from './Menu' // 侧边栏组件
import BaseHeaderTitle from './HeaderTitle' // 标题组件
import './common.less'

// 组件集合用于遍历
const components = [BaseSearch, BaseScrollTag, BaseMenu, BaseHeaderTitle]

// 定义install方法
const install = function (Vue) {
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否存在全局的Vue对象，是的话代表是CDN方式使用，那么自动进行注册
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
}

export default {
  install,
  BaseSearch,
  BaseScrollTag,
  BaseMenu,
  BaseHeaderTitle
}