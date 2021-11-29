<template>
  <div class="x-picker-popup">
    <x-cell
      :placeholder="placeholder"
      overflow
      :value="valueLabel"
      @click="showPopup"
      @clickPrefix="showPopup"
      @clickSuffix="showPopup"
    />
    <u-popup v-model="show" mode="bottom" border-radius="16" @close="onBlur">
      <div class="x-picker-popup__title">
        {{ placeholder }}
        <div class="x-picker-popup__title-tips">
          {{ multiple ? '多选' : '单选' }}
        </div>
      </div>
      <scroll-div scroll-y class="x-picker-popup__scroll">
        <div class="x-picker-popup__inner">
          <div
            v-for="option in options"
            :key="option.value"
            class="x-picker-popup__inner-item"
            :class="{ 'is-selected': isSelected(option, stateValue) }"
            @click="onSelect(option)"
          >
            <div class="x-picker-popup__inner-item-label x-s-text-overflow">
              {{ option.label }}
            </div>
          </div>
        </div>
      </scroll-div>
      <x-safe-bottom :height="140">
        <div class="x-button __primary x-picker-popup__confirm" @click="onConfirm">
          确定
        </div>
      </x-safe-bottom>
    </u-popup>
  </div>
</template>

<script>
const removeByValue = (values, value) => values.filter(o => o !== value)

export default {
  name: 'XPickerPopup',
  inject: ['formItem'],
  props: {
    value: {
      type: [String, Number, Array],
      default: () => [],
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
      default: true,
    },
  },
  data() {
    return {
      show: false,
      stateValue: [],
    }
  },
  computed: {
    valueLabel() {
      return this.options.filter(o => this.isSelected(o, this.value)).map(o => o.label)
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        console.log(val)
        this.stateValue = val
      },
    },
  },
  methods: {
    showPopup() {
      this.show = true
      this.stateValue = this.value
    },
    isSelected(option, value) {
      if (!value) return false

      if (this.multiple) {
        return value.find(val => val === option.value) !== undefined
      }
      return value === option.value
    },
    onSelect(option) {
      const selected = this.isSelected(option, this.stateValue)
      if (this.multiple) {
        if (selected) {
          this.stateValue = removeByValue(this.stateValue, option.value)
        } else {
          this.stateValue = [...this.stateValue, option.value]
        }
      } else {
        this.stateValue = option.value
      }
    },
    onConfirm() {
      this.show = false
      this.$emit('input', JSON.parse(JSON.stringify(this.stateValue)))
      const itemList = this.options.filter(v => this.stateValue.includes(v.value))
      this.$emit('confirm', itemList)
      if (this.formItem) {
        this.formItem.validateField('change')
      }
    },
    onBlur() {
      if (this.formItem) {
        this.formItem.validateField('blur')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.x-picker-popup {
  &__title {
    padding: 48rpx 40rpx 32rpx;
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    font-size: 36rpx;
    line-height: 50rpx;
    color: var(--x-color-g9);

    &-tips {
      margin-left: 20rpx;
      color: var(--x-color-g4);
      font-size: 28rpx;
      line-height: 40rpx;
    }
  }

  &__scroll {
    max-height: 60vh;
    min-height: 440rpx;
  }

  &__inner {
    padding: 64rpx 40rpx 64rpx;
    display: flex;
    flex-wrap: wrap;
    &-item {
      height: 84rpx;
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20rpx;
      color: var(--x-color-g6);
      background-color: var(--x-color-g1);
      border-radius: 16rpx;
      margin-bottom: 32rpx;
      box-sizing: border-box;

      &.is-selected {
        color: var(--x-color-main);
        background-color: #f5f5f5;
      }

      &:not(:nth-child(3n)) {
        margin-right: 4.7%;
      }
    }
  }

  &__confirm {
    margin: 24rpx 0;
  }
}
</style>
