<template>
  <div :style="iconStyle" class="x-icon" @click="click">
    <img v-if="isImg" class="x-icon__img" :src="name" :mode="imgMode" />
    <span v-else class="x-icon__icon x-iconfont" :class="iconClass" />
  </div>
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'inherit',
    },
    size: {
      type: [Number, String],
      default: 'inherit',
    },
    imgMode: {
      type: String,
      default: 'aspectFill',
    },
  },
  computed: {
    isImg() {
      return /^http[s]*:\/\//.test(this.name)
    },
    iconStyle() {
      let color = 'inherit'
      if (
        !['primary', 'success', 'error', 'waring', 'info'].includes(this.color)
      ) {
        color = this.color
      }
      return `font-size: ${this.size}; color: ${color};`
    },
    iconClass() {
      const classs = [this.name]
      if (
        ['primary', 'success', 'error', 'waring', 'info'].includes(this.color)
      ) {
        classs.push(`--${this.color}`)
      }
      return classs
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped lang="scss">
@import "./iconfont.css";
.x-icon {
  display: inline-flex;
  align-items: center;
  width: 1em;
  height: 1em;

  &__img {
    width: 100%;
    height: 100%;
  }

  &__icon {
    position: relative;

    &.--primary {
      color: var(--x-color-main);
    }
    &.--success {
      color: var(--x-color-success);
    }
    &.--error {
      color: var(--x-color-error);
    }
    &.--warning {
      color: var(--x-color-warning);
    }
    &.--info {
      color: var(--x-color-info);
    }
  }
}
</style>
