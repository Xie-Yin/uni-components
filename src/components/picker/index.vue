<template>
  <div class="x-picker">
    <div
      v-for="option in options"
      :key="option.value"
      class="x-picker__item"
      :class="{ 'is-selected': isSelected(option) }"
      @click="onSelect(option)"
    >
      <div v-if="isSelected(option)" class="x-picker__item-check-tag">
        <x-icon name="i-checkmark" color="#fff" />
      </div>
      <div class="x-picker__item-label x-s-text-overflow">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
const removeByValue = (values, value) => values.filter(o => o !== value)

export default {
  name: 'XPicker',
  inject: ['formItem'],
  props: {
    value: {
      type: [String, Number, Array],
      default: '',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isSelected(option) {
      if (this.multiple) {
        return this.value.find(val => val === option.value) !== undefined
      }
      return this.value === option.value
    },
    onSelect(option) {
      const selected = this.isSelected(option, this.value)
      const setValue = val => {
        this.$emit('input', val)
        this.$emit('change', val)
        this.$nextTick(() => {
          if (this.formItem) {
            this.formItem.validateField('change')
          }
        })
      }
      if (this.multiple) {
        if (selected) {
          setValue(removeByValue(this.value, option.value))
        } else {
          setValue([...this.value, option.value])
        }
      } else if (option.value !== this.value) {
        setValue(option.value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.x-picker {
  overflow: hidden;
  margin-bottom: -32rpx;

  &__item {
    width: 326rpx;
    padding: 0 20rpx;
    box-sizing: border-box;
    height: 88rpx;
    display: flex;
    align-items: center;
    color: var(--x-color-g6);
    font-size: 28rpx;
    border-radius: 16rpx;
    background-color: var(--x-color-g1);
    margin-bottom: 32rpx;
    position: relative;
    float: left;

    &.is-selected {
      color: var(--x-color-g9);
      border: 1px solid var(--x-color-main);
      background-color: #fff;
    }

    &-check-tag {
      position: absolute;
      right: -1px;
      bottom: -1px;
      height: 32rpx;
      width: 32rpx;
      background-color: var(--x-color-main);
      border-radius: 16rpx 0 16rpx 0;
      color: #fff;
      font-size: 26rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:not(:nth-child(2n)) {
      margin-right: 18rpx;
    }

    &-label {
      flex-grow: 1;
      text-align: center;
    }
  }
}
</style>
