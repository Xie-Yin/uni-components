<template>
  <div class="x-safe-bottom">
    <div class="x-safe-bottom__container">
      <div class="x-safe-bottom__content">
        <slot />
      </div>
      <div class="x-safe-bottom-blank" />
    </div>
    <div :style="baseStyle" />
    <div class="x-safe-bottom-blank" />
  </div>
</template>

<script>
export default {
  name: 'XSafebottom',
  props: {
    height: {
      type: Number,
      default: 44,
    },
  },
  computed: {
    baseStyle() {
      return [`height: ${this.height}rpx`].join(';')
    },
  },
}
</script>

<style lang="scss" scoped>
.x-safe-bottom {
  position: relative;
  z-index: 100;

  &__container {
    box-shadow: inset 0 0.5px 0 #eceef2;
    position: fixed;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    box-sizing: content-box;
    background-color: #fff;
  }

  &__content {
    padding: 0 32rpx;
    box-sizing: content-box;
  }
}
</style>
