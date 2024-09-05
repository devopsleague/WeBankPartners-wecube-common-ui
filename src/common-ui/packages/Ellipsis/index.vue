<template>
  <div class="common-ui-ellipsis">
    <Tooltip v-if="content" max-width="300" :content="content" :transfer="true">
      <div slot="content" v-html="content"></div>
      <div v-html="content" class="ellipsis">
      </div>
    </Tooltip>
    <div v-else class="ellipsis">
      {{ '-' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseEllipsis',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
