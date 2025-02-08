<template>
  <div class="common-ui-header-title">
    <div class="w-header">
      <template v-if="showExpand">
        <Icon v-if="expand" size="26" type="md-arrow-dropdown" @click="handleExpand" style="cursor:pointer" />
        <Icon v-else size="26" type="md-arrow-dropright" @click="handleExpand" style="cursor:pointer" />
      </template>
      <div class="w-header-title" :style="{fontSize: fontSize + 'px'}">{{ title }}<span class="underline"></span></div>
      <slot name="sub-title"></slot>
    </div>
    <div v-show="expand" class="w-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeaderTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 16
    },
    // 是否展示展开按钮
    showExpand: {
      type: Boolean,
      default: true
    },
    // 是否默认展开
    defaultExpand: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      expand: true
    }
  },
  mounted () {
    this.expand = this.defaultExpand
  },
  methods: {
    handleExpand () {
      this.expand = !this.expand
    }
  }
}
</script>

<style lang="less" scoped>
.common-ui-header-title {
  padding-bottom: 3px;
  .w-header {
    display: flex;
    align-items: center;
    &-title {
      font-weight: bold;
      color: #515a6e;
      margin: 0 6px;
      white-space: nowrap;
      .underline {
        display: block;
        margin-top: -12px;
        margin-left: -8px;
        width: 100%;
        padding: 0 8px;
        height: 12px;
        border-radius: 12px;
        background-color: #c6eafe;
        box-sizing: content-box;
      }
    }
  }
  .w-content {
    padding: 20px 10px;
  }
}
</style>
