<template>
  <div class="common-ui-scroll-tag" @mouseenter="handleMouseEnter($event)" @mouseleave="handleMouseLeave($event)">
    <div v-for="(i, index) in list" :key="index" class="tag">
      {{ i }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseScrollTag',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleMouseEnter (e) {
      e.target.style.overflowY = 'scroll'
    },
    handleMouseLeave (e) {
      e.target.style.overflowY = 'hidden'
    }
  }
}
</script>

<style lang="less" scoped>
.common-ui-scroll-tag {
  max-height: 76px;
  padding-right: 0px;
  padding: 6px 0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -5px;
  .tag {
    width: fit-content;
    padding: 2px 5px;
    background: #f7f7f7;
    border: 1px solid #e8eaec;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 16px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 16px;
}
</style>
