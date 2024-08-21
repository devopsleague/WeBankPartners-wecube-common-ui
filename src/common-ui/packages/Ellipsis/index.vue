<template>
  <div class="common-ui-ellipsis">
    <Tooltip max-width="300" :content="content">
      <span style="overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;">
        {content || '-'}
      </span>
    </Tooltip>
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
