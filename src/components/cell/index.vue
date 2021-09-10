<template>
  <div class="x-cell">
    <slot name="prefix">
      <div v-if="prefix" :style="prefixStyle" class="x-cell__prefix" @click="$emit('clickPrefix', $event)">
        {{ prefix }}
      </div>
    </slot>
    <div class="x-cell__inner" @click="$emit('click', $event)">
      <slot>
        <div v-if="value.length > 0" class="x-cell__inner-value x-s-text-overflow">
          {{ value[0] }}
        </div>
        <div v-else class="x-cell__inner-placeholder">
          {{ placeholder }}
        </div>
        <div v-if="value.length > 1 && overflow" class="x-cell__inner-overflow">
          +{{ value.length - 1 }}
        </div>
      </slot>
    </div>
    <slot name="suffix">
      <div v-if="suffix" :style="suffixStyle" class="x-cell__suffix" @click="$emit('clickSuffix', $event)">
        <x-icon name="i-arrow-right" color="info" />
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'XCell',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    overflow: Boolean,
    placeholder: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '',
    },
    prefixStyle: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: 'suffix',
    },
    suffixStyle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.x-cell {
  display: flex;
  box-sizing: border-box;
  background-color: var(--color-g1);
  border-radius: 16rpx;
  height: 88rpx;
  padding: 0 24rpx;
  align-items: center;

  &.is-disabled {
    opacity: 0.6;
  }

  &__prefix {
    color: var(--color-g9);
    font-size: 28rpx;
    line-height: 40rpx;
    padding-right: 16rpx;
    margin-right: 16rpx;
    position: relative;

    &::after {
      content: '';
      width: 1px;
      height: 28rpx;
      background-color: var(--color-g3);
      position: absolute;
      top: 6rpx;
      right: 0;
    }
  }

  &__suffix {
    color: var(--color-g8);
    font-size: 28rpx;
    font-weight: 400;
    line-height: 40rpx;
    padding-left: 16rpx;
    height: 40rpx;
    display: flex;
    align-items: center;

    &-icon {
      height: 32rpx;
      width: 32rpx;
    }
  }

  &__inner {
    font-size: 28rpx;
    font-weight: 400;
    line-height: 40rpx;
    color: var(--color-9);
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;
    align-items: center;

    &-overflow {
      line-height: 42rpx;
      border-radius: 21rpx;
      background-color: var(--color-g2);
      color: var(--color-g5);
      padding: 0 16rpx;
      margin-left: 20rpx;
      font-size: 24rpx;
    }

    &-placeholder {
      color: var(--color-g9);
      font-weight: 400;
    }

    &-value {
      min-width: 100rpx;
      max-width: 500rpx;
    }
  }
}
</style>
